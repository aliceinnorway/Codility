/*
Question: Binary Gap
Link to question: https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

Step One: Testing that I can actually find the binary number of an integer.

*/

function solution(num) {
const binaryNum = num.toString(2);

console.log("Step One, the binary number of " + num + " should be: " + binaryNum);

// Step Two: Extra the zeros into arrays.

const splitIt = binaryNum.split(1);
console.log("Step Two, the binary number in array form is: " + splitIt);

// Step Three: converts each zero string into a value and pushes to a new array.

const newArray = [];

for (i = 0; i < splitIt.length; i++) {
    let tempZero = splitIt[i];
    let countString = tempZero.length;
    console.log("Step Three: " + countString);
    newArray.push(countString);

}

// Step Four: Test the new array

console.log("Step Four: " + newArray);

// Step Five: Find the element with the largest value.

const answer = Math.max(...newArray);

console.log("Step Five says the answer is: " + answer);

};

solution(647);