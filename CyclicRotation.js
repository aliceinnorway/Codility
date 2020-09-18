/*
Question: CyclicRotation
Link to question: https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

Step One is to get the value of the last element in a.
Step Two is to push it to the front of a.
Step Three is to do this k times. Put it in a loop.
Step Four is to put it into a function that takes a and k as arguments.

*/

function solution (a, k) {
    for (i = 0; i < k; i++) {
        const end = a.pop();
        a.unshift(end);
        }
    console.log("The final array is: " + a);
}

let array = [0, 04, 320, 0];
const rotation = Math.floor(Math.random() * 10);
console.log("The first array is: " + array + " and will be rotated " + rotation + " times.");

solution(array, rotation);
