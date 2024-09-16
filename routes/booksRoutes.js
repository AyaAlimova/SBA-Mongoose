import express from 'express'
//import mongoose from 'mongoose'
//import db from '../db.js'
import Book from '../models/bookSchema.js'

const router = express.Router();

//get all books
router.get('/', async(req, res) =>{
  try{
    const books = await Book.find();
    res.status(200).json(books)
  }
  catch(error){
    res.status(400).send("Not founded")
  }
})
//get by id
router.get('/:id', async (req, res) =>{
  try{
  let query = {_id: req.params.id}
  const book = await Book.findOne(query)
  if(!book) throw new Error("Not founded")
    res.status(200).send(book)
  }
  catch(error){
    res.status(400).send(error)
  }
})

// add new book
router.post('/', async(req,res) =>{
  console.log(req.body)
  const {title, author, pages, rating, genres, reviews } = req.body
  const newBook = new Book({title, author,pages, rating, genres, reviews})
  try{
    const saveBook = await newBook.save();
    res.status(201).json(saveBook)
  }
  catch(error){
    res.status(400).json({message: error.message})
  }
})

//delete a book
router.delete('/:id', async(req,res) =>{
  try{
    let query = {_id: req.params.id}
    let result = await Book.deleteOne(query)
    if(result.deletedCount === 0){
      res.status(404).send("Not founded")
    }
    return res.status(200).send("The book successfully deleted")
  }
  catch(error){
    return res.status(500).json({message: error.message})
  }
})
export default router