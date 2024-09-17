import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import connectDB from './db.js';
//import Grade from './model/Grade.js'

import userRoutes from './routes/usersRoutes.js'
import bookRoutes from './routes/booksRoutes.js'
import eventRoutes from './routes/eventsRoutes.js'

const app = express();
const PORT = 1013;

app.use(express.json())

//user routes
app.use('/users', userRoutes);

//book routes 
app.use('/books', bookRoutes)

//event routes
app.use('/events', eventRoutes)


app.get('/', (req, res) =>{
  res.send("API is running")
})




app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`)
  connectDB()
})



