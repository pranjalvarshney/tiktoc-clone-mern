import React from "react"
import MusicNoteIcon from "@material-ui/icons/MusicNote"

export const VideoTopBar = ({ song }) => {
  return (
    <div className='video-topbar'>
      <MusicNoteIcon className='music-icon' />
      <marquee scrollamount='5'>
        <small>{song}</small>
      </marquee>
    </div>
  )
}
