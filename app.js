import dotenv from "dotenv";
dotenv.config();
import express from "express";
const port = 8001;
import {router} from "./routes/urlRoute.js";
import connectToDb  from "./connect.js";

const app = express();
app.use(express.json());
app.use('/', router);

app.listen(port, (req,res)=>{
    connectToDb(process.env.MONGO_URI);
    console.log(`listening at port no. ${port}`);
})
