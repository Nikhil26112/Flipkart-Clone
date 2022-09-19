import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

//Components
import Connection from "./database/Db.js";
import DefaultData from "./default.js";
import Routes from "./Routes/routes.js";

dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

const Port = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(Port, () =>
  console.log(`Server is successfully running on PORT ${Port}`)
);

//data to database
DefaultData();
