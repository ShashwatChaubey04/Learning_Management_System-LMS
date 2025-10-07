import mongoose, { mongo } from "mongoose";

const  connectDB = async () => {
  mongoose.connection.on('connected', () => {
    console.log('Database Connection Successful')
  })
  await mongoose.connect(`${process.env.MONGODB_URI}/lms`)
}

export default connectDB