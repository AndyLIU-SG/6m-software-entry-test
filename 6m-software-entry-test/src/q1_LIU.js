/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if either x or y is not numeric.
    - print the swapped values in the console if both x and y are numeric.
    
    Task 2
    - invoke the function "swap" using the following scenarios:
    - "Apple", 10
    - 9, 17
*/

function swap(x, y){
    // Task 1: Add code here
    console.log("Input values: x = " + x + ", y = " + y);
    if (typeof x!== 'number' || typeof y!== 'number') {
        console.log("either x or y is not numeric, no swap executed.");
        return -1;
    }
    // Use arithmetic operations to swap the values without using a third variable
    
    x = x + y;
    y = x - y;
    x = x - y;
    console.log("Swapped values: x = " + x + ", y = " + y);
    return [x, y];


}

// Task 2: Add code here
let value1 = 9;
let value2 = 17;
swap(value1, value2);

let value3 = "Apple";
let value4 = 10;
swap(value3, value4);