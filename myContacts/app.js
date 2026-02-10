const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
   res.send("Hello World!");
});

app.get("/contacts", (req, res) => {
   res.send("contacts page");
});

app.get("/contacts/:id", (req, res) => {
   res.send("Contact details");
});

//post,put,delete
app.post("/contacts", (req, res) => {
   res.send("create contact");
});
app.put("/contacts/:id", (req, res) => {
   res.send("update contact");
});
app.delete("/contacts/:id", (req, res) => {
   res.send("delete contact");
});

app.listen(port, () => {
   console.log(`Server running at http://localhost:${port}`);
});