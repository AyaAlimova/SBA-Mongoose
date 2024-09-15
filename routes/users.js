import express from 'express'
import db from "../db.js"
//import {ObjectId} from 'mongodb'
import mongoose  from 'mongoose'
import User from '../models/userShema.js'

const router = express.Router()

router.get('/', async (req, res) =>{
try{
  const posts = await User.find();

  res.status(200).json(posts)
}
  catch(error){
    res.status(400).send(error)
  }
})

router.post('/user', async(req, res) =>{
  console.log(req.body)
  res.send(req.body)

})

export default router;
