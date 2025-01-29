'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { Icon } from '../icon'

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)

  const toggleVideo = () => {
    if (videoRef.current) {
      if (!videoLoaded) {
        // Set the video source only when user clicks play
        videoRef.current.src = '/movies/top-movie.mp4'
        setVideoLoaded(true)
      }
      if (playing) {
        videoRef.current.pause()
        setPlaying(false)
      } else {
        videoRef.current.play()
        setPlaying(true)
      }
    }
  }

  return (
    <div className="w-full flex justify-center items-center -translate-y-40 container relative z-[2] select-none">
      <video
        className="rounded shadow-lg z-[0]"
        poster="/images/movie-preview.png"
        ref={videoRef}
        width={'100%'}
        height={300}
        preload="none" // Prevents any preloading
        onWaiting={() => console.log('Buffering...')}
        onCanPlay={() => console.log('Loaded...')}
      />
      <div
        className="absolute left-0 top-0 z-[3] w-full h-full flex justify-center items-center select-none"
        onClick={toggleVideo}
      >
        <div className="rounded-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] w-20 h-20 cursor-pointer">
          {playing ? <Icon name="pause" /> : <Icon name="play" />}
        </div>
      </div>
      <Image
        src="/images/shallows/shallow-green.png"
        alt="logo"
        width={1500}
        height={1000}
        className="absolute animate-shallow z-[-1] select-none"
      />
    </div>
  )
}

export default VideoPlayer
