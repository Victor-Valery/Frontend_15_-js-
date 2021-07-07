// const cars = ["Audi", "Opel", "Fiat"]
// console.log(typeof cars);
// console.log(cars);

//***************************** */

// const numbers = new Array(2,10);
// console.log(numbers);

// const numbers2 = new Array(10);
// console.log(numbers2);

//***************************** */

// const cars = ["Audi", "Opel", "Fiat"]
// console.log('length of cars: ', cars.length);

//***************************** */

// const cars = ["Audi", "Opel", "Fiat"]
// const cars2 = ["BMW", "Ferrari"]

// const cars3 = cars.concat(cars2, 'Mercedes', 2021); // concat array leri birlestirir

// console.log(cars);
// console.log(cars2);
// console.log(cars3);

// console.log(cars + cars2); // string yapar
// console.log(typeof(cars + cars2));

//***************************** */

// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());
// // points.sort(function(a,b){return a - b});

// console.log(points.sort(function(a,b){return a - b}));

//***************************** */

// // POP & PUSH

// const cars = ["Audi", "Opel", "Fiat"];

// cars.push('Renault')

// console.log(cars);

// cars.pop() // () parametre almaz her zaman sonuncuyu siler

// console.log(cars);

//***************************** */

// SHIFT & UNSHIFT 

// const cars = ["Audi", "Opel", "Fiat"];
// const deleted = cars.shift();

// console.log(deleted)
// console.log(cars);

// const added = cars.unshift('VW');

// console.log(cars);
// console.log('geri dönen', added);

//***************************** */

// const cars = ["Audi", "Opel", "Fiat"];
// console.log(cars);
// cars[6] = 'VW';
// console.log(cars);
// console.log(cars[3]);

//***************************** */

// splice Method 

// var names = ["John", "Edward", "Victor"];
// var deleted = names.splice (1,2, "Mark", "James");

// console.log('deleted', deleted);
// console.log('names', names);

//***************************** */

// slice Method 

// const months = ['Jan', 'March', 'April', 'May', 'June', 'July'];

// console.log(months.slice(1,3));
// console.log(months.slice(1,-2));
// console.log(months.slice(-4,-2));
// console.log(months.slice(-2,-4));
// console.log(months);

// console.log(months.reverse()); // son indexten basa dogru yazdirir

//***************************** */

// indexOf & lastIndexOf Method

// let colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
// let x = colors.indexOf("Green", 3);
// console.log(x);

//***************************** */

// function test2(testData) {
//     console.log(`inside function before operation ${testData}`);
//     testData = [2, 4, 6, 8];
//     console.log(`inside function after operation ${testData}`);
// }

// const arr = [1, 2, 3, 4];
// test2(arr);
// console.log(`outside function after operation ${arr}`);

//***************************** */

/* const arr = [1, 2, 3, 4];
const [x=1, y=1, z=1] = arr;
console.log(x,y,z); */

//***************************** */

/* foreach ve for in bos elemanlari atlar, for of ve for atlamaz. */

/* const colors = ["Red", "Yellow", , "Green", "Blue", "Pink", "Purple", "Gray", "Lime"];

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
} */

/* for (i of colors) console.log(i); */

/* for (let i in colors) console.log(colors[i]); */  /* bos alanlari göstermez */

/* colors.forEach(i=>console.log(i)); */  /* bos alanlari göstermez */

//***************************** */

