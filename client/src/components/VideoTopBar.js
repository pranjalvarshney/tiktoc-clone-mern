import React from "react"
import MusicNoteIcon from "@material-ui/icons/MusicNote"

export const VideoTopBar = () => {
  return (
    <div className='video-topbar'>
      <MusicNoteIcon className='music-icon' />
      <small>lyrics of song</small>
    </div>
  )
}
