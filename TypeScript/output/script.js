"use strict";
// console.log("hello world");
// const country = "I love Bangladesh";
// console.log(country);
// let PlayerName = "Mahmudullah";
// console.log(PlayerName);
// PlayerName = 35;
// console.log(PlayerName);
// let PlayerName;
// console.log(PlayerName);
// PlayerName = "Mahmudullah";
// PlayerName = 34;
// console.log(PlayerName);
// function multiply(a:number, b: number){
//     return a*b;
// }
// console.log(multiply(1, 2));
// let fruits = [];
// fruits.push(34);  //accepted by ts
// let fruits = ['apple', 'banana', 'pineapple'];
// fruits.push(34); //not accepted by ts
// let mixed = ['mango', 14, true]
// mixed.push(22) //accepted by ts
// mixed.push({
//     name: 'Mushfiq', //not accepted by ts
// });
// let person = {
//     name: "Mahmudullah",
//     age: 35,
//     isCaptain: false
// }
// person.name = 'Mehdi' //accepted by ts
//person.age = 'Mushfiq' //not accepted by ts
// let a:string;
// let b:number;
// a = 'shuvo'
// // a = false //not accepted by ts
// b = 24
// let a:string[] = [];
// a.push('shuvo')
// //a.push(14) //not accepted by ts
// let b:(string | number)[] = [];
// b.push(false) //not accepted by ts
// let b: string|number;
// b = 24;
// let c : object;
// c = {
//     name: 'shuvo',
//     age: 24,
// }
//or
// let c :{
//     name: 'shuvo',
//     age : 24
// }
// let c : object ;
// c = [1,2,3]; //accepted cause array is an object in js
// let a: any;
// a = 5;
// a = 'shuvo';
// let a : any[] = [];
// a.push('Bangladesh');
// let b : {
//     name: any,
//     age: any
// }
// b = {
//     name: 'Shuvo',
//     age: 24
// }
// let myFunc: Function;
// myFunc = () =>{
//     console.log("hello");
// }
// const myFunc = (a:string, b:string, c?:string) => {
//     console.log(`Hello ${a} ${b}`);
// }
// myFunc("A","B");
// const myFunc = (a:string, b:string, c:string = "true") => {
//     console.log(c);
//     console.log(`Hello ${a} ${b}`);
// }
// myFunc("A","B", "false");
// const myFunc = (a:number, b:number, c:string = "true"): number => {
//     return a+b;
// }
// myFunc(3,4, "false");
// type stringOrNum = string | number;
// type userType = {name:string, age: number}
// const userDetails = (id: stringOrNum, user: userType) =>{
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// };
// const sayHello = (user: userType) => {
//     console.log(`Hello ${user.age > 50 ? "Sir": "Mr."} ${user.name}`);
// }
// let calculate: (x:number,y:number, z:string) => number;
// calculate = (a:number, b:number, c:string) => {
//     if(c==='add'){
//         return a + b;
//     }else{
//         return a - b;
//     }
// }
// calculate(5,6,"add")
// let userDetails: (id:number | string, userinfo:{
//     name: string,
//     age: number
// }) => void
// userDetails = (id: number | string, user:{
//     name: string,
//     age: number
// }) => {
// }
// class Player{
//     name:string;
//     age: number;
//     country: string;
//     constructor (n:string, a: number, c: string){
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }
//     play(){
//         console.log(`${this.name} is ${this.age} years old and from ${this.country}`);
//     }
// }
// const player = new Player("Mehdi", 10, "Bangladesh");
// const players: Player[] = [];
// // players.push("Mushfiq"); //not acceptable
// players.push(player);
// console.log(player.age);
// class Player {
//   constructor(
//     public name: string,
//     private age: number,
//     readonly country: string
//   ) {}
//   play() {
//     console.log(
//       `${this.name} is ${this.age} years old and from ${this.country}`
//     );
//   }
// }
// const player = new Player("Mehdi", 10, "Bangladesh");
// player.name = "Mushfiq";
// console.log(player.country);
// import {Player} from './classes/Player.js'
// const player = new Player("Mehdi", 10, "Bangladesh");
// player.name = "Mushfiq";
// console.log(player.country);
// import {Player} from './classes/Player.js'
// import { IsPlayer } from './interfaces/isPlayer.js';
// const mehdi = new Player("Mehdi", 28, "Bangladesh");
// let mushfiq:IsPlayer;
// mushfiq = new Player("Mushfiq", 40, "Bangladesh");
// const players:IsPlayer[] = [];
// players.push(mehdi);
// players.push(mushfiq);
// interface RectangleOptions{
//     width: number,
//     length: number
// }
// function drawRectangle(options:RectangleOptions) {
//     let width = options.width;
//     let length = options.length;
// }
// let threeDOptions = {
//     width: 30,
//     length: 40,
//     height: 10
// }
// drawRectangle(threeDOptions)
// const addId = <T extends object>(obj: T)=>{
//     let id = Math.floor(Math.random()*100)
//     return {...obj, id};
// };
// let user = addId({
//     name: "Mushfiq",
//     age: 40,
//     country: "Bangladesh"
// })
// user.age = 45;
// user.name = "Mahmudullah";
// user.country = "India";
// let user = "Mushfiq";
// addId(user);  //error because of generics syntax
// interface APIResponse<T>{
//     status: number;
//     type: string;
//     data: T;
// }
// const responese1: APIResponse<object> = {
//     status: 200,
//     type: 'good',
//     data: {
//         name: 'Test',
//         something: 300
//     }
// }
// enum Rtype{SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN};
// interface APIResponse<T>{
//     status: number;
//     type: Rtype;
//     data: T;
// }
// const responese1: APIResponse<object> = {
//     status: 200,
//     type: Rtype.SUCCESS,
//     data: {
//         name: 'Test',
//         something: 300
//     }
// }
// let b: [number, string, object] = [4, 'hello world', {type: 1}];
// b[1] = 5;
