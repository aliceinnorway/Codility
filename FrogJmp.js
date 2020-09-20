/*

Question: Frog Jump
Link to question: https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

Can't understand why this one is so easy when OddOccurancesInArray is so hard? 

*/

function solution(x, y, d) {
    let distanceToHop = y - x;
    let answer = Math.ceil(distanceToHop / d);
    return answer;
}

console.log(solution(5, 185, 100));