function hellowWorld() {
  console.log("Helloossss");
}
hellowWorld();

const os = require("os");
const path = require("path");
const math = require("./math");

console.log(os.type()); // windows_NT
console.log(os.version()); //Windows 11 Home
console.log(os.homedir()); // C:\Users\ktany

console.log(__dirname); // C:\Users\Public\react\Node Project
console.log(__filename); // C:\Users\Public\react\Node Project\hellow.js
const filename = __filename;

console.log(path.dirname(filename)); // C:\Users\Public\react\Node Project
console.log(path.basename(filename)); //hellow.js
console.log(path.extname(filename)); // .js

console.log(path.parse(filename));
/*
{
  root: 'C:\\',
  dir: 'C:\\Users\\Public\\react\\Node Project',
  base: 'hellow.js',
  ext: '.js',
  name: 'hellow'
}
*/

console.log(math.add(3, 4));
