import Apikey from  "./app.js";       //importing default
import {apiKey,apiKey2} from "./app.js";       //normal import, names should match exported names
import * as util from "./app.js";     //importing all to javascript object util


console.log(apiKey,apiKey2);
console.log(Apikey);
console.log(util.apiKey)


