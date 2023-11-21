# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @josephfoschia/lotide`

**Require it:**

`const _ = require('@josephfoschia/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of an array.
* `tail(array)`: Returns everything but the first element of an array.
* `middle(array)`: Returns the middle value of an array and if the array is even it returns both middle values in a new array.
* `assertArraysEqual(actual, expected)`: Compares the result of two arrays being compared to an expected value picked by the tester.
* `assertEqual(actual, expected)`: Strictly compares the result of two values being compared to an expected value picked by the tester.
* `countLetters(string)`: Counts the amount of letters in an array and returns an object made of the count of each letter.
* `findKeyByValue(key)`: Finds the desired key in an object and returns it.
* `letterPositions(sentence)`: Takes a string and returns an object with each key being a letter and the index number in which it appears.
* `countOnly(allItems, itemsToCount)`: This function should take in a collection of items and return counts for a specific subset of those items.
* `assertObjectsEqual(actual, expected)`: Compares the result of two objects being compared to an expected value picked by the tester.
* `eqArrays(actual, expected)`: Compares two arrays, if they are the same it returns true, if not false.
* `eqObjects(actual, expected)`: Compares two objects, if they are the same it returns true, if not false.
* `takeUntil(array, callback)`: Takes in an array and a callback function, loops through the array until the callback function requirement is met and returns the new array with every element looped through so far.
* `without(array, value)`: Takes in an array and a value, it will remove the value given from the array and return a new array.