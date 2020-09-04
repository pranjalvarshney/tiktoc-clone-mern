const mongoose = require("mongoose")

const videoSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  description: String,
  videoUrl: {
    type: String,
    required: true,
  },
  likes: Number,
  shares: Number,
  comments: Number,
  song: String,
})

module.exports = mongoose.model("Video", videoSchema)
