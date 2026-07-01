import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";

const app = express();

// app.use();

dotenv.config({
  path: "./.env",
});
console.log(process.env.MONGODB_URI);
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

// app.listen(process.env.PORT, () => {
//   console.log(`server connected successfully!`);
// });
