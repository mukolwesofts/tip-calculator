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
                    disabled
                    class="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-8 border-grey-light rounded rounded-l-none px-3 self-center relative bg-transparent text-base outline-none text-right text-blue-sharpe"
                    placeholder="0.00"
                    />
                </div>
            </form>
        </div>

        <div class="mt-4">
            <p class="text-sm text-blue-sharpe">Select Tip</p>

            <div class="w-full grid grid-cols-3 gap-4 mt-2">
                <div class="bg-blue-sharpe text-white rounded-md h-8 flex items-center justify-center">5%</div>
                <div class="bg-blue-sharpe text-white rounded-md h-8 flex items-center justify-center">10%</div>
                <div class="bg-blue-java text-white rounded-md h-8 flex items-center justify-center">15%</div>
                <div class="bg-blue-sharpe text-white rounded-md h-8 flex items-center justify-center">25%</div>
                <div class="bg-blue-sharpe text-white rounded-md h-8 flex items-center justify-center">50%</div>
                <div class="bg-blue-squeeze text-blue-sharpe rounded-md h-8 flex items-center justify-center">Custom</div>
            </div>
        </div>

        <div class="mt-6">
            <div class="flex items-center justify-between">
                <p class="text-sm text-blue-sharpe">Number of People</p>
                <p class="text-xs text-red-500">Can't be zero</p>
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
                    type="text"
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
    name: "Form"
}
</script>