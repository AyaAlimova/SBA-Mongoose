import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema({
  title: String,
  date: String,
  description: String
},
{collection: "events"})

const Event = mongoose.model("Event", eventsSchema)
export default Event