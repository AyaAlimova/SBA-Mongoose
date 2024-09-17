import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title:{
    type: String,
    required:[true, 'Title is required']
  },
  author: {
    type: String,
    required: [true, 'Author is required'], 
  },
  pages: {
    type: Number,
    min: [1, 'Pages must be at least 1'], 
    required: [true, 'Page count is required']
  },
  rating: {
    type: Number,
    min: [0, 'Rating must be at least 0'], 
    max: [5, 'Rating cannot exceed 5'], 
  },
  genres: {
   type: [String],
   validate:{
    validator: function(v){
      return v.length > 0;
    },
    message: "At least one genre is required"
   }
  },
  reviews: {
    type: [String]   
  },
},
  {collection: "book"})

const Book = mongoose.model("Book", bookSchema)
export default Book