import express from "express";

const router = express.Router();

import {generateNewShortURL, redirectToUserUrl, getUrlHistory} from '../controllers/urlController.js';

router.post('/url', generateNewShortURL);

router.get('/url/:shortId', redirectToUserUrl);

router.get('/url/analytics/:shortID', getUrlHistory );

export {router};