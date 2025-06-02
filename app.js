export default "sjdnwjn"; //To export default values, when we import we can simply import file and assign variables. only 1 default export
export let apiKey = "api key 1"; //To export variables we have to use {} when importing
export let apiKey2 = "api key 2";

//------------------------------------------------------//


let userName = "helloworld"; //let = we can change, const = values cant be reassigned/variable cant be overwritten
const name = "hello";
userName = "helloworld 2";
console.log(userName);
// name = "lkj"; error

//------------------------------------------------------//


function greet(userName, message = "good morning"){     //normal function using function keyword
    return userName + " " +message;

}

const greeting = greet("Max");
console.log(greeting);

const arrowFunc = (userName, message) => {      //anonymous function using arrow function. can also use export default for these
    console.log("hello");
    return userName+" "+message;
}

//instead of the following :
(number) => {
    console.log("hello");
}

//we can do this :
number => {             //if theres only 1 parameter, we can omit the (), here number  is the single parameter
    console.log("hello");
}


//instead of :
number => { 
    return number * 3;
}

//we can do :   

number => number * 3;       //If your arrow function contains no other logic but a return statement, 
                            // you may omit the curly braces and the return keyword.

number => {age : number};   //error since it will treat the curly braces as function body, so should include
number => ({age : number}); //extra () to return javascript object in a singlr line


//------------------------------------------------//

const object = {
    name: "farhan",
    age: 22,
    greet(){
        console.log(this.age);
        return "hello";
    }
}

console.log(object);
console.log(object.greet());

//-----------------------------------------------//

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("hello");
    }
}

const user1 = new User("Frahna",23);
console.log(user1);
user1.greet();



