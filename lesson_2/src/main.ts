let myName: string = "hashir";
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

meaningOfLife = 0;
isLoading = true;
album = 1984; // Can store data of any type

const sum = (a: number = 10, b: number = 23) => a + b;
console.log("sum of two numbers: ", sum());

let postId: string | number;
let isActive: boolean | number;

let re: RegExp = /\w+g/;
