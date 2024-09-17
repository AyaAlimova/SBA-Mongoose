import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title:{
    type: String,
    required:[true, 'Title is required']
  },
  author: {
    type: String,
    required: [true, 'Author is required'], // Author is mandatory
  },
  pages: Number,
  rating: Number,
  genres: Array,
  reviews: Array
},
  {collection: "book"}
)
const Book = mongoose.model("Book", bookSchema)
export default Book