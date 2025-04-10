const arr = [9, 1, 5, 2, 0, 4, 6, 8, 3, 7];

for (let i=0; i<arr.length; i++) {
    for (let j=i + 1; j<arr.length; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j]; // Here we are swaping positions
            arr[j] = temp;
        }
    }
}

console.log(arr) /* [
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9
  ] */


const dogs = ["pluto", "lessie", "charlie"];
dogs.sort();

console.log(dogs) // [ 'charlie', 'lessie', 'pluto' ]



console.log("------------------------------------------------------------")


// Problems when sorting numbers without a compare function
const nums = [50, 2, 1, 150];
nums.sort();
console.log(nums) // [ 1, 150, 2, 50 ]

console.log("------------------------------------------------------------")


// Using sort() with a compare function

const arr2 = [5, 3, 1, 2, 4];
arr2.sort( (a, b) => a - b);

/*
The comparison function a - b does NOT return the difference itself
It used the result of the subtraction to determine the order of the elements

When a - b is negative, a is placed before b.
When a - b is positive, a is placed after b.
When a - b is zero nothing happens.
*/

/*
TASK
given the following array of objects order them based on the age property
- Ascending
- Descending
*/

const users = [
    {age: 29, role: "user", name: "Martina"},
    {age:34, role: "user", name: "John"},
    {age: 24, role: "user", name: "Amy"},
    {age:29, role: "admin", name: "Mohammad"},
    {age: 41, role: "user", name: "Sari"}
];

const ascendingAge = users.sort((a, b) => a.age - b.age );
const descendingAge = users.sort((a, b) => b.age - a.age );
console.log(ascendingAge)
console.log(descendingAge)


console.log("------------------------------------------------------------")





let numbers = [12, 16, 22 , 20, 33, 40]

/*

    for (each mumber is numbers array ) {
        if ( the number is divisible by 5) {
        console.log( number )
        stop the loop
        }
    }

*/



// numbers.map((number) => {
//     return number % 5
// })

// console.log(numbers)


for(let i=0; i<numbers.length; i++){
    if (numbers[i] % 5 === 0) {
        console.log(numbers[i])
        break;
    }
    
}

const boringText = "hello world";
/*
    for ( each letter in boringText array ) {
    if ( letter is equal o ) {
        then the letter is equal 0
        } else if ( letter is equal l ) {
        then the letter is equal 1
        } else if ( letter is equal e ) {
        then the letter is equal 3
        } else if ( letter is equal s ) {
        then the letter is equal 5
        } else if ( letter is equal t ) {
        then the letter is equal 7
        } 
        stop the loop
    } 
*/


let coolText = "";


for (let i=0; i<boringText.length; i++) {
    let char = boringText[i]
    if (char === "o") {
        coolText += 0;
    } else if (char === "l") {
        coolText += 1;
    } else if (char === "e") {
        coolText += 3;
    } else if (char === "s") {
        coolText += 5
    } else if ( char === "t") {
        coolText += 7;
    } else {
        coolText += char
    }
}

console.log(coolText)