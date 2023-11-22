import URL from "../models/urlSchema.js";
import { nanoid } from "nanoid";

async function generateNewShortURL(req, res) {
  const { link } = req.body;
  const shortId = nanoid(8);

  if (!req.body) {
    res.status(400).json(`You have to provide url`);
  }
  const newUrl = new URL({
    shortID: shortId,
    redirectURL: link,
    visitHistory: [],
  });

  await newUrl.save();
  return res.json(newUrl.shortID);
}

const redirectToUserUrl = async (req, res) => {
  const shortId = req.params.shortId;

  const url = await URL.findOneAndUpdate(
    {
      shortID: shortId,
    },
    {
      $push: {
        visitHistory: {
          timeStamp: Date.now(),
        },
      },
    }
  );
  if (!url) {
    res.json(`Invalid url`);
  }
  res.redirect(url.redirectURL);
};

const getUrlHistory = async (req, res) => {
  const shortID = req.params.shortID;
  const url = await URL.findOne({ shortID });

  if (!url) {
    res.json(`invalid url`);
  }
  res.json(`${url.visitHistory.length} ${url}`);
};
export { generateNewShortURL, redirectToUserUrl, getUrlHistory };
