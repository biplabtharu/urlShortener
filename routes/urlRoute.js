import express from "express";

const router = express.Router();

import {generateNewShortURL, redirectToUserUrl} from '../controllers/urlController.js';

router.post('/url', generateNewShortURL);

router.get('/url/:shortId', redirectToUserUrl);

router.get("/", (req,res)=>{
    res.send("this is working")
})

export {router};