'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingAnimation = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(true)
  const text = 'Mpakravan'
  const [displayText, setDisplayText] = useState('')

  const handleAnimationComplete = useCallback(() => {
    setTimeout(() => {
      setIsVisible(false)
    }, 1000)
  }, [])

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setIsLoading(false)
        handleAnimationComplete()
      }
    }, 150)

    return () => clearInterval(interval)
  }, [handleAnimationComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 0.3,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black/90 to-black/80 backdrop-blur-sm z-[9999]"
        >
          <div className="relative">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl md:text-6xl font-bold tracking-wider"
            >
              <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                {displayText}
              </span>
              {isLoading && (
                <motion.span
                  animate={{
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                  className="inline-block w-[3px] h-10 bg-primary ml-1"
                />
              )}
            </motion.div>
            {!isLoading && (
              <motion.div
                variants={underlineVariants}
                initial="hidden"
                animate="visible"
                className="absolute -bottom-3 left-0 w-full h-[2px] bg-gradient-to-r from-primary/50 via-primary to-primary/50"
              />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingAnimation 