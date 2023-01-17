"use strict";
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let tuple = [25, "Chirag"];
tuple.push(1); // typescript does not complain here!!
//console.log(tuple);
// const small = 1;
// const medium = 2;
// const large = 3;
//use PascalCase for enum
// enum Size {
// 	Small,
// 	Medium,
// 	Large,
// }
//enum will automatically set Small=0,  Medium=1, Large=2.....
// if you want them to be 1,2,3, just do:
// enum Size {
// 	Small=1,
// 	Medium,
// 	Large,
// }    ... and the Medium and Large will set themselves as 2 and 3 respectively
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
//# sourceMappingURL=index.js.map