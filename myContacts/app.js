const express = require("express");
const path = require("path");
const app = express();
const dbConnect = require("./config/dbconnect");
const port = 3000;

//db 연결
dbConnect();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
   res.status(200);
   res.render("getAll", { contacts });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
   console.log(`${port}번 포트에서 서버 실행 중`);
});
