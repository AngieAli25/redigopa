'use client'

import { useState, useEffect, useRef } from 'react'

interface CounterAnimationOptions {
  target: number
  duration: number
  suffix?: string
  decimal?: number
}

export const useCounterAnimation = (options: CounterAnimationOptions) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  const { target, duration = 2500, suffix = '', decimal = 0 } = options

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      const currentValue = startValue + (target - startValue) * easeOut
      
      setCount(currentValue)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible, target, duration])

  const formatNumber = (num: number): string => {
    if (decimal > 0) {
      return num.toFixed(decimal)
    }
    
    if (num >= 1000) {
      return Math.floor(num / 1000).toLocaleString() + '.' + String(Math.floor(num % 1000)).padStart(3, '0')
    }
    
    return Math.floor(num).toString()
  }

  const displayValue = formatNumber(count) + suffix

  return {
    displayValue,
    elementRef,
    isAnimating: isVisible && count < target
  }
} 