'use client'

import clsx from 'clsx'
import { cn, randomInt } from '../../lib/utils'
import { FC, ReactNode, useEffect, useRef, useCallback, useMemo } from 'react'

interface Props {
  children: ReactNode
  rootClassName?: string
  clipped?: boolean
}

interface Star {
  x: number
  y: number
  r: number
  counter: number
  movable: boolean
  color: string
  twinkleSpeed: number
  twinkleDirection: number
  update: () => void
}

const StarryBackground: FC<Props> = ({ children, rootClassName, clipped = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()

  const createStar = useCallback((x: number, y: number, spacing: number): Star => {
    const maxStarRadius = 0.8
    const colors = [
      'rgb(255, 255, 255)', // White
      'rgb(255, 255, 200)', // Warm white
      'rgb(200, 200, 255)', // Cool white
    ]
    
    return {
      x: x + randomInt(spacing),
      y: y + randomInt(spacing),
      r: Math.random() * maxStarRadius,
      counter: 0,
      movable: randomInt(3) === 1, // Reduced number of moving stars for better performance
      color: colors[randomInt(colors.length)],
      twinkleSpeed: 0.02 + Math.random() * 0.03,
      twinkleDirection: 1,
      update: function() {
        if (this.movable) {
          if (this.y < 0) {
            this.y = window.innerHeight
          } else {
            this.y -= 0.15 + Math.random() * 0.1 // Varied movement speed
          }
        }
        
        // Twinkling effect
        this.r += this.twinkleSpeed * this.twinkleDirection
        if (this.r > maxStarRadius || this.r < maxStarRadius * 0.3) {
          this.twinkleDirection *= -1
        }
      }
    }
  }, [])

  const createStars = useCallback((width: number, height: number, spacing: number) => {
    const stars: Star[] = []
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        if (Math.random() > 0.3) { // Add some randomness to star distribution
          stars.push(createStar(x, y, spacing))
        }
      }
    }
    return stars
  }, [createStar])

  const render = useCallback((ctx: CanvasRenderingContext2D, stars: Star[], w: number, h: number) => {
    ctx.fillStyle = 'rgba(26, 27, 30, 0.5)'
    ctx.fillRect(0, 0, w, h)

    stars.forEach(star => {
      star.update()
      ctx.beginPath()
      ctx.fillStyle = star.color
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
      ctx.fill()
    })

    animationFrameRef.current = requestAnimationFrame(() => render(ctx, stars, w, h))
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    const w = canvas.width
    const h = canvas.height
    const stars = createStars(w, h, 40) // Increased spacing for better performance

    render(ctx, stars, w, h)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [createStars, render])

  return (
    <div className={cn('relative starry-bg overflow-hidden', rootClassName)}>
      <canvas
        className={clsx(
          clipped && 'clipped',
          'absolute w-full h-full z-[0] select-none'
        )}
        ref={canvasRef}
        id="starry"
      />
      <div className="absolute z-[2] left-0 right-0 w-full h-full">{children}</div>
    </div>
  )
}

export default StarryBackground
