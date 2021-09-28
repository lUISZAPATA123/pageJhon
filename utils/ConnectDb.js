import mongoose from "mongoose";

const connectDb = () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected.");
    return;
  }

  mongoose.connect(
    "mongodb://mongodb/page_google",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("connect  to mongodb");
    }
  );
};

export default connectDb;
