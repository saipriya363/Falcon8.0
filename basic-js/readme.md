Javascript :-

- Javascript is used for building logic of a webpage
- Javascript is a high lebel programming language, used in both client side as well as server side.
- Javascript is comes from echma script so wwe see the latest version of javascript in the form of echma script.
- Now we used javascript version 6 i.e ES6 (echma-script 6).
- In another way we called ES6 as the vanilla javascript.
- Node js is the run time environment of javascript.

variable:-

- variable is a container to store some data.
- In javascript there are 3 types of variable are there...

1.let :-

- Let is a type of variable which is used for changing the variable name later.
- Now these days, most of the cases we used let for creating variable.
- let is a block scope code so we have been used let for most of the cases.
2.var:-

- Var is a type of variable which is also used for changing the variable in later stage.
- Var is used in oldest browser so now a days we are don't use var most of the cases.
3.const:-

- const means constant.

task - different between Let & Var.

- var is a outer block scope element.
- let is a block scope element.

rule for creating variable name :-

- variable name are case sensative "a" , & "A" is different.
- Only letter,digit,underscore & special character is allowed,(not even white space).
- only letter,underscore or special character should be the 1st character only.
- reserve words cannot be a variable name. ex. for ,while , switch, do-while

Datatypes in JS :-

- datatypes is an attributes associated with a piece of data tells a computer system how to interpit its value.
- in datatype we used "typeof" operator to know that what type of data it is.
- mainly in javascript there are 2 types of datatype we used .

1.Primitive Datatype

- in javascript there are 7 types of primitive datatypes we used:-
1.Number- number are the type of datatype thse it contains some numerical values.
2.Boolean- in boolean datatypes we get boolean value like true/false.
3.Undefined- data is not define.
4.Null- in this datatype we get null for the value means nothing.
5.bigint- in bigint we will get the big integer value (-999999999 to +999999999) on the above.
6.string- string is a type of datatypes that can hold some character like names or word etc...
7.symbol- in symbol we get one symbol of more than one value.

2. Reference Datatype

- Reference datatype are the type of datatype which can hold multiple element in a single time.
- reference datatypes are -> array,object,function 

Array:-

- array is a datatype where we can store similar type of data is a contigious memory location.
- array indexing starts from "0"

ex- let arr = ["ram","hari","sita","bharat"]
                 0     1      2      3

2. Object:- 

- object is reference type datatype where we can store more than one element in a single entity.
- mainly objects are working on (key:value) pair.

ex.

let emp1 = {
    "name" : "sonu kumar",
    "age" : "76",
    "address : "bhubaneswar",
    "mobile no." :5437527890,
    "salary" : 5342573538
}

- in the above example we can see that the left hand side elements are the keys & the right hand side element are values so we can tell that object is a key:value

Function:-

- in function , we repeatedlly do the task in function.
- function reduce our code complexity and time & space complexity.
- syntax ->
// function 
function my_schedule(){
    console.log("we wake up at 6 am")
    console.log("we go for a morning walk")
    console.log("we go to our school for time pass")
}
//function calling
my_schedule()

operator in JS :-
 
- Operator are the key features to do some task or operate some task.
- ex. A + B
- in the above ex. A,B are the operands & "+" is the operator.
- there are 5 type of operator are present in javascript.

1.Arithmetic Operator:- (+,-,*,/) %(modulus) , ** (exponentiation)
2.Logical Operator:- logical AND (&&), logical OR (||)
A B (A && B) T T T T F F F T F F F F

A B (A || B) T T T T F T F T T F F F
3.Assignment Operator:- (=,+=,-=,%=,**=)
4.Unary Operator:- increment (++) , Decrement (--)
5.Comparision Operator:- (==,!==,===,etc..)

Conditional statement:-

- To implement some condition in the code.
- there are 3 types of conditional statement are there 
1. If condition :-

- If condition is true then statement is true
- syntax :-
if (condition){
    statement
}

2. If-else condition :-

- if condition is true then statement is true otherwise false.
- syntax :- 
if(condition){
    statement
} else {
    statement
}

3. if-elif condition :-

- its check the condition multiple times, where the condition is true.
- syntax :-
if(condition){
    statement
} else if(condition){
    statement
} else {
    statement
}

// pratice question:-

- write a which can give grades to students according to their scores:-
1. 80 - 100 (A)
2. 70 - 79 (B)
3. 60 - 69 (C)
4. 50 - 59 (D)
5. 0 - 49 (Fail- go to aganawadi)

Loops in javascript:-

- loops are used to execute a piece of code again and again.
- there are 5 types of loops present in javascript.

1. For loop :-
syntax->
for (initialization ; condition; incre/decre){
   statement
}
- example-> (we want to print web bocket 5 times)
for (let i = 1; i <= 5;++){
   console.log("web bocket")
}

for(let i= 1; i <=n5; i++){
    console.log("web bocket)
}
2. while loop:-

- syntax ->

initialization
while (condition){
    statement
    inc/dec
}
3. do-while loop:-

- syntax ->
do {
    statement
    inc/dec;
} while(condition)
4. for-of loop:- it iterate on string and array.
5. for-in loop:- it iterate over the object.

String in Javascript:-

- string is a sequence of character used to represent text.
- create a string -> let str = "web bocket"
- we calculate the string length -> str.length() property.
- we calculate the string index -> str[0],str[1] ...etc

String Literals:-

- its a way to have embedded expression in string.
- its denoted by symbol ``.

String interpolation :-

- to create string by doing substitution of placeholder.
- ex -> string text ${expression} string text.

string escape symbol :-

- /n -> new line
- /t -> tab inside a string

String method :-

1. str.toUpperCase()
2. str.toLowerCase()
3. str.trim()
4. str.slice(start,end)
5. str1.concat(str2)
6. str.replace(searchVal, newVal)
7. str.charAt(idx)

Array on JS:-

- array is a collection of item.
- ex:
let heros = ["iron man", "hulk", "super man", "spyder man"]
- array index start from "0".
- arr[0], arr[1].. etc...

looping over an array:-

- loop -> iterable
- syntax ->
for (let i = 0; < arr.length; i++){
    statement
}

practice question:-
1. for a given array with marks of students - [86,78,45,32,67]. find the average marks of the entire class.
2. for a given array with prices of 5 items - [567,973,390,321,689].
all items have an offer of 10% off of them. change the array to store final price after applying offer.

array methods on Js:-

1. push - add an element to the end.
2. pop - delete from end.
3. toString - convert array to string
4. concat - join multiple array and return result. 
5. unshift - add an element to the string.
6. shift - delete from start.
7. slice() - return a piece of the array.
8. splice() - change original array (add, remove, replace)


















