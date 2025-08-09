'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { Icon } from '../icon'

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true) // default to playing

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = '/movies/top-movie.mp4'
      videoRef.current.play().catch((err) => {
        console.warn('Autoplay blocked:', err)
      })
    }
  }, [])

  const toggleVideo = () => {
    if (videoRef.current) {
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
        preload="auto"
        onWaiting={() => console.log('Buffering...')}
        onCanPlay={() => console.log('Loaded...')}
        autoPlay
        muted
        playsInline
        loop
      />
      <div
        className="absolute left-0 top-0 z-[3] w-full h-full flex justify-center items-center select-none"
        onClick={toggleVideo}
      >
        <div className="rounded-full flex items-center justify-center bg-[rgba(0,0,0,0.6)] w-20 h-20 cursor-pointer">
          {playing ? <Icon name="pause" /> : <Icon name="play" />}
        </div>
      </div>
    </div>
  )
}

export default VideoPlayer
