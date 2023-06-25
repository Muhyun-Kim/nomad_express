import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection;

const handelOpen = () => console.log("Connected to DB ✅");
const handelError = () => console.log("DB Error", error);
db.on("error", handelError);
db.once("open", handelOpen);
