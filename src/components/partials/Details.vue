<template>
    <div class="flex-1 bg-blue-sharpe py-10 px-4 rounded-md">
        <div class="p-2">
            <div class="flex items-center justify-between">
                <div class="text-white flex flex-col">
                    <p class="text-sm">Tip Amount</p>
                    <p class="text-xs text-blue-java mt-px">/ person</p>
                </div>

                <div class="text-blue-java">
                    <p class="text-3xl">$4.27</p>
                </div>
            </div>

            <div class="mt-8 flex items-center justify-between">
                <div class="text-white">
                    <p class="text-sm">Total</p>
                    <p class="text-xs text-blue-java mt-px">/ person</p>
                </div>

                <div class="text-blue-java">
                    <p class="text-3xl">$32.79</p>
                </div>
            </div>

            <div class="mt-20 w-full">
                <button class="btn btn-block rounded-md h-8 w-full bg-blue-java">RESET</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
name: "Details"
}
</script>