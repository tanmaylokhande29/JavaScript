const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); //pushes in existing array

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]); //here 3 represnts dc_heros array and its 1st element that is flash

// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const allheros = marvel_heros.concat(dc_heros); //concat creates a new array and merge properlu
console.log(allheros);
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator ...name
const allNewHeros = [...marvel_heros, ...dc_heros];
console.log(allNewHeros);

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_Array.flat(Infinity)//infinity to go full depth or depth is how much bracket are there

console.log(real_another_array);




//string to array conversion
console.log(Array.isArray("tanmay"));
console.log(Array.from("tanmay"));
console.log(Array.from({name: "tanmay"})); //intresting []


let score1=100;
let score2 =200;
let score3 =300;

console.log(Array.of(score1,score2,score3));//[100,200,300]



