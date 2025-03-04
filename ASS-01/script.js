let str = "Anum_hameed";

console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.concat("_extra"));
console.log(str.includes("hameed"));
console.log(str.indexOf("hameed"));
console.log(str.lastIndexOf("a"));
console.log(str.match(/[a-zA-Z]+/g));
console.log(str.repeat(2));
console.log(str.replace("hameed", "1234"));
console.log(str.search("hameed"));
console.log(str.slice(0, 4));
console.log(str.split("_"));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log("   Anum_hameed   ".trim());
console.log(str.substring(0, 4));
console.log(str.substr(5, 6));
console.log(str.valueOf());


//array methoods

let arr1 = ["anum", "SE6", "MAD"];
let arr2 = ["XYZ", "CUI", "ABC"];

console.log(arr1.concat(arr2));
console.log(arr1.pop());
console.log(arr1);
console.log(arr1.push("DEF"));
console.log(arr1);
console.log(arr1.shift());
console.log(arr1);
console.log(arr1.unshift("GHI"));
console.log(arr1);
console.log(arr1.slice(1, 3));
console.log(arr1.splice(1, 1, "BZC"));
console.log(arr1);
console.log(arr1.indexOf("MAD"));
console.log(arr1.includes("SE6"));
console.log(arr1.join(", "));
console.log(arr1.reverse());
console.log(arr1);
console.log(arr1.sort());
console.log(arr1);
console.log(arr1.map((element) => element.toUpperCase()));
console.log(arr1.filter((element) => element.startsWith("S")));


console.log(arr1.every((element) => element.length === 3));
console.log(arr1.some((element) => element.length === 3));
