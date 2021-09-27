import mongoose from "mongoose";

const connectDb = () => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected.");
    return;
  }

  mongoose.connect(
    process.env.MONGODB_URL,
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
