const mongoose = require("mongoose");
require("dotenv").config();

//async, await 사용
const dbConnect = async () => {
   try {
      const connect = await mongoose.connect(process.env.DB_CONNECT);
      console.log("MongoDB connected");
   } catch (err) {
      console.log(err);
   }
}

module.exports = dbConnect;

