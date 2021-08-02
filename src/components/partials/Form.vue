<template>
    <div class="flex-1 p-2">
        <div>
            <p class="text-sm font-medium text-blue-sharpe">Bill</p>
            <form action="" class="mt-2 flex flex-col w-full">
                <div class="flex flex-wrap items-center w-full mb-4 relative h-8 bg-blue-ice bg-opacity-25 rounded">
                    <div class="flex items-center justify-center w-4 p-4 h-full">
                        <span
                            class="flex items-center leading-normal bg-transparent px-3 border-0 rounded rounded-r-none text-sm text-gray-400"
                        >
                            <i class="fas fa-dollar-sign"></i>
                        </span>
                    </div>
                    <input
                    type="text"
                    v-model="totalBill"
                    class="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-8 border-grey-light rounded rounded-l-none px-3 self-center relative bg-transparent text-base outline-none text-right text-blue-sharpe"
                    placeholder="0.00"
                    />
                </div>
            </form>
        </div>

        <div class="mt-4">
            <p class="text-sm text-blue-sharpe">Select Tip</p>

            <div class="w-full grid grid-cols-3 gap-4 mt-2">
                <div class="bg-blue-sharpe text-white rounded-md h-8 flex items-center justify-center cursor-pointer" 
                :class="{'bg-blue-java': tipPercentage === 5}" @click="calculateTip(5)">5%</div>
                <div class="bg-blue-sharpe text-white rounded-md h-8 flex items-center justify-center cursor-pointer" 
                :class="{'bg-blue-java': tipPercentage === 10}" @click="calculateTip(10)">10%</div>
                <div class="bg-blue-sharpe text-white rounded-md h-8 flex items-center justify-center cursor-pointer" 
                :class="{'bg-blue-java': tipPercentage === 15}" @click="calculateTip(15)">15%</div>
                <div class="bg-blue-sharpe text-white rounded-md h-8 flex items-center justify-center cursor-pointer" 
                :class="{'bg-blue-java': tipPercentage === 25}" @click="calculateTip(25)">25%</div>
                <div class="bg-blue-sharpe text-white rounded-md h-8 flex items-center justify-center cursor-pointer" 
                :class="{'bg-blue-java': tipPercentage === 50}" @click="calculateTip(50)">50%</div>
                <div class="bg-blue-squeeze text-blue-sharpe rounded-md h-8 flex items-center justify-center">
                    <input
                    type="text"
                    v-model="customPercentage"
                    class="w-full leading-normal border-0 border-grey-light rounded rounded-l-none px-3 self-center relative bg-transparent text-base outline-none text-right text-blue-sharpe"
                    placeholder="Custom"
                    />
                </div>
            </div>
        </div>

        <div class="mt-6">
            <div class="flex items-center justify-between">
                <p class="text-sm text-blue-sharpe">Number of People</p>
                <p v-if="showError" class="text-xs text-red-500">Can't be zero</p>
            </div>

            <form action="" class="mt-2 flex flex-col w-full">
                <div class="flex flex-wrap items-center w-full mb-4 relative h-8 bg-blue-ice bg-opacity-25 rounded">
                    <div class="flex items-center justify-center w-4 p-4 h-full">
                        <span
                            class="flex items-center leading-normal bg-transparent px-3 border-0 rounded rounded-r-none text-sm text-gray-400"
                        >
                            <i class="fas fa-user"></i>
                        </span>
                    </div>
                    <input
                    type="number"
                    v-model="totalPeople"
                    class="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-8 border-grey-light rounded rounded-l-none px-3 self-center relative bg-transparent text-base outline-none text-right text-blue-sharpe"
                    placeholder="0"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Form",

        props:{
            resetCalc: {
                type: Boolean,
                required: true
            }
        },

        data(){
            return {
                totalBill: null,
                totalPeople: 1,
                totalTip: null,
                showError: false,
                tipPercentage: 5,
                customPercentage: null,
                totalTipPerPerson: null,
                totalBillPerPerson: null,
            }
        },

        watch: {
            totalPeople: {
                immediate: true,
                handler: function(){
                    this.showError = this.totalPeople  !== '' && this.totalPeople <= 0;
                    if(this.totalPeople > 0) {
                        this.calculateTipPerPerson();
                    }
                }
            },

            totalBill: {
                immediate: true,
                handler: function(){
                    if(this.totalPeople > 0) {
                        this.calculateTipPerPerson();
                    }
                }
            },

            customPercentage: {
                immediate: true,
                handler: function(){
                    this.calculateTip(this.customPercentage)
                }
            },

            resetCalc: {
                immediate: true,
                handler: function(val){
                    if(this.resetCalc) {
                        console.log(this.totalBill);
                        this.totalBill = '';
                        this.totalPeople = 1;
                        this.totalTip = '';
                        this.showError = false;
                        this.tipPercentage = 5;
                        this.customPercentage = '';
                        this.totalTipPerPerson = '';
                        this.totalBillPerPerson = '';
                    }
                },
            }
        },

        methods: {
            calculateTip(tip) {
                this.tipPercentage = tip;
                this.totalTip = (tip/100 * this.totalBill).toFixed(2);
                this.calculateTipPerPerson();
                this.emitTip();
            },

            calculateTipPerPerson(){
                this.totalTipPerPerson = (this.totalTip / this.totalPeople).toFixed(2);
                this.totalBillPerPerson = (this.totalBill / this.totalPeople).toFixed(2);
                this.emitTip();
            },

            emitTip() {
                this.$emit('calculated-tips', {
                    "totalBillPerPerson": this.totalBillPerPerson, 
                    "totalTipPerPerson": this.totalTipPerPerson 
                })
            }
        }
    }
</script>