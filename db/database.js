const express = require("express");
const mongoose = require("mongoose");
const app = express();
const URI = "mongodb://localhost:27017/todoTask_app1";
const dbConfig = async () => {
  await mongoose.connect(
    URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      autoIndex: false, // Don't build indexes
      maxPoolSize: 10, // Maintain up to 10 socket connections
      serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    },
    (err) => {
      if (err) {
        console.log("error");
      } else {
        console.log("Successfully connected to the database");
      }
    }
  );
};
module.exports = dbConfig;
