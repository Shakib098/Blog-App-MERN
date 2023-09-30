import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user",router); //http://localhost/api/user
app.use("/api/blog",blogRouter);

mongoose.connect("mongodb+srv://shakibkhan:zvCAoqDYGqMPfFCC@cluster0.idbj6xf.mongodb.net/blog-app-MERN?retryWrites=true&w=majority")
  .then(()=>app.listen(5000))
  .then(()=>console.log("Connected to database and listening to Localhost 5000"))
  .catch((error)=>console.log(error));

//shakib
//zvCAoqDYGqMPfFCC