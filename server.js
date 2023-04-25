import express from "express";
import connection from "./db/conn.js";
import cors from "cors";
import userroute from "./routes/User.js";

const app = express();

//PORT
const PORT = process.env.PORT || 8000;

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/api", userroute);
//Database
connection();

//Get
app.get("/", (req, res) => {
  res.status(200).json("Hey!");
});

//Listening
app.listen(PORT, () => {
  console.log(`Server is up on PORT: ${PORT}`);
});
