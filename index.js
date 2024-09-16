import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import connectDB from './db.js';
//import Grade from './model/Grade.js'

import userRoutes from './routes/usersRoutes.js'
import bookRoutes from './routes/booksRoutes.js'

const app = express();
const PORT = 1010;

app.use(express.json())

//user routes
app.use('/users', userRoutes);

//book routes 
app.use('/books', bookRoutes)


app.get('/', (req, res) =>{
  res.send("API is running")
})




app.listen(PORT, () => {
  console.log(`Server running on: ${PORT}`)
  connectDB()
})

// createUser()
// async function createUser() {
// const user = new User({name: "Adam", age: 26, location: "Chicago"})
// await user.save()
// console.log(user)
// }
// app.get('/', async(req, res) =>{
//   const results = await Grade.find({class_id: 311}).limit(5)
//   res.send(results)
// })

// app.post('/', async(req, res) => {
// let newDocument = req.body;
 
// if (newDocument.student_id){
//   newDocument.learner_id = newDocument.student_id;
//   delete newDocument.student_id;
// }
// try{
// const grade = new Grade(newDocument);
// const result = await grade.save();
// res.send(result).status(201)
// }
// catch(e){
// res.send(error.message).status(500);
// }

//})

// const newData = new Grade({
//   scores: [80, 90, 100],
//   class_id: "101",
//   learner_id: "123"
// })

// await newData.save();

