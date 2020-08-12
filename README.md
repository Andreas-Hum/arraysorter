# @andreas-hum/arraysorter [![NPM version](https://img.shields.io/npm/v/@andreas-hum/arraysorter.svg?style=flat)](https://www.npmjs.com/package/@andreas-hum/arraysorter) [![NPM monthly downloads](https://img.shields.io/npm/dm/@andreas-hum/arraysorter.svg?style=flat)](https://npmjs.org/package/@andreas-hum/arraysorter)  [![NPM total downloads](https://img.shields.io/npm/dt/@andreas-hum/arraysorter.svg?style=flat)](https://npmjs.org/package/@andreas-hum/arraysorter) 


A package containing many different sorting algorithms for sorting arrays or key pair arrays.

## Getting Started

### Prerequisites

```
The latest version of npm or yarn
```

### Installing

```
npm i @andreas-hum/arraysorter
```

```
yarn add @andreas-hum/arraysorter
```

## Usage

```js
const sort = require('.arraysorter');

let sortedArr = sort.introSort([2,4,1,3,5]);
console.log(sortedArr);
//Output [1,2,3,4,5]

let sortedArrAsc = sort.cocktailSort([2,4,1,3,5],'asc');
console.log(sortedArrAsc);
//Output [5,4,3,2,1]

let keySort = sort.mergeSort([{ 'key': 'foo' }, { 'key': 'bar' }], 'des', 'key')
console.log(keySort);
//Output [{ 'key': 'bar' },{ 'key': 'foo' }];
```

## List of current sorting algorithms implemented: key+ means that the algorithm can sort via keys

+ Comparison sorts
  - Bubble - key+
  - Bingo - key+
  - Comb - key+
  - Cycle - key+
  - Cocktail - key+
  - Gnome - key+
  - (max) Heap - key+
  - (min) Heap - key+
  - Insertion - key+
  - (Binary) Insertion
  - Introspective
  - Merge - key+
  - Odd even - key+
  - Patience
  - Quick
  - (double) Selection - key+
  - Selection - key+
  - Shell - key+
  - Tim

+ Non-comparison sorts
  - Bucket - key+
  - Counting
  - Flash
  - (LSD) Radix
  - Pigeonhole


+ Other
  - Bogo
  - Gravity
  - Stooge

## List of current helper functions implemented
- Binary search
- Execution time for functions or sorting methods
- Get max element index
- Get position of a number
- (min) Heapify
- (max) Heapify
- Partition operation
- Random array creater
- Swap array elements


## References
- https://en.wikipedia.org/wiki/Sorting_algorithm
- https://rosettacode.org/wiki/Category:Sorting_Algorithms
- https://www.geeksforgeeks.org/sorting-algorithms/
- https://www.cs.cmu.edu/~adamchik/15-121/lectures/Sorting%20Algorithms/sorting.html
- https://www.w3resource.com/index.php
- https://www.researchgate.net/publication/330084245_Improved_Double_Selection_Sort_using_Algorithm
- https://jeffreystedfast.blogspot.com/2007/02/binary-insertion-sort.html
- https://github.com/MattMoony/pretty-sorting-algorithms
- http://en.wikipedia.org/wiki/Timsort
- https://github.com/bellbind/stepbystep-timsort
## Author

* **Andreas Hummelmose** - [Andreas-Hum](https://github.com/Andreas-Hum)

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details
