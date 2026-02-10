const express = require("express");
const app = express();


app.get("/", (req, res) => { res.send("hello node"); });

//use middleware
app.use("/users", require("./routes/contactRoutes"));

app.listen(3000, () => {
   console.log(`Server running at http://localhost:3000`);
});