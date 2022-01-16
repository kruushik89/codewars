// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    const isVowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let strArray = str.split('');
    for (let i = strArray.length - 1; i >= 0; i--) {
        for (let j = 0; j < isVowel.length; j++) {
            if (strArray[i] === isVowel[j]) strArray.splice(i, 1);
            if (strArray[i] === isVowel[j] && strArray[i] === strArray[i].toUpperCase()) {
                strArray.splice(i, 1);
            }
        }
    }
    str = strArray.join('');
    return str;
}

console.log(disemvowel('This website is for losers LOL!'));
console.log(disemvowel('No offense but,\\nYour writing is among the worst I\'ve ever read'));