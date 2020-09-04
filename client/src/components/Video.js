import React, { useState, useRef } from "react"
import "./Video.css"
import { VideoFooter } from "./VideoFooter"
import { VideoTopBar } from "./VideoTopBar"
import { VideoSideBar } from "./VideoSideBar"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"

export const Video = ({
  song,
  username,
  videoUrl,
  description,
  likes,
  messages,
  shares,
}) => {
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
      <VideoTopBar song={song} />
      <video
        onClick={handleVideoPress}
        className='video-css'
        ref={videoRef}
        src={videoUrl}
        loop
      />
      {!play ? (
        <PlayArrowIcon fontSize='large' className='video-pause-icon' />
      ) : null}
      <VideoSideBar likes={likes} messages={messages} shares={shares} />
      <VideoFooter username={username} description={description} />
    </div>
  )
}
