import React, { useState, useRef } from "react"
import "./Video.css"
import { VideoFooter } from "./VideoFooter"
import { VideoTopBar } from "./VideoTopBar"
import { VideoSideBar } from "./VideoSideBar"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"

export const Video = () => {
  const videoRef = useRef(null)
  const [play, setPlay] = useState(false)
  const handleVideoPress = () => {
    if (play) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlay(!play)
  }
  return (
    <div className='video'>
      <VideoTopBar />
      <video
        onClick={handleVideoPress}
        className='video-css'
        ref={videoRef}
        src='https://assets.mixkit.co/videos/preview/mixkit-woman-walking-on-beach-towards-boulders-1012-large.mp4'
        loop
      />
      {!play ? (
        <PlayArrowIcon fontSize='large' className='video-pause-icon' />
      ) : null}
      <VideoSideBar likes={2124} messages={432} shares={929} />
      <VideoFooter />
    </div>
  )
}
