const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = asyncHandler(async (req, res) => {
   const contacts = await Contact.find();
   res.status(200).json(contacts);
});

const CreateContact = asyncHandler(async (req, res) => {
   console.log(req.body);
   const { name, email, phone } = req.body;
   if (!name || !email || !phone) {
      return res.status(400).send("essential information is missing");
   }
   const contact = await Contact.create({
      name,
      email,
      phone,
   });
   res.status(201).json(contact);
});

const GetContact = asyncHandler(async (req, res) => {
   const contact = await Contact.findById(req.params.id);
   res.status(200).json(contact);
});

const UpdateContact = asyncHandler(async (req, res) => {
   const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
   );
   res.status(200).json(contact);
});

const DeleteContact = asyncHandler(async (req, res) => {
   const contact = await Contact.findByIdAndDelete(req.params.id);
   res.status(200).json(contact);
});

module.exports = {
   getAllContacts,
   CreateContact,
   GetContact,
   UpdateContact,
   DeleteContact,
};