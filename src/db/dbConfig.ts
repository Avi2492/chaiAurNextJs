import mongoose from "mongoose";

export async function connect() {
  try {
    const response = await mongoose.connect(process.env.MONGO_DB_URI!);
    const connectDb = response.connection;

    connectDb.on("connected", () => {
      console.log("Mongodb Connected");
    });

    connectDb.on("error", (error) => {
      console.log("Connection Error, Please make sure db is running" + error);
      process.exit(1);
    });
  } catch (error) {
    console.log("Something Went Wrong");
    console.log(error);
  }
}
