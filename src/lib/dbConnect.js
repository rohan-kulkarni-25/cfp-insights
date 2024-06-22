import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  // Used to avoid Database connection chocking.
  if (connection.isConnected) {
    console.log("Database is already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("Database Connection Sucessfully");
  } catch (error) {
    console.log("Database Connection Error : ", error);
    process.exit(1);
  }
}

export default dbConnect;
