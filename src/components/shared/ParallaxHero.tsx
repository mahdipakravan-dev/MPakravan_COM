'use client'

import { cn } from '@/lib/utils'

/**
 * ParallaxHero – Aurora (autonomous animation)
 * -------------------------------------------
 * - Primary color: #2b654d
 * - No mouse or scroll interaction; everything loops infinitely
 * - No floated simple shapes
 * - Layers:
 *    1) Base multi-stop gradient with slow drift
 *    2) SVG aurora (turbulence + displacement) with animated noise
 *    3) Fine grid lines drifting subtly
 *    4) Soft vignette sweep for depth
 * - Respects prefers-reduced-motion
 */

interface Props {
  children: React.ReactNode
  rootClassName?: string
  variant?: 'aurora' | 'mesh' | 'lines'
}

const PRIMARY = '#142a20'

export default function ParallaxHero({ children, rootClassName, variant = 'aurora' }: Props) {
  const baseGradient = (() => {
    if (variant === 'mesh') {
      return `radial-gradient(1200px 800px at 10% 20%, ${PRIMARY}22 0%, transparent 60%),
              radial-gradient(800px 600px at 80% 30%, ${PRIMARY}1a 0%, transparent 55%),
              conic-gradient(from 220deg at 50% 50%, #0e1512 0deg, #0c1a14 120deg, #0b110e 240deg, #0e1512 360deg)`
    }
    if (variant === 'lines') {
      return `linear-gradient(135deg, #0f1613 0%, #0a130f 50%, #0d1813 100%),
              repeating-linear-gradient(135deg, ${PRIMARY}14 0px, ${PRIMARY}14 2px, transparent 2px, transparent 0px)`
    }
    // Default: aurora base
    return `linear-gradient(135deg, #0d1612 0%, #0a120f 45%, #0e1a15 100%)`
  })()

  return (
    <div className={cn('relative overflow-hidden', rootClassName)}>
      {/* Base gradient (autonomous drift) */}
      <div
        className="absolute inset-0 will-change-transform animate-base-drift"
        style={{
          background: baseGradient,
        }}
      />

      {/* SVG aurora with animated turbulence (no user input) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden>
        <defs>
          <linearGradient id="g-base" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={PRIMARY} stopOpacity={0.16} />
            <stop offset="45%" stopColor={PRIMARY} stopOpacity={0.26} />
            <stop offset="100%" stopColor="#0b140f" stopOpacity={0.65} />
          </linearGradient>

          <filter id="f-aurora" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.002 0.003" numOctaves="3" seed="7" result="noise">
              {/* Autonomous breathing of the noise field */}
              {/* @ts-ignore: animate element is valid in SVG runtime */}
              <animate attributeName="baseFrequency" dur="22s" values="0.002 0.003;0.003 0.002;0.0015 0.0025;0.002 0.003" repeatCount="indefinite" />
            </feTurbulence>
            <feColorMatrix in="noise" type="saturate" values="0" result="mono" />
            <feDisplacementMap in="SourceGraphic" in2="mono" scale="36" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="8" />
          </filter>

          {/* Grain layer */}
          <filter id="f-grain" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" stitchTiles="stitch" result="grain"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.06 0" />
          </filter>
        </defs>
        <rect x="-5%" y="-5%" width="110%" height="110%" fill="url(#g-base)" filter="url(#f-aurora)" />
        <rect x="-5%" y="-5%" width="110%" height="110%" fill="#000" filter="url(#f-grain)" opacity="0.35" />
      </svg>

      {/* Grid lines with gentle pan */}
      <div
        aria-hidden
        className={cn('absolute inset-0 pointer-events-none', variant === 'lines' ? 'opacity-100' : 'opacity-80', 'animate-grid-pan')}
        style={{
          backgroundImage:
            'linear-gradient(rgba(43,101,77,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(43,101,77,0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Vignette sweep (slow, infinite) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none animate-vignette-sweep"
        style={{
          background: `radial-gradient(1000px 700px at 0% 50%, ${PRIMARY}22, transparent 60%)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        {children}
      </div>

      {/* Bottom fade for legibility */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] bg-gradient-to-t from-background via-background/80 to-transparent" />

    </div>
  )
}
