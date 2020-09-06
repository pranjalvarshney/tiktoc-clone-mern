import React, { useState, useEffect } from "react"
import "./App.css"
import { Video } from "./components/Video"
import axios from "axios"
import { Loader } from "./components/Loader"

export const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        "https://mern-simple-tiktok-backend.herokuapp.com/api/get"
      )
      if (response) {
        setData(response.data)
        setLoading(false)
      }
      console.log(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='App'>
      <h4 style={{ color: "whitesmoke" }}>Tiktok MERN clone</h4>
      <div className='app-video-container'>
        {!loading ? (
          <>
            {data.map((video, index) => {
              return (
                <Video
                  key={index}
                  videoUrl={video.videourl}
                  username={video.username}
                  description={video.description}
                  likes={video.likes}
                  messages={video.comments}
                  shares={video.shares}
                  song={video.song}
                />
              )
            })}
          </>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}
