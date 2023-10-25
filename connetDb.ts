import mongoose from "mongoose";
import colors from 'colors'
const connectDb = async () => {
  try {
    // console.log(process.env.MONGO_URL!);
    await mongoose.connect(process.env.MONGO_URL!);
    // console.log("database is connected")
  } catch (error) {
    console.log(`${error}`.bgRed+"database is not connected"+error);
  }
};
export default connectDb;