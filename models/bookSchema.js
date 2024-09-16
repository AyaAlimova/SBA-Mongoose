import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
  rating: Number,
  genres: Array,
  reviews: Array
},
  {collection: "book"}
)
const Book = mongoose.model("Book", bookSchema)
export default Book