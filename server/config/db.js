const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host} ✅`);
  } catch (error) {
    process.exit(1); // يقفل السيرفر لو معرفش يربط بالـ Database
  }
};

module.exports = connectDB;
