import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import router from "./src/routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/DT")
  .then(() => {
    console.log("connectd to success");
  })
  .catch((err) => console.log(err));

app.use("/api", router);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
