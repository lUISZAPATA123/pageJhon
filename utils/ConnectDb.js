// import mongoose from "mongoose";

// const connectDb = () => {
//   if (mongoose.connections[0].readyState) {
//     console.log("already connected.");
//     return;
//   }

//   mongoose.connect(
//     "mongodb://mongo:27017/pageJhon",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     (err) => {
//       if (err) throw err;
//       console.log("connect  to mongodb");
//     }
//   );
// };

// export default connectDb;
import mongoose from 'mongoose';

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }
    await mongoose.disconnect();
  }
  const db = await mongoose.connect("mongodb://mongodatabase/pageJhon", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log('new connection');
  connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = false;
    } else {
      console.log('not disconnected');
    }
  }
}

function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = { connect, disconnect, convertDocToObj };
export default db;