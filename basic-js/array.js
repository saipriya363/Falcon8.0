// let marks = [67,89,89,65,32,98]

// console.log(marks);
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks.length)

// let heros = ["iron man", "hulk", "super man", "spyder man", "chota bheem"]

// for(let i = 0; i < heros.length; i++){
//     console.log(heros[i])
//}
// for-of
// for(let hero of heros){
//     console.log(hero)
// }

//for-of
// for(let i of heros){
//    console.log(i.toUpperCase())
// }

// for a given array with marks of students - [86,78,45,32,67]. find the average marks of the entire class. 
// Array of student marks
// let marks = [86, 78, 45, 32, 67];
// let sum = 0;
// for (let i = 0; i < marks.length; i++) {
//     sum += marks[i];
// }
// const averageMarks = sum / marks.length;

// console.log("The average marks of the class is:", averageMarks);

// 2. for a given array with prices of 5 items - [567,973,390,321,689].
//all items have an offer of 10% off of them. change the array to store final price applying offer. a

// let items = [567,973,390,321,689]
// let i = 0;
// for (let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
// }

// let foodItem = ["burger", "pizza", "sandwich", "momos", "gupchup"]
// console.log(foodItem)
// foodItem.push("dahibara", "masala dosa")
// console.log(foodItem)
// foodItem.pop()
// console.log(foodItem)

// let marks = [67, 98, 43, 23, 89]
// console.log(marks)
// let mark = marks.toString();
// console.log(mark)

let marvelHeros = ["thon", "ironman", "superman"]
let odiaHeros = ["anubhav", "babushan"]

let heros = marvelHeros.concat(odiaHeros)
console.log(heros)