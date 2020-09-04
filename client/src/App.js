import React from "react"
import "./App.css"
import { Video } from "./components/Video"

export const App = () => {
  return (
    <div className='App'>
      <div className='app-video-container'>
        <Video
          videoUrl={
            "https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-beach-towards-boulders-1012-large.mp4"
          }
        />
        <Video />
      </div>
    </div>
  )
}
