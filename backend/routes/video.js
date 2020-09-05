const express = require("express")
const { showAllPost, createPost } = require("../controllers/video")
const router = express.Router()

// router.get("/asd", (req, res) => {
//   res.send("jo")
// })

router.get("/get", showAllPost)
router.post("/create", createPost)

module.exports = router
