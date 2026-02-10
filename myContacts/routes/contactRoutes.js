const express = require("express");
const router = express.Router();

module.exports = router;

router
   .route("/")
   .get((req, res) => {
      res.send("contacts page");
   })
   .post((req, res) => {
      console.log(req.body);
      res.send("create contact");
   });

router.route("/:id")
   .get((req, res) => {
      res.send(`Contact id ${req.params.id}`);
   })

   .put((req, res) => {
      res.send(`update contact ${req.params.id}`);
   })

   .delete((req, res) => {
      res.send(`delete contact ${req.params.id}`);
   });

