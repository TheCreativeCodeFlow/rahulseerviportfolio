"use client"

import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoverState, setHoverState] = useState<'default' | 'pointer' | 'text'>('default')
  const [isClicked, setIsClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Use refs for smooth animation loop
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>(0)
  const previousTimeRef = useRef<number>(0)

  // Smooth position state
  const ringPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const mouseDown = () => setIsClicked(true)
    const mouseUp = () => setIsClicked(false)

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mousedown', mouseDown)
    document.addEventListener('mouseup', mouseUp)
    document.addEventListener('mouseleave', () => setIsVisible(false))
    document.addEventListener('mouseenter', () => setIsVisible(true))

    return () => {
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mousedown', mouseDown)
      document.removeEventListener('mouseup', mouseUp)
    }
  }, [])

  // Animation Loop for Smooth Ring
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Lerp factor (0.1 = slow, 0.3 = fast)
      const lerp = 0.15

      ringPos.current.x += (mousePosition.x - ringPos.current.x) * lerp
      ringPos.current.y += (mousePosition.y - ringPos.current.y) * lerp

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`
      }

      if (cursorRef.current) {
        // Central dot moves instantly
        cursorRef.current.style.transform = `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
      }
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [mousePosition])

  // Element Listeners
  useEffect(() => {
    const handleElementHover = () => setHoverState('pointer')
    const handleTextHover = () => setHoverState('text')
    const handleLeave = () => setHoverState('default')

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input[type="submit"], input[type="button"]').forEach(el => {
        el.addEventListener('mouseenter', handleElementHover)
        el.addEventListener('mouseleave', handleLeave)
      })
      document.querySelectorAll('p, h1, h2, h3, span, input[type="text"], textarea').forEach(el => {
        el.addEventListener('mouseenter', handleTextHover)
        el.addEventListener('mouseleave', handleLeave)
      })
    }

    addListeners()
    // Re-add on DOM changes (simple implementation)
    const observer = new MutationObserver(addListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Central Diamond Core (Instant) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary pointer-events-none z-[9999] opacity-0 lg:opacity-100 transition-opacity duration-300"
        style={{
          marginTop: '-4px',
          marginLeft: '-4px',
          boxShadow: '0 0 10px var(--primary)',
          transform: `rotate(45deg)`,  // Diamond shape
          opacity: isVisible ? 1 : 0
        }}
      />

      {/* Outer Tech Ring (Smooth) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] border border-primary/50 rounded-full transition-all duration-300 opacity-0 lg:opacity-100
        ${hoverState === 'pointer' ? 'w-12 h-12 border-secondary/80 border-dashed animate-spin-slow' : 'w-8 h-8'}
        ${hoverState === 'text' ? 'w-1 h-8 rounded-none border-x-0 border-y-0 bg-primary/20' : ''}
        ${isClicked ? 'scale-75 bg-primary/20' : 'scale-100'}
        `}
        style={{
          marginTop: hoverState === 'pointer' ? '-24px' : '-16px',
          marginLeft: hoverState === 'pointer' ? '-24px' : '-16px',
          opacity: isVisible ? 1 : 0
        }}
      >
        {/* Decorative corner brackets for tech feel */}
        {hoverState === 'default' && (
          <>
            <div className="absolute top-[-2px] left-[50%] -translate-x-1/2 w-1 h-1 bg-primary"></div>
            <div className="absolute bottom-[-2px] left-[50%] -translate-x-1/2 w-1 h-1 bg-primary"></div>
            <div className="absolute left-[-2px] top-[50%] -translate-y-1/2 w-1 h-1 bg-primary"></div>
            <div className="absolute right-[-2px] top-[50%] -translate-y-1/2 w-1 h-1 bg-primary"></div>
          </>
        )}
      </div>
    </>
  )
}
