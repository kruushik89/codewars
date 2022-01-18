// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
// The first mission: Traversing arr, find the shortest string length.
// The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0).
// you can use one of slice() substring() or substr() do it. return the result after finished the work.
// for example:
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

// example my:
function cutIt(arr){
    const newArr = [];
    let min = arr[0].length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < min) min = arr[i].length;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > min) {
            let slice = arr[i].substr(0, min);
            newArr.push(slice);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(cutIt(["codewars", "javascript", "java"]));

// example 2:
// function cutIt(arr){
//     const minLength = Math.min(...arr.map(x => x.length));
//     return arr.map(x => x.slice(0, minLength));
// }

// example 3:
// const cutIt = arr =>
//     arr.map(val => val.slice(0, Math.min(...arr.map(val => val.length))));