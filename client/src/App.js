import React from "react"
import "./App.css"
import { Video } from "./components/Video"

export const App = () => {
  return (
    <div className='App'>
      <div className='app-video-container'>
        <Video />
        <Video />
      </div>
    </div>
  )
}
