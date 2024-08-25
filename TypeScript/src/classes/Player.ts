import {IsPlayer} from "../interfaces/isPlayer.js"
export class Player implements IsPlayer {
    constructor(
      public name: string,
      private age: number,
      readonly country: string
    ) {}

    getAge(){
      return this.age;
    }
  
    play() {
      console.log(
        `${this.name} is ${this.age} years old and from ${this.country}`
      );
    }
  }