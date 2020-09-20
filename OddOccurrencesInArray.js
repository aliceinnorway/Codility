/*
Question: Odd Occurances In An Array
Link to question: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

All the elements in the array will have a pair, apart from one. I will need to find the value of that array. 

*/

const array = [1, 1, 1, 3, 1]

function solution(A) {
    let oddNum = 0;
    for (let e of A) {
        oddNum ^= e
    }

    console.log(oddNum);
}

solution(array);
