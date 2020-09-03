import React, { useState } from "react"
import FavoriteIcon from "@material-ui/icons/Favorite"
import CommentIcon from "@material-ui/icons/Comment"
import ShareIcon from "@material-ui/icons/Share"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

export const VideoSideBar = ({ likes, messages, shares }) => {
  const [liked, setLiked] = useState(false)

  return (
    <div className='video-sidebar'>
      <div className='sidebar-btn'>
        {liked ? (
          <FavoriteIcon fontSize='large' onClick={(e) => setLiked(!liked)} />
        ) : (
          <FavoriteBorderIcon
            fontSize='large'
            onClick={(e) => setLiked(!liked)}
          />
        )}
        <small>{liked ? likes + 1 : likes}</small>
      </div>
      <div className='sidebar-btn'>
        <CommentIcon fontSize='large' />
        <small>{messages}</small>
      </div>
      <div className='sidebar-btn'>
        <ShareIcon fontSize='large' />
        <small>{shares}</small>
      </div>
    </div>
  )
}
