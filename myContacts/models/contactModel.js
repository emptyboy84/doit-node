const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
   name: {
      type: String,
   },
   email: {
      type: String,
   },
   phone: {
      type: String,
      required: [true, "Please add the phone"]
   },
},
   {

      timestamps: true
   }
)
//shema->model
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;

