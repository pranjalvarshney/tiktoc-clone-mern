import React from "react"

export const VideoFooter = ({ username, description }) => {
  return (
    <div className='video-footer'>
      <h5>{username}</h5>
      <small>{description}</small>
    </div>
  )
}
