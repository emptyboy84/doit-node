// 라우팅 연습하기  (결과 비교 파일 : 04\results\server-5.js)

const http = require("http");


const server = http.createServer((req, res) => {
   res.setHeader("Content-Type", "text/plain");
   if (req.method === "GET" && req.url === "/home") {
      res.write("Home Page");
      res.end();
   } else if (req.method === "GET" && req.url === "/about") {
      res.end("about page");
   } else {
      res.end("page not found");
   }

});

server.listen(3000, () => {
   console.log("server running at http://127.0.0.1:3000");
});
