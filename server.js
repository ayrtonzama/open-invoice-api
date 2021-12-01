import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import routeIndex from "./src/Routes";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import {connectionString} from './src/Services/Connection'
import bodyParser from 'body-parser'
import listEndpoints from 'express-list-endpoints'
import { connect } from "./src/Databases/connection";
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
    // console.log("Successfully connected to DB");
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
app.use(passport.initialize());
app.use(passport.session());
console.log(`${process.env.apiVersion} ver`)
app.use(`/api/${process.env.apiVersion}`, routeIndex);
console.log(listEndpoints(app));
const server =app.listen(process.env.PORT, () => {
  // console.log(`Running on port http://localhost:${process.env.PORT}`);
});

module.exports = server