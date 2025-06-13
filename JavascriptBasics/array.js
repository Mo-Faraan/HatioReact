const array1 = ["abc","hhgh","jsdcj"];
console.log(array1);
console.log(array1[0]);

array1.push("ioio");
console.log(array1);

const index = array1.findIndex((item) => {   
    return item === "abc";
});   
//findIndex needs a function to execute within it and it will pass every item of array1 as paraameter. 
// the inner function will return true if the item is present and findIndex will return the index of that item
console.log(index);

const index2 = array1.findIndex((item) => item === "abc");
console.log(index2);

const editedArray1 = array1.map((item) => item + "!"); //wont change original array, will return new array
console.log(editedArray1);

const editedArray2 = array1.map((item) => ({text: item}));
console.log(editedArray2);


//---------------------------------------------------------------------//

// const array3 = ["jdbcj","ksdb"];
const [val1,val2] = ["jdbcj","ksdb"]; //array destructuring where the array on the right side is destructured to variables on the left
console.log(val1,val2);

// const obj = {
//     name: "farhan",
//     age: 22
// }
const {name: name1, age} = {  //javascript obj destructuring : use {}, use key names as variable names
    name: "farhan",
    age: 22
}
console.log(name1,age);

const obj = {
    name: "farhan",
    age: 22
}

// function func(obj){
//     console.log(obj.name);   //function parameters destructuring. instead of this we can use obj destructuring
//     console.log(obj.age);
// }
function func({name, age}){
    console.log(name);
    console.log(age);
}
func(obj);

//------------------------------------------------------------//

let arr1 = ["a","b","c"];
let arr2 = ["d","e","f"];
// let mergedarr = [arr1,arr2]; //nested array
let mergedarr = [...arr1,...arr2]; //using spread operator, pulls out the values and adds it to the list
console.log(mergedarr);

let obj1 = {
    name: "farhan",
    age: 22
}
let mergedObj = {
    class: "x",
    ...obj1         //using spread op on objects
}
console.log(mergedObj);

//-----------------------------------------------------------------------//

let var1 = "a";
if(var1 === "a"){
    console.log("it is a");
}
else if (var1==="b"){               //if statement
    console.log("it is b");
}
else{
    console.log("it is c");
}

//------------------------------------------------------------//

const var2 = ["hsd","ksjdcb","ksjcbd"];
for(const x of var2){           //for loop
    console.log(x);
}

//----------------------------------------//

function func2(greet){
    greet();
}                                   //passing functions as values

func2(() =>  console.log("hi"));

//---------------------------------------------//

function func3(){
    function func4(){
        console.log("func4");
    }
    func4();
}
func3();

//-----------------------------------------------//

let userName = "farhan";
//Strings,numbers, boolean are primitive types. we cant edit them, only overwrite them.
userName = "messi"; //results in new string, old string is thrown away

//objects, arrays etc are referenced types = variable store address of the data in memory
const l = ["ksdbc","kjdsc","iuh"];
l.push("wewed");    //editing the original array
console.log(l);
