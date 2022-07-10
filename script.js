const array = [1, 3, 8, 2, 6, 14, 26, 9];
const arraySort = array.sort((a, b) => a - b);
console.log(arraySort);
const newArray = arraySort.filter(num => num > 6);
console.log(newArray);

// const answers = ['IvaN', 'sErgey', 'ANna'];
// let result = answers.map((word) => {
//     newWord = word.toLowerCase();
//     let letters = newWord.split('');
//     letters[0] = letters[0].toUpperCase();
//     return letters.join('')
// });
// let answers2 = result;
// console.log(answers2);

// let answers = ['IvaN', 'sErgey', 'ANna'];
// answers = answers.map((word) => { //IvaN
//     let letters = word.split(''); //[I, v, a, N]
//     letterstoLowerCase = letters.map((i) => {
//         newI = i.toLowerCase();
//         return newI;
//     })
//     letterstoLowerCase[0] = letterstoLowerCase[0].toUpperCase();  // ['i', 'v', 'a', 'n']
//     return letterstoLowerCase;
// });
// console.log(answers);

// const some = [4, 'qwq', 'dfsdr'];
// console.log(some.some(item => typeof(item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));

const arr = [4, 5, 1, 3, 2];
const res = arr.reduce((acc, num) => acc + num, 0);
console.log(res);
const arr2 = ['apple', 'pear', 'plum'];
const res2 = arr2.reduce((acc, num) => `${acc}, ${num}`, 0);
console.log(res2);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
const newArr = Object.entries(obj)
.filter(item => item[1] == 'persone')
.map(item => item[0]);
console.log(newArr);

