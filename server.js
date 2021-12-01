import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import routeIndex from "./src/Routes";

import session from "express-session";
import mongoose from "mongoose";
import {connectionString} from './src/Services/Connection'
import bodyParser from 'body-parser'

const MongoStore = require("connect-mongo");


dotenv.config({ path: "./environment/.env" });
const app = express();
app.use(bodyParser())
app.use(cors());
const connection=connectionString();
mongoose
  .connect(
    connection,
    {
      useNewUrlParser: true,
    }
  )
  .then((success) => {
 
  })
  .catch((error) => {
    console.error("Error connecting to DB", error);
  });

app.use(
  session({
    secret: `${process.env.SECRET_SESSION}`,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: connection,
    }),
  })
);


app.use(`/api/${process.env.apiVersion}`, routeIndex);

const server =app.listen(process.env.PORT, () => {
 
});

module.exports = server