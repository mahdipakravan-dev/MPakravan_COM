'use client'

import { cn, randomInt } from '../../lib/utils'
import { FC, ReactNode, useEffect, useRef } from 'react'

interface Props {
  children: ReactNode
  rootClassName?: string
}

const StarryBackground: FC<Props> = ({ children, rootClassName }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const w = (canvas.width = window.innerWidth)
    const h = (canvas.height = window.innerHeight)
    let renderCounter = 0

    const maxStarRadius = 0.6

    function createStar(x: number, y: number, spacing: number) {
      return {
        x: x + randomInt(spacing),
        y: y + randomInt(spacing),
        r: Math.random() * maxStarRadius,
        counter: 0,
        movable: randomInt(2) === 1,
        update: function () {
          if (!this.movable) return
          if (this.y < 0) {
            this.y = h
          } else {
            this.y -= 0.2
            this.counter += 1
          }
        },
      }
    }
    function createStars(width: number, height: number, spacing: number) {
      const stars = []

      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          stars.push(createStar(x, y, spacing))
        }
      }
      return stars
    }

    let stars = createStars(w, h, 36)

    function render() {
      if (!ctx) return
      ctx.fillStyle = 'rgba(26, 27, 30 , 0.5)'
      ctx.fillRect(0, 0, w, h)
      function fillCircle(x: number, y: number, r: number, fillStyle: string) {
        ctx!.beginPath()
        ctx!.fillStyle = fillStyle
        ctx!.arc(x, y, r, 0, Math.PI * 2)
        ctx!.fill()
      }

      stars.forEach((star, index) => {
        star.update()
        let x = star.x
        let y = star.y
        const r = star.r

        fillCircle(x, y, r, 'rgb(255, 255, 255)')
      })

      requestAnimationFrame(() => {
        renderCounter += 1
        render()
      })
    }

    render()
  }, [])

  return (
    <div className={cn('relative starry-bg overflow-hidden', rootClassName)}>
      <canvas className="absolute w-full h-full z-[0]" ref={canvasRef} id="starry" />
      <div className="absolute z-[2] left-0 right-0 w-full h-full">{children}</div>
    </div>
  )
}

export default StarryBackground
