'use client'

import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { Icon } from '../icon'

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const playedOnScrollRef = useRef(false)
  const [progress, setProgress] = useState(0)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = '/movies/top-movie.mp4'
    }
  }, [])

  useEffect(() => {
    let start = 0
    let range = 1

    const computeAnchors = () => {
      if (!wrapperRef.current) return
      const rect = wrapperRef.current.getBoundingClientRect()
      const pageTop = rect.top + window.scrollY
      start = pageTop - window.innerHeight * 0.8
      range = Math.max(200, window.innerHeight * 0.9)
    }

    const onScroll = () => {
      const y = window.scrollY
      const raw = (y - start) / range
      const clamped = Math.min(1, Math.max(0, raw))
      setProgress(clamped)
      if (!playedOnScrollRef.current && videoRef.current) {
        playedOnScrollRef.current = true
        videoRef.current.play().catch(() => {})
      }
    }

    computeAnchors()
    window.addEventListener('resize', computeAnchors, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', computeAnchors)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const toggleMute = () => {
    setMuted((m) => !m)
  }

  const translateY = 120 * (1 - progress)
  const scale = 0.9 + 0.3 * progress

  return (
    <div
      ref={wrapperRef}
      className="w-full flex justify-center items-center -translate-y-40 container relative z-[2] select-none"
    >
      <video
        className="rounded shadow-lg z-[0] w-2/3 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(-${translateY}px) scale(${scale})` }}
        poster="/images/movie-preview.png"
        ref={videoRef}
        preload="metadata"
        muted={muted}
        playsInline
        loop
      />
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-[3] rounded-full w-12 h-12 flex items-center justify-center bg-[rgba(0,0,0,0.7)]"
      >
        {muted ? <Icon name="volume-x" /> : <Icon name="volume-2" />}
      </button>
    </div>
  )
}

export default VideoPlayer
