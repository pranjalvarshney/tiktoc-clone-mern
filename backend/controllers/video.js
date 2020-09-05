const Video = require("../models/Video")

exports.showAllPost = (req, res) => {
  Video.find().exec((err, posts) => {
    if (err) {
      return res.status(400).json({
        error: "An error occured!",
      })
    }

    res.json(posts)
  })
}

exports.createPost = (req, res) => {
  const post = new Video(req.body)
  post.save((err, result) => {
    if (err) {
      return res.json(err)
    }
    res.json(result)
  })
}
