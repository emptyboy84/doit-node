// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)
const path = require("path");

//join
const fullpath = path.join('some', 'work', 'good', 'file.txt');
console.log(fullpath);

//only location extraction
const dir = path.dirname(fullpath);
console.log(dir);

//only filename extraction
const file = path.basename(fullpath);
console.log(file);

