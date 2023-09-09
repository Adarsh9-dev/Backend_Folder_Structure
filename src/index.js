import express from "express";
import "dotenv/config";
import cors from "cors";
import centralRoute from "./router/router.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("APP IS RUNNING LIKE BOLT");
});

app.use('/', centralRoute);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
