import URL from "../models/urlSchema.js";
import { nanoid } from "nanoid";

async function generateNewShortURL(req, res) {
  // console.log(req.body)
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
  return res.json(`successfully created`);
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
  res.redirect(url.redirectURL);
};

export { generateNewShortURL, redirectToUserUrl };
