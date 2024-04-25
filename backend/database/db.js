const mongoose = require("mongoose")

const connectDb = async () => {
  try {
    mongoose.set("strictQuery", true)
    mongoose.connect(process.env.MONGO_DB_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  } catch (e) {
    throw new Error("Couldn't connect to Mongo'")
  }
}

module.exports = connectDb
