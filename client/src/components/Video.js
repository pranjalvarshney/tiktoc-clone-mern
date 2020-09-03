import React from "react"
import "./Video.css"

export const Video = () => {
  return (
    <div className='video'>
      <video
        className='video-css'
        autoPlay
        src='https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-beach-towards-boulders-1012-large.mp4'
        loop
      />
    </div>
  )
}
