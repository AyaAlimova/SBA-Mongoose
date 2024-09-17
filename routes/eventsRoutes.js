import express from 'express'
import Events from '../models/eventsSchema.js'

const router = express.Router();

router.get('/', async(req,res) =>{
  try{
    const events = await Events.find()
    res.status(200).json(events)
  }
  catch(error){
    res.status(400).send("Not founded")
  }
})


router.post('/', async(req,res) =>{
  const {title, date, description} = req.body
  const newEvent = new Event ({title, date, description})
  try{
    const saveEvent= await newEvent.save();
    res.status(201).json(saveEvent)
  }
  catch(error){
    res.status(400).json({message: error.message})
  }
})

export default router
