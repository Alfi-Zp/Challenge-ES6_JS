// 1. Mengubah fungsi menjadi fungsi arrow
const golden = ()=>console.log('this is golden!!')
golden()

//=======================================================
/* 2. Sederhanakan menjadi Object literal di ES6
return dalam fungsi di bawah ini masih menggunakan object literal dalam ES5, ubahlah menjadi bentuk yang lebih sederhana di ES6.*/

const newFunction = (firstName, lastName)=>{
    let x = {
        firstName,
        lastName,
        fullName(){console.log(`${firstName} ${lastName}`)}
    }

    return x
}

//Driver Code 
newFunction("William", "Imoh").fullName()

//=========================================================
/*
3. Destructuring
dalam ES5 untuk mendapatkan semua nilai dari object tersebut kita harus tampung satu per satu:
Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)
*/ 

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {firstName, lastName, destination, occupation, spell} = newObject
// Driver code
console.log(firstName, lastName, destination, occupation)

//=======================================================
/*4. Array Spreading
Kombinasikan dua array berikut menggunakan array spreading ES6*/

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]

//Driver Code
console.log(combined)

//=======================================================
/*5. Template Literals
sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:*/
const planet = "earth"
const view = "glass"
let before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit,${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`

// Driver Code
console.log(before)