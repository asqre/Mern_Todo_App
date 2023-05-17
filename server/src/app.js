import express from "express";
import apiRoute, { apiProtected } from "./routes/api.js";
import cors from "cors"; // Import the cors middleware
import { DB_CONNECT } from "./utils/constants.js";
import mongoose  from "mongoose";
import AuthMiddleware from "./middlewares/AuthMiddleware.js";
const app = express();
const connect = () => {
  mongoose.connect(DB_CONNECT, {
    useNewUrlParser:true,
    useUnifiedTopology:true, 
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${DB_CONNECT}`);
    })
};
connect();
const PORT = 5000;

app.use(express.json());
app.use(cors()); // Use the cors middleware to enable CORS


app.use('/api/',apiRoute);  
app.use('/api/',AuthMiddleware,apiProtected);

app.listen(PORT,()=>console.log(`server is running on ${PORT}`))