import mongoose from "mongoose";

const connectToDb = (url) => {
  mongoose
    .connect(url)
    .then(console.log(`connected`))
    .catch((err) => {
      console.log(`error connecting to database ${err}`);
    });
};
export default connectToDb;
