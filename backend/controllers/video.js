const Video = require("../models/Video")

exports.showAllPost = (req, res) => {
  Video.find().exec((err, posts) => {
    console.log("1")
    if (err) {
      return res.status(400).json({
        error: "An error occured!",
      })
    }
    console.log("2")

    return res.json(posts)
  })
}

exports.createPost = (req, res) => {
  const post = req.body
  Video.create(post, (err, res) => {
    if (err) {
      return res.status(400).json({
        error: "An error occured!",
      })
    }
    res.json("success")
  })
}
