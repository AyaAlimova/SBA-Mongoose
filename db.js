import mongoose from 'mongoose'

const connectDB = async () => {
  try{
    await mongoose.connect(process.env.ATLAS_URI)
    console.log('MongoDB connected....')
  }
  catch(e){
    console.log(e)
  }
}
export default connectDB