
/**
 * The main class of the library
 */
class ArraySorter {

    /*
        Comparison sorts
    */


    /** Returns a sorted array using bobble sort
    * {Stable: Yes, Time: O(n^2), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {String} order Sorting order, asc or des. Default is des
    */
    static bubbleSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`bubbleSort() expects an array! Found ${typeof arr}.`);
        }

        let swapping = true;

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        while (swapping) {
            swapping = false;
            for (let i = 0; i < arr.length - 1; i++) {
                if (order.toLowerCase() === 'asc') {
                    if (arr[i] < arr[i + 1]) {
                        ArraySorter.swap(arr, i, i + 1);
                        swapping = true;
                    }
                } else {
                    if (arr[i] > arr[i + 1]) {
                        ArraySorter.swap(arr, i, i + 1);
                        swapping = true;
                    }
                }

            }
        }
        return arr;
    }


    /** Returns a sorted array using bingo sort
    * {Stable: No, Time: O(n*m), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {String} order Sorting order, asc or des. Default is des
    */
    static bingoSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`bingoSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        for (let i = 0; i < arr.length - 1; i++) {

            let min = i;

            for (let j = i + 1; j < arr.length; j++) {

                if (arr[j] < arr[min]) {
                    min = j;
                }
            }

            if (min !== i) {
                ArraySorter.swap(arr, min, i)
            }
        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using comb sort
    * {Stable: No, Time: O(n^2), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {String} order Sorting order, asc or des. Default is des
    */
    static combSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`combSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        const nextGap = gap => {
            gap = (gap * 10) / 13;
            if (gap < 1) {
                return 1;
            }
            return gap;
        }

        let
            gap = arr.length,
            swapping = true;

        while (gap !== 1 || swapping) {
            gap = nextGap(gap);
            swapping = false;
            for (let i = 0; i < arr.length - gap; i++) {
                if (order === 'asc' && arr[i] < arr[i + gap]) {
                    ArraySorter.swap(arr, i, i + gap);
                    swapping = true;
                } else if (order === 'des' && arr[i] > arr[i + gap]) {
                    ArraySorter.swap(arr, i, i + gap);
                    swapping = true;
                }
            }
        }
        return arr;
    }


    /** Returns a sorted array using cycle sort
    * {Stable: No, Time: O(n^2), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static cycleSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`cycleSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        for (let ci = 0; ci < arr.length - 1; ci++) {

            let
                item = arr[ci],
                copyIndex = ci;

            for (let i = ci + 1; i < arr.length; i++) {
                if (arr[i] < item) {
                    copyIndex++;
                }
            }

            if (ci === copyIndex) {
                continue;
            }

            while (item === arr[copyIndex]) {
                copyIndex++
            }


            [arr[copyIndex], item] = [item, arr[copyIndex]]


            while (copyIndex !== ci) {

                copyIndex = ci

                for (let i = ci + 1; i < arr.length; i++) {
                    if (arr[i] < item) {
                        copyIndex++;
                    }
                }

                // skip duplicates
                while (item === arr[copyIndex]) {
                    copyIndex++
                }

                [arr[copyIndex], item] = [item, arr[copyIndex]]

            }
        }
        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using cocktail sort
    * {Stable: Yes, Time: O(n^2), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static cocktailSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`cycleSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        let swapping = true;

        while (swapping) {

            swapping = false;

            for (let i = 0; i < arr.length - 1; i++) {

                if (order.toLowerCase() === 'asc') {
                    if (arr[i] < arr[i + 1]) {
                        ArraySorter.swap(arr, i, i + 1);
                        swapping = true;
                    }
                } else {
                    if (arr[i] > arr[i + 1]) {
                        ArraySorter.swap(arr, i, i + 1);
                        swapping = true;
                    }
                }

            }

            if (!swapping) {
                break;
            }


            swapping = false;

            for (let i = arr.length - 1; i > 0; i--) {
                if (order.toLowerCase() === 'asc') {
                    if (arr[i - 1] < arr[i]) {
                        ArraySorter.swap(arr, i, i - 1);
                        swapping = true;
                    }
                } else {
                    if (arr[i - 1] > arr[i]) {
                        ArraySorter.swap(arr, i, i - 1);
                        swapping = true;
                    }
                }
            }
        }
        return arr;
    }


    /** Returns a sorted array using gnome sort
    * {Stable: Yes, Time: O(n^2), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static gnomeSort(arr, order = 'des') {

        //alternative
        // static gnomeSort(sortMe) {
        //     i = 0;
        //     while (i < sortMe.length) {
        //         if (i == 0 || sortMe[i - 1] <= sortMe[i]) {
        //             i++;
        //         } else {
        //             let tmp = sortMe[i];
        //             sortMe[i] = sortMe[i - 1];
        //             sortMe[--i] = tmp;
        //         }
        //     }
        // }

        if (!Array.isArray(arr)) {
            throw new Error(`cycleSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        const moveBack = (i) => {
            for (; i > 0 && arr[i - 1] > arr[i]; i--) {
                ArraySorter.swap(arr, i, i - 1)
            }
        }

        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                moveBack(i)
            }
        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using max heap sort
    * {Stable: No, Time: O(n*log(n)), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static maxHeapSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`maxHeapSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
            ArraySorter.maxHeapify(arr, arr.length, i);
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            ArraySorter.swap(arr, i, 0);
            ArraySorter.maxHeapify(arr, i, 0);
        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using min heap sort
    * {Stable: No, Time: O(n*log(n)), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {string} order Sorting order, asc or des. Default is asc
    */
    static minHeapSort(arr, order = 'asc') {

        if (!Array.isArray(arr)) {
            throw new Error(`minHeapSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
            ArraySorter.minHeapify(arr, arr.length, i);
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            ArraySorter.swap(arr, i, 0);
            ArraySorter.minHeapify(arr, i, 0);
        }

        return order === 'des'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using insertion sort
    * {Stable: Yes, Time: O(n^2), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {String} order Sorting order, asc or des. Default is des
    */
    static insertionSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`insertionSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        for (let i = 0; i < arr.length; i++) {
            let
                insertVal = arr[i],
                pos = i;

            if (order.toLowerCase() === 'asc') {
                while (0 < pos && arr[pos - 1] < insertVal) {
                    arr[pos] = arr[pos - 1];
                    pos--;
                }
            } else {
                while (0 < pos && arr[pos - 1] > insertVal) {
                    arr[pos] = arr[pos - 1];
                    pos--;
                }
            }
            arr[pos] = insertVal;
        }
        return arr;
    }


    /** Returns a sorted array using binary insertion sort
    * {Stable: Yes, Time: O(n^2), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {String} order Sorting order, asc or des. Default is des
    */
    static binaryInsertionSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`countingSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        let
            insertPose,
            temp;

        for (let i = 1; i < arr.length; i++) {
            insertPose = ArraySorter.binarySearch(arr, arr[i], 0, i);
            if (insertPose < i) {
                temp = arr[i];
                for (let j = i - 1; j >= insertPose; j--) {
                    arr[j + 1] = arr[j];
                }
                arr[insertPose] = temp;
            }
        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using introspective sort
    * {Stable: No, Time: O(n*log(n)), Memory: O(log(n))}
    * @param {Array} arr Array of numbers or strings
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static introSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`introSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        const pivotIndex = ArraySorter.partition(arr, 0, arr.length - 1);

        if (pivotIndex < 16) {
            arr = ArraySorter.insertionSort(arr);
        } else if (pivotIndex > (2 * Math.log(arr.length))) {
            arr = ArraySorter.maxHeapSort(arr);
        } else {
            arr = ArraySorter.quickSort(arr, 0, arr.length - 1);
        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using merge sort
    * {Stable: Yes, Time: O(n*log(n)), Memory: O(n)}
    * @param {Array} arr Array of numbers or strings
    * @param {String} order Sorting order, asc or des. Default is des
    * @param {String} comparison the key that should be compared
    */
    static mergeSort(arr, order = 'des', comparison = null) {

        if (!Array.isArray(arr)) {
            throw new Error(`mergeSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        if (arr.length === 1) {
            return arr;
        }

        const merge = (leftArr, rightArr) => {


            const sortedArr = [];

            while (leftArr.length && rightArr.length) {
                if (order === 'asc') {
                    if (comparison) {
                        leftArr[0][comparison] > rightArr[0][comparison]
                            ? sortedArr.push(leftArr.shift())
                            : sortedArr.push(rightArr.shift());
                    } else {
                        leftArr[0] > rightArr[0]
                            ? sortedArr.push(leftArr.shift())
                            : sortedArr.push(rightArr.shift());
                    }
                } else {
                    if (comparison) {
                        leftArr[0][comparison] < rightArr[0][comparison]
                            ? sortedArr.push(leftArr.shift())
                            : sortedArr.push(rightArr.shift());
                    } else {
                        leftArr[0] < rightArr[0]
                            ? sortedArr.push(leftArr.shift())
                            : sortedArr.push(rightArr.shift());
                    }
                }
            }
            return sortedArr.concat(leftArr).concat(rightArr);
        }

        const
            middle = Math.floor((arr.length / 2)),
            leftArr = arr.splice(0, middle),
            rightArr = arr;

        return comparison
            ? merge(this.mergeSort(leftArr, order, comparison), this.mergeSort(rightArr, order, comparison))
            : merge(this.mergeSort(leftArr, order), this.mergeSort(rightArr, order));

    }


    /** Returns a sorted array using odd even sort
    * {Stable: Yes, Time: O(n^2), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {String} order Sorting order, asc or des. Default is des
    */
    static oddEvenSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`countingSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        let swapping = true;

        while (swapping) {

            swapping = false;
            for (let i = 1; i < arr.length - 1; i += 2) {
                if (order.toLowerCase() === 'asc') {
                    if (arr[i] < arr[i + 1]) {
                        ArraySorter.swap(arr, i, i + 1);
                        swapping = true;
                    }
                } else {
                    if (arr[i] > arr[i + 1]) {
                        ArraySorter.swap(arr, i, i + 1);
                        swapping = true;
                    }
                }
            }

            for (let i = 0; i < arr.length - 1; i += 2) {
                if (order.toLowerCase() === 'asc') {
                    if (arr[i] < arr[i + 1]) {
                        ArraySorter.swap(arr, i, i + 1);
                        swapping = true;
                    }
                } else {
                    if (arr[i] > arr[i + 1]) {
                        ArraySorter.swap(arr, i, i + 1);
                        swapping = true;
                    }
                }
            }
        }

        return arr;
    }


    /** Returns a sorted array using patience sort
    * {Stable: No, Time: O(n*log(n)), Memory: O(n)}
    * @param {Array} arr Array of numbers or strings
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static patienceSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`cycleSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        const piles = []

        for (let i = 0; i < arr.length; i++) {
            const num = arr[i]
            const destinationPileIndex = piles.findIndex(
                (pile) => num >= pile[pile.length - 1]
            )
            if (destinationPileIndex === -1) {
                piles.push([num])
            } else {
                piles[destinationPileIndex].push(num)
            }
        }

        for (let i = 0; i < arr.length; i++) {
            let destinationPileIndex = 0
            for (let p = 1; p < piles.length; p++) {
                const pile = piles[p]
                if (pile[0] < piles[destinationPileIndex][0]) {
                    destinationPileIndex = p
                }
            }
            const distPile = piles[destinationPileIndex]
            arr[i] = distPile.shift()
            if (distPile.length === 0) {
                piles.splice(destinationPileIndex, 1)
            }
        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using quick sort
    * {Stable: No, Time: O(n*log(n)), Memory: O(log(n)))}
    * @param {Array} arr Array of numbers or strings
    * @param {string} order Sorting order, asc or des. Default is des
    * @param {Number} leftBound Index of the left bound
    * @param {Number} rightBound Index of the right bound
    */
    static quickSort(arr, order = 'des', leftBound = 0, rightBound = arr.length - 1) {

        if (!Array.isArray(arr)) {
            throw new Error(`quickSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        if (leftBound < rightBound) {
            const pivotIndex = ArraySorter.partition(arr, leftBound, rightBound);
            this.quickSort(arr, order, leftBound, pivotIndex - 1);
            this.quickSort(arr, order, pivotIndex, rightBound);
        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using selection sort
    * {Stable: No, Time: O(n^2), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {String} order Sorting order, asc or des. Default is des
    */
    static selectionSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`selectionSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length + 1; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }

            if (min !== i) {
                ArraySorter.swap(arr, min, i);
            }
        }


        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using double selection sort
    * {Stable: No, Time: O(n^2), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {String} order Sorting order, asc or des. Default is des
    */
    static doubleSelectionSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`countingSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        for (let i = 0, j = arr.length - 1; i < j; i++, j--) {

            let
                min = arr[i],
                max = arr[i],
                minIndex = i,
                maxIndex = i;

            for (let k = i; k <= j; k++) {
                if (arr[k] > max) {
                    max = arr[k];
                    maxIndex = k;
                } else if (arr[k] < min) {
                    min = arr[k];
                    minIndex = k;
                }
            }

            ArraySorter.swap(arr, i, minIndex)

            if (arr[minIndex] === max) {
                ArraySorter.swap(arr, j, minIndex);
            } else {
                ArraySorter.swap(arr, j, maxIndex);
            }

        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using shell sort
    * {Stable: No, Time: O(n*log(n)), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static shellSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`ShellSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        for (let h = arr.length; h > 0; h = parseInt(h / 2)) {
            for (let i = h; i < arr.length; i++) {
                let k = arr[i],
                    j;
                for (j = i; j >= h && k < arr[j - h]; j -= h) {
                    arr[j] = arr[j - h];
                }
                arr[j] = k;
            }
        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }

    /** Returns a sorted array using tim sort
    * {Stable: Yes, Time: O(n*log(n)), Memory: O(n)}
    * @param {Array} arr Array of numbers or strings
    * @param {String} order Sorting order, asc or des. Default is des
    */
    static timSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`countingSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        let MIN_GALLOP = 7;

        // === [SPLIT IMPROVEMENTS] === //
        // timsort: main loop
        const mainLoop = (arr, first, last, lessThan) => {
            if (last - first <= 1) return arr;
            const state = {
                arr: arr,
                lessThan: lessThan,
                lessThanEqual: function (a, b) { return !lessThan(b, a); },
                runStack: [],
                remain: first,
                last: last,
                minrun: calcMinrun(last - first),
                minGallop: MIN_GALLOP,
            };
            while (nextRun(state)) {
                while (whenMerge(state)) {
                    mergeTwoRuns(state);
                }
            }
            return arr;
        };

        // calculate minimum run size
        const calcMinrun = n => {
            // from python listsort
            // e.g. 1=>1, ..., 63=>63, 64=>32, 65=>33, ..., 127=>64, 128=>32, ...
            let r = 0;
            while (n >= 64) {
                r = r | n & 1;
                n = n >> 1;
            }
            return n + r;
        };


        // cut array to monotonic chunks named (natural) "run"
        const nextRun = state => {

            if (state.remain >= state.last) return false;
            if (state.last - state.remain <= 1) {
                cutRun(state, state.last);
                return true;
            }

            let
                last = state.remain,
                prev = state.arr[last++],
                lastVal = state.arr[last++];

            if (state.lessThanEqual(prev, lastVal)) {
                prev = lastVal;
                while (last < state.last) {
                    let val = state.arr[last];
                    // inc-run elems allowed prev == val
                    if (!state.lessThanEqual(prev, val)) break;
                    prev = val;
                    last++;
                }
            } else {
                prev = lastVal;
                while (last < state.last) {
                    let val = state.arr[last];
                    // dec-run elems must prev > val, prev == val not allowed
                    if (!state.lessThan(val, prev)) break;
                    prev = val;
                    last++;
                }
                reverse(state.arr, state.remain, last);
            }

            if (last - state.remain < state.minrun) {
                // replace binary sorted minrun
                let
                    minrun = state.remain + state.minrun,
                    sortStart = last;

                last = (minrun > state.last) ? state.last : minrun;
                binarySort(state.arr, state.remain, last, state.lessThan, sortStart);
            }
            cutRun(state, last);
            return true;
        };

        // cut and stack a run
        const cutRun = (state, last) => {
            const run = {
                first: state.remain,
                last: last,
                length: last - state.remain,
            };
            state.runStack.push(run);
            state.remain = last;
        };

        // reverse elements in array range
        const reverse = (arr, first, last) => {
            last--;
            while (first < last) {
                ArraySorter.swap(arr, first++, last--);
            }
        };

        // loop condition when merge neighbors
        const whenMerge = state => {
            if (state.remain === state.last) {
                return state.runStack.length > 1;
            }
            if (state.runStack.length <= 1) {
                return false;
            }

            // similar sized runs should be merged: it introduces log(n) merge count
            let
                curRun = state.runStack[state.runStack.length - 1],
                preRun = state.runStack[state.runStack.length - 2];
            if (state.runStack.length === 2) return preRun.length <= curRun.length;
            let pre2Run = state.runStack[state.runStack.length - 3];
            return pre2Run.length <= preRun.length + curRun.length;
        };

        // merge two chunks
        const mergeTwoRuns = state => {
            if (state.runStack.length > 2 &&
                state.runStack[state.runStack.length - 3].length <
                state.runStack[state.runStack.length - 1].length) {
                // merge last two runs if stack top run is larger than last two runs
                // e.g. run length of stack state changed as [..., 5,2,6] => [..., 7,6]
                let curRun = state.runStack.pop();
                mergeHeadRuns(state);
                state.runStack.push(curRun);
            } else {
                mergeHeadRuns(state);
            }
        };

        // merge neighbor chunks and add two stacked runs to single run
        const mergeHeadRuns = state => {
            let
                mergerRun = state.runStack.pop(),
                mergedRun = state.runStack[state.runStack.length - 1];
            // assert mergedRun.last === mergerRun.first
            mergeNeighbor(
                state.arr, mergedRun.first, mergerRun.first, mergerRun.last,
                state);
            mergedRun.last = mergerRun.last;
            mergedRun.length += mergerRun.length;
        };



        // === [MERGE IMPROVEMENTS] === //

        // merge neighbor chunks
        const mergeNeighbor = (arr, first, connect, last, state) => {
            let
                llength = connect - first,
                rlength = last - connect;
            if (llength < rlength) {
                return mergeIntoLeft(arr, first, connect, last, state);
            } else {
                return mergeIntoRight(arr, first, connect, last, state);
            }
        };

        // merge with filling to smaller side
        const mergeIntoLeft = (arr, first, connect, last, state) => {
            // packed states of the function
            let m = {};
            // escape shorter buffer only
            m.right = arr;
            m.rcur = connect; m.rlast = last;

            // find merge start point which is insert point for first of larger side 
            m.cur = binSearch(arr, first, connect, m.right[m.rcur], state.lessThan);
            m.left = arr.slice(m.cur, connect);
            m.lcur = 0; m.llast = connect - m.cur;

            // states for mode control
            m.galloping = false;
            m.gallopingOut = false;
            m.selectLeft = true;
            m.selectCount = 0;
            while (m.lcur < m.llast && m.rcur < m.rlast) {
                if (!m.galloping) {
                    mergeLeftOnePairMode(arr, state, m);
                } else {
                    mergeLeftGallopingMode(arr, state, m);
                }
            }

            // copy back to escaped side (the loop may be empty)
            while (m.lcur < m.llast) arr[m.cur++] = m.left[m.lcur++];
            return arr;
        };

        // one pair mode when filling to smaller side
        const mergeLeftOnePairMode = (arr, state, m) => {
            let
                lval = m.left[m.lcur],
                rval = m.right[m.rcur];
            if (state.lessThanEqual(lval, rval)) { // for sort stable
                arr[m.cur++] = lval; m.lcur++;
                modeControlInOnePairMode(state, m, !m.selectLeft);
            } else {
                arr[m.cur++] = rval; m.rcur++;
                modeControlInOnePairMode(state, m, m.selectLeft);
            }
        };

        // mode control for one pair mode
        const modeControlInOnePairMode = (state, m, selectSwitched) => {
            if (selectSwitched) {
                m.selectLeft = !m.selectLeft;
                m.selectCount = 0;
            }
            m.selectCount++;
            if (m.selectCount >= state.minGallop) {
                m.galloping = true;
                m.selectCount = 0;
            }
        };

        // galloping mode when filling to smaller side
        const mergeLeftGallopingMode = (arr, state, m) => {
            if (state.minGallop > 0) state.minGallop--;
            let
                lval = m.left[m.lcur],
                rval = m.right[m.rcur];
            if (state.lessThanEqual(lval, rval)) {
                // left(shorter) side gallop includes right side first (rightmost)
                let end = gallopFirstSearch(
                    m.left, m.lcur + 1, m.llast, rval, state.lessThan);
                modeControlInGallopingMode(state, m, end - m.lcur);
                while (m.lcur < end) arr[m.cur++] = m.left[m.lcur++];
            } else {
                // right(longer) side gallop excludes left side first (leftmost)
                let end = gallopFirstSearch(
                    m.right, m.rcur + 1, m.rlast, lval, state.lessThanEqual);
                modeControlInGallopingMode(state, m, end - m.rcur);
                while (m.rcur < end) arr[m.cur++] = m.right[m.rcur++];
            }
        };

        // mode control for galloping mode
        const modeControlInGallopingMode = (state, m, gallopSize) => {
            if (gallopSize < MIN_GALLOP) {
                if (m.gallopOut) { // exit galloping mode if gallop out at both sides 
                    m.galloping = false;
                    m.gallopOut = false;
                    state.minGallop++;
                } else {
                    m.gallopOut = true;
                }
            } else {
                m.gallopOut = false;
            }
        };

        // merge with filling to larger side
        const mergeIntoRight = (arr, first, connect, last, state) => {
            // packed states of the function
            let m = {};
            // escape shorter buffer only
            m.left = arr
            m.lcur = connect; m.lfirst = first;

            // find merge start point which is insert point for first of larger side
            m.cur = binSearch(
                arr, connect, last, m.left[m.lcur - 1], state.lessThanEqual);
            m.right = arr.slice(connect, m.cur);
            m.rcur = m.cur - connect; m.rfirst = 0;

            // states for mode control
            m.galloping = false;
            m.gallopingOut = false;
            m.selectLeft = true;
            m.selectCount = 0;
            while (m.lfirst < m.lcur && m.rfirst < m.rcur) {
                if (!m.galloping) {
                    mergeRightOnePairMode(arr, state, m);
                } else {
                    mergeRightGallopingMode(arr, state, m);
                }
            }

            // copy back to escaped side (the loop may be empty)
            while (m.rfirst < m.rcur) arr[--m.cur] = m.right[--m.rcur];
            return arr;
        };

        // one pair mode when filling to larger side
        const mergeRightOnePairMode = (arr, state, m) => {
            let
                lval = m.left[m.lcur - 1],
                rval = m.right[m.rcur - 1];
            if (state.lessThan(rval, lval)) { // (lval > rval) for sort stable
                arr[--m.cur] = lval; --m.lcur;
                modeControlInOnePairMode(state, m, !m.selectLeft);
            } else {
                arr[--m.cur] = rval; --m.rcur;
                modeControlInOnePairMode(state, m, m.selectLeft);
            }
        };

        // galloping mode when filling to larger side
        const mergeRightGallopingMode = (arr, state, m) => {
            if (state.minGallop > 0) state.minGallop--;
            let
                lval = m.left[m.lcur - 1],
                rval = m.right[m.rcur - 1];
            if (state.lessThan(rval, lval)) {
                // left(longer) side gallop excludes right side last (rightmost)
                let begin = gallopLastSearch(
                    m.left, m.lfirst, m.lcur - 1, rval, state.lessThan);
                modeControlInGallopingMode(state, m, m.lcur - begin);
                while (begin < m.lcur) arr[--m.cur] = m.left[--m.lcur];
            } else {
                // right(shorter) side gallop includes left side last (leftmost)
                let begin = gallopLastSearch(
                    m.right, m.rfirst, m.rcur - 1, lval, state.lessThanEqual);
                modeControlInGallopingMode(state, m, m.rcur - begin);
                while (begin < m.rcur) arr[--m.cur] = m.right[--m.rcur];
            }
        };

        // binsearch for gallop mode from first element side
        // search to one of regions [0,1) [1,3),[3,7),[7,15),...
        const gallopFirstSearch = (arr, first, last, value, lessThan) => {
            let
                pre = 0,
                offset = 1;
            while (first + offset < last) {
                if (lessThan(value, arr[first + offset])) break;
                pre = offset;
                offset = (offset << 1) + 1;
            }
            let
                searchFirst = first + pre,
                searchLast = (first + offset < last) ? first + offset : last;
            return binSearch(arr, searchFirst, searchLast, value, lessThan);
        };

        // binsearch for gallop mode from last element side
        // search to one of regions(from last) [-1,-0),[-3,-1),[-7,-3),[-15,-7),...
        const gallopLastSearch = (arr, first, last, value, lessThan) => {
            let
                pre = 0,
                offset = 1;
            while (first < last - offset) {
                if (!lessThan(value, arr[last - offset])) break;
                pre = offset;
                offset = (offset << 1) + 1;
            }
            let
                searchFirst = (first < last - offset) ? last - offset : first,
                searchLast = last - pre;
            return binSearch(arr, searchFirst, searchLast, value, lessThan);
        };

        // binary search

        const binSearch = (arr, first, last, value, lessThan) => {
            while (first < last) {
                let mid = last + ((first - last) >> 1);
                if (lessThan(value, arr[mid])) {
                    last = mid;
                } else {
                    first = mid + 1;
                }
            }
            return first;
        };

        // binary sort: insertion sort with binary search
        const binarySort = (arr, first, last, lessThan, sortStart) => {
            sortStart = sortStart || first + 1;
            for (let i = sortStart; i < last; i += 1) {
                let point = binSearch(arr, first, i, arr[i], lessThan);
                cyclicRShift(arr, point, i + 1);
            }
            return arr;
        };

        // 1 right cyclic shift of array range
        const cyclicRShift = (arr, first, last) => {
            if (last - first <= 1) return arr;
            let mostRight = arr[last - 1];
            // C: memmove(first, first+1, last-first-1)
            for (let cur = last - 1; cur > first; cur -= 1) {
                arr[cur] = arr[cur - 1];
            }
            arr[first] = mostRight;
            return arr;
        };

        const builtinLessThan = (a, b) => {
            return a < b;
        };

        // export interface for runner.js
        const sort = (arr) => {
            const lessThan = arguments[1] || builtinLessThan;
            mainLoop(arr, 0, arr.length, lessThan);
            return arr;
        };

        return order.toLowerCase() === 'asc'
            ? sort(arr).reverse()
            : sort(arr);

    }


    /*
        Non-comparison sorts
    */


    /** Returns a sorted array using bucket sort
    * {(uniform keys) => Stable: Yes, Time: O(n*2^k), Memory: O(n*k), n<<2^k: No}
    * {(integer keys) => Stable: Yes, Time: O(n+r), Memory: O(n+r), n<<2^k: Yes}
    * @param {Array} arr Array of numbers or strings
    * @param {string} order Sorting order, asc or des. Default is des
    * @param {Number} bucketSize The amounts of buckets. Default is 5
    */
    static bucketSort(arr, order = 'des', bucketSize = 5) {

        if (!Array.isArray(arr)) {
            throw new Error(`bucketSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        if (arr.length === 0) {
            return arr;
        }

        let
            minValue = arr[0],
            maxValue = arr[0];

        arr.forEach(function (currentVal) {
            if (currentVal < minValue) {
                minValue = currentVal;
            } else if (currentVal > maxValue) {
                maxValue = currentVal;
            }
        })

        let
            bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1,
            allBuckets = new Array(bucketCount);

        for (let i = 0; i < allBuckets.length; i++) {
            allBuckets[i] = [];
        }

        arr.forEach(function (currentVal) {
            allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
        });

        arr.length = 0;

        allBuckets.forEach(function (bucket) {
            ArraySorter.insertionSort(bucket);
            bucket.forEach(function (element) {
                arr.push(element)
            });
        });

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using counting sort
    * {Stable: Yes, Time: O(n+r), Memory: O(n+r), n<<2^k: Yes}
    * @param {Array} arr Array of numbers
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static countingSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`countingSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        arr.forEach(number => {
            if (isNaN(number)) {
                throw new Error(`countingSort() expects an array of numbers! Found ${typeof number}.`);
            }
        });

        arr = arr.reduce((acc, v) => (acc[v] = (acc[v] || 0) + 1, acc), [])
            .reduce((acc, n, i) => acc.concat(Array(n).fill(i)), []);


        return order === 'asc'
            ? arr.reverse()
            : arr;

    }


    /** Returns a sorted array using flash sort
    * {Stable: No, Time: O(n^2), Memory: O(n), n<<2^k: No}
    * @param {Array} arr Array of numbers
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static flashSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`countingSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        let
            max = 0,
            min = arr[0],
            m = ~~(0.45 * arr.length),
            l = new Array(m),
            k,
            i,
            j;

        for (i = 1; i < arr.length; ++i) {
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > arr[max]) {
                max = i;
            }
        }

        if (min === arr[max]) {
            return arr;
        }

        let c1 = (m - 1) / (arr[max] - min);


        for (k = 0; k < m; k++) {
            l[k] = 0;
        }
        for (j = 0; j < arr.length; ++j) {
            k = ~~(c1 * (arr[j] - min));
            ++l[k];
        }

        for (let p = 1; p < m; ++p) {
            l[p] = l[p] + l[p - 1];
        }

        ArraySorter.swap(arr, 0, max);

        let
            move = 0,
            t,
            flash,
            hold;

        j = 0;
        k = m - 1;

        while (move < (arr.length - 1)) {
            while (j > (l[k] - 1)) {
                ++j;
                k = ~~(c1 * (arr[j] - min));
            }
            if (k < 0) break;
            flash = arr[j];
            while (j !== l[k]) {
                k = ~~(c1 * (flash - min));
                hold = arr[t = --l[k]];
                arr[t] = flash;
                flash = hold;
                ++move;
            }
        }

        for (j = 1; j < arr.length; j++) {
            hold = arr[j];
            i = j - 1;
            while (i >= 0 && arr[i] > hold) {
                arr[i + 1] = arr[i--];
            }
            arr[i + 1] = hold;
        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using LSD radix sort
    * {Stable: Yes, Time: O(n*(k/d)), Memory: O(n+2^d), n<<2^k: No}
    * @param {Array} arr Array of numbers
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static LSDradixSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`LSDradixSort() expects an array! Found ${typeof arr}.`);
        }

        arr.forEach(number => {
            if (isNaN(number)) {
                throw new Error(`LSDradixSort() expects an array of numbers! Found ${typeof number}.`);
            }
        })

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }


        const max = ArraySorter.getMax(arr);

        for (let i = 0; i < max; i++) {

            let buckets = Array.from({ length: 10 }, () => []);

            for (let j = 0; j < arr.length; j++) {
                buckets[ArraySorter.getPosition(arr[j], i)].push(arr[j]);
            }

            arr = [].concat(...buckets);
        }

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /** Returns a sorted array using pigeonhole sort
    * {Stable: Yes, Time: O(n+r), Memory: O(2^k), n<<2^k: Yes}
    * @param {Array} arr Array of numbers
    * @param {string} order Sorting order, asc or des. Default is des
    */
    static pigeonholeSort(arr, order = 'des') {

        if (!Array.isArray(arr)) {
            throw new Error(`pigeonholeSort() expects an array! Found ${typeof arr}.`);
        }

        if (order.toLowerCase() !== 'des' && order.toLowerCase() !== 'asc') {
            order = 'des';
        }

        const pigeonhole = [];

        arr.forEach(number => {
            if (isNaN(number)) {
                throw new Error(`pigeonholeSort() expects an array of numbers! Found ${typeof number}.`);
            }

            pigeonhole[number]
                ? pigeonhole[number].push(number)
                : pigeonhole[number] = [number];
        });


        arr = pigeonhole.reduce((a, b) => a.concat(b), []);

        return order === 'asc'
            ? arr.reverse()
            : arr;
    }


    /*
        Other sorts
    */


    /** WARNING: BOGO SORT SHOULD NEVER BE USED FOR ACTUAL SORTING ONLY FOR TESTING.
    *   Returns a sorted array using bogo sort
    * {Stable: No, Time: O(n*n!), Memory: O(1)}
    * @param {Array} arr Array of numbers or strings
    */
    static bogoSort(arr) {

        if (!Array.isArray(arr)) {
            throw new Error(`bogoSort() expects an array! Found ${typeof arr}.`);
        }

        const isSorted = arr => {
            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1] > arr[i]) {
                    return false;
                }
            }
            return true;
        };

        const shuffle = arr => {
            let
                count = arr.length,
                index;

            while (count > 0) {
                index = Math.floor(Math.random() * count);
                count--;
                ArraySorter.swap(arr, count, index);
            }

            return arr;
        }

        const sort = arr => {
            let sorted = false;
            while (!sorted) {
                arr = shuffle(arr);
                sorted = isSorted(arr);
            }
            return arr;
        }

        return sort(arr);
    }

    /** WARNING: GRAVITY SORT SHOULD NEVER BE USED FOR ACTUAL SORTING ONLY FOR TESTING.
    *   Returns a sorted array using gravity sort
    * {Stable: n/a, Time: O(S), Memory: O(n^2)}
    * @param {Array} arr Array of numbers or strings'
    */
    static gravitySort(arr) {

        if (!Array.isArray(arr)) {
            throw new Error(`countingSort() expects an array! Found ${typeof arr}.`);
        }

        let
            m = Math.max(...arr),
            gravityWell = [];

        for (let i = 0; i < arr.length; i++) {
            gravityWell.push([]);
            for (let j = 0; j < m; j++) {
                gravityWell[i][j] = arr[i] > j ? 1 : 0;
            }
        }

        for (let x = 0; x < m; x++) {
            let
                count = 0,
                modIdxs = [];

            for (let y = 0; y < gravityWell.length; y++) {
                if (gravityWell[y][x] == 1) {
                    count++;
                    gravityWell[y][x] = 0;
                    modIdxs.push(y);
                }
            }

            for (let y = gravityWell.length - 1; y >= gravityWell.length - count; y--) {
                gravityWell[y][x] = 1;
                modIdxs.push(y);
            }

        }

        const beadsToArray = (gravityWell, arr = []) => {
            for (let i = 0; i < gravityWell.length; i++) {
                arr[i] = gravityWell[i].reduce((a, b) => a + b);
            }
            return arr
        }

        beadsToArray(gravityWell, arr);
        return arr;
    }


    /** WARNING: STOOGE SORT SHOULD NEVER BE USED FOR ACTUAL SORTING ONLY FOR TESTING.
    *   Returns a sorted array using Stooge sort
    * {Stable: No, Time: O(n^log(3)/log(1.5)), Memory: O(n)}
    * @param {Array} arr Array of numbers or strings'
    * @param {Number} left The left bound. Default is 0
    * @param {Number} right The right bound. Default is array length - 1
    */
    static stoogeSort(arr, left = 0, right = arr.length - 1) {

        if (!Array.isArray(arr)) {
            throw new Error(`countingSort() expects an array! Found ${typeof arr}.`);
        }

        if (arr[left] > arr[right]) {
            ArraySorter.swap(arr, left, right)
        }


        if (right - left + 1 > 2) {
            let x = Math.floor((right - left + 1) / 3);
            this.stoogeSort(arr, left, right - x);
            this.stoogeSort(arr, left + x, right);
            this.stoogeSort(arr, left, right - x);
        }

        return arr;
    }


    /*
        Helper methods
    */


    /** Binary search
    * @param {Array} arr The array of sorted elements
    * @param {Element} target the element you wanna find
    * @param {Number} low The lower bounds
    * @param {Number} high The higher bounds
    */
    static binarySearch(arr, target, low, high) {

        if (low === high) {
            return low;
        }

        let mid = low + Math.floor((high - low) / 2);

        if (target > arr[mid]) {
            return this.binarySearch(arr, target, mid + 1, high);
        } else if (target < arr[mid]) {
            return this.binarySearch(arr, target, low, mid);
        }

        return mid;
    }


    /** A helper function to check the execution time of functions
    * @param {*} func The function to check. To check the sorting algorithms input the method name as a string
    * @param {*} arg  The argument of the funtion if needed, it is required for checking sorting algorithms
    */
    static executiontime(func, arg = null) {

        let timeOne = new Date().getMilliseconds();

        if (typeof func === 'function') {
            arg
                ? func(arg)
                : func();

            console.log(`Execution time ${(new Date().getMilliseconds() - timeOne) / 1000} s`);
            return;
        }

        if (!arg) {
            console.log("Argument is needed for sorting algorithms");
            return;
        }

        let arr;

        switch (func.toLowerCase()) {
            case "bubblesort":
                arr = ArraySorter.bubbleSort(arg);
                break;
            case "bingoSort":
                arr = ArraySorter.bingoSort(arg);
                break;
            case "combsort":
                arr = ArraySorter.combSort(arg);
                break;
            case "cyclesort":
                arr = ArraySorter.cycleSort(arg);
                break;
            case "cocktailsort":
                arr = ArraySorter.cocktailSort(arg);
                break;
            case "gnomesort":
                arr = ArraySorter.gnomeSort(arg);
                break;
            case "maxHeapsort":
                arr = ArraySorter.maxHeapSort(arg);
                break;
            case "minHeapsort":
                arr = ArraySorter.minHeapSort(arg);
                break;
            case "insertionsort":
                arr = ArraySorter.insertionSort(arg);
                break;
            case "binaryinsertionsort":
                arr = ArraySorter.binaryInsertionSort(arg);
                break;
            case "introsort":
                arr = ArraySorter.introSort(arg);
                break;
            case "introspectivesort":
                arr = ArraySorter.introSort(arg);
                break;
            case "mergesort":
                arr = ArraySorter.mergeSort(arg);
                break;
            case "oddeven":
                arr = ArraySorter.oddEvenSort(arg);
                break;
            case "patiencesort":
                arr = ArraySorter.patienceSort(arg);
                break;
            case "quicksort":
                arr = ArraySorter.quickSort(arg);
                break;
            case "selectionsort":
                arr = ArraySorter.selectionSort(arg);
                break;
            case "doubleselectionsort":
                arr = ArraySorter.doubleSelectionSort(arg);
                break;
            case "shellsort":
                arr = ArraySorter.shellSort(arg);
                break;
            case "timsort":
                arr = ArraySorter.timSort(arg);
                break;
            case "bucketsort":
                arr = ArraySorter.bucketSort(arg);
                break;
            case "countingsort":
                arr = ArraySorter.countingSort(arg);
                break;
            case "flashsort":
                arr = ArraySorter.flashSort(arg);
                break;
            case "pigeonholesort":
                arr = ArraySorter.pigeonholeSort(arg);
                break;
            case "lsdradixSort":
                arr = ArraySorter.LSDradixSort(arg);
                break;
            case "bogosort":
                arr = ArraySorter.bogoSort(arg);
                break;
            case "gravitysort":
                arr = ArraySorter.gravitySort(arg);
                break;
            case "stoogesort":
                arr = ArraySorter.stoogeSort(arg);
                break;
            default:
                console.log(`No sorting algorithm with the name ${func} has been found, please check spelling`)
                return;
        }

        console.log(`Execution time ${Math.abs((new Date().getMilliseconds() - timeOne) / 1000)} s with ${func}`);
        return arr;
    }


    /** Returns the max elements index, used for radixSortLSD
    * @param {Array} arr The array where you want to fin the max length
    */
    static getMax(arr) {
        let max = 0;
        for (let num of arr) {
            if (max < num.toString().length) {
                max = num.toString().length
            }
        }
        return max
    }


    /** Returns the number in a specific place, used for radixSortLSD
    * @param {Number} num The number
    * @param {Number} place The place where you wanna search
    */
    static getPosition(num, place) {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
    }


    /** Returns a pivot index, used for quicksort
    * @param {Array} arr The array of the elements
    * @param {Number} leftIndex Index of the left bound
    * @param {Number} rightIndex Index of the right bound
    */
    static partition(arr, leftIndex, rightIndex) {

        const pivot = arr[Math.floor((rightIndex + leftIndex) / 2)]

        while (leftIndex <= rightIndex) {
            while (arr[leftIndex] < pivot) {
                leftIndex++;
            }
            while (arr[rightIndex] > pivot) {
                rightIndex--;
            }
            if (leftIndex <= rightIndex) {
                ArraySorter.swap(arr, leftIndex, rightIndex);
                leftIndex++;
                rightIndex--;
            }
        }
        return leftIndex;
    }


    /** Returns a max heapified array, used for max heap sort
    * @param {Array} arr The array to heapify
    * @param {*} length The length of the array
    * @param {*} maxIndex The index of the root element;
    */
    static maxHeapify(arr, length, maxIndex) {

        let max = maxIndex,
            left = maxIndex * 2 + 1,
            right = maxIndex + 1;

        if (left < length && arr[left] > arr[max]) {
            max = left;
        }

        if (right < length && arr[right] > arr[max]) {
            max = right;
        }

        if (max !== maxIndex) {
            ArraySorter.swap(arr, maxIndex, max);
            this.maxHeapify(arr, length, max);
        }

        return arr;
    }


    /** Returns a max heapified array, used for min heap sort
    * @param {Array} arr The array to heapify
    * @param {Number} length The length of the array
    * @param {Number} minIndex The index of the root element;
    */
    static minHeapify(arr, length, minIndex) {

        let min = minIndex,
            left = minIndex * 2 + 1,
            right = minIndex + 1;

        if (left < length && arr[left] < arr[min]) {
            min = left;
        }

        if (right < length && arr[right] < arr[min]) {
            min = right;
        }

        if (min !== minIndex) {
            ArraySorter.swap(arr, minIndex, min);
            this.minHeapify(arr, length, min);
        }

        return arr;
    }


    /** Returns an array of random numbers
    * @param {Number} length The length of the array. Default is 10
    * @param {Number} min The min val of the numbers. Default is 0
    * @param {Number} max The max val of the numbers. Default is 10
    */
    static createRandomArr(length = 10, max = 10, min = 0,) {

        let ranArr = [];

        for (let i = 0; i < length; i++) {
            ranArr.push(Math.floor(Math.random() * (max + 1 - min) + min));
        }

        return ranArr;
    }


    /** Swaps two elements of an array
    * @param {Array} arr The array of the elements
    * @param {Number} indexOne Index of the first element
    * @param {Number} indexTwo Index of the second element
    */
    static swap(arr, indexOne, indexTwo) {
        [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]];
    }



}


let testArr = [];

for (let i = 0; i < 10; i++) {
    testArr.push({ 'key': i })
}

module.exports = ArraySorter;
