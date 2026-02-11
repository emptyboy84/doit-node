const express = require("express");
const router = express.Router();
const {
   getAllContacts,
   CreateContact,
   GetContact,
   UpdateContact,
   DeleteContact,
} = require("../controllers/contactController");

router
   .route("/")
   .get(getAllContacts)
   .post(CreateContact);

router
   .route("/:id")
   .get(GetContact)
   .put(UpdateContact)
   .delete(DeleteContact);

module.exports = router;
