const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc Get all contacts
// @route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
   const contacts = await Contact.find();
   res.render("getAll", { contacts });
});

// @desc Create new contact
// @route POST /contacts
const CreateContact = asyncHandler(async (req, res) => {
   const { name, email, phone } = req.body;
   if (!name || !email || !phone) {
      return res.status(400).send("Essential information is missing");
   }
   const contact = await Contact.create({
      name,
      email,
      phone,
   });
   res.send(contact);
});

// @desc Get contact
// @route GET /contacts/:id
const GetContact = asyncHandler(async (req, res) => {
   const contact = await Contact.findById(req.params.id);
   if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
   }
   res.status(200).json(contact);
});

// @desc Update contact
// @route PUT /contacts/:id
const UpdateContact = asyncHandler(async (req, res) => {
   const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
   );
   if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
   }
   res.status(200).json(contact);
});

// @desc Delete contact
// @route DELETE /contacts/:id
const DeleteContact = asyncHandler(async (req, res) => {
   const id = req.params.id;
   const contact = await Contact.findById(id);

   if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
   }
   await Contact.findByIdAndDelete(id);
   res.send(`Deleted contact for ID: ${id}`);
});

module.exports = {
   getAllContacts,
   CreateContact,
   GetContact,
   UpdateContact,
   DeleteContact,
};