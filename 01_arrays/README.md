## Array Utils

Arrays are among the oldest and most important data structures, and are used by almost every program.

An array is a data structure consisting of a collection of elements, each identified by an index.

## Exercise

Create an array utility library. The library DOES NOT MUTATE THE INPUT ARRAY.

Implement the following functions without using the built-in Array methods `push` and `reverse`: 

`add`: it should add an item to the end of the array. Input: array, item. Output: array.

`reverse`: it should reverse the array. Input: array. Output: array. 

## Stretch

Implement a `delete` method that takes an array and index. It deletes the item at the provided index,
if it doen't exist, it simply returns a copy of the input array. 

Super strecth: add tests for the `delete` method.
