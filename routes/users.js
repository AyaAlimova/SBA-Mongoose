import express from 'express'
import db from "../db.js"
import {ObjectId} from 'mongodb'
import mongoose  from 'mongoose'
import User from '../models/userSchema.js'
//import { Collection } from 'mongoose'

const router = express.Router()

//get all users
router.get('/', async (req, res) =>{
try{
  const posts = await User.find();

  res.status(200).json(posts)
}
  catch(error){
    res.status(400).send(error)
  }
})
// create a new user
router.post('/user', async(req, res) =>{
  const {name, age, email} = req.body

  const newUser = new User({
    name, 
    age, 
    email
  })
  try{
    const saveUser = await newUser.save();
    res.status(201).json(saveUser)
  }
  catch(error){
    res.status(400).json({message: error.message})
  }
})
//update by id
router.patch('/:id', async (req, res) =>{
 try{
  let query = {_id: req.params.id}
  let result = await User.updateMany(query, {$set: {name: req.body.name, age: req.body.age, email: req.body.email}})

  if(result.matchedCount === 0){
    return res.status(404).send("User not found")
  }
  return res.status(200).send(result)
 }
 catch(error){
  return res.status(500).json({message: error.message})
 }
})
//delete user by id
router.delete('/user/:id', async(req, res) =>{
  try{
  let query = {_id: req.params.id}
  let result = await User.deleteOne(query)

  if(result.deleteCount ===0){
     res.status(404).send("Not found")
  }
    return res.status(200).send("User successfully deleted")
}
catch(error){
  return res.status(500).json({message: error.message})
}
})

export default router;
