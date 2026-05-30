'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './button'

interface SwipeableProps {
    children: React.ReactNode
    onSwipeLeft?: () => void
    onSwipeRight?: () => void
    threshold?: number
    className?: string
    // navigation button props
    showNavigation?: boolean
    disablePrev?: boolean
    disableNext?: boolean
    navButtonClassName?: string
}

export default function Swipeable({
    children,
    onSwipeLeft,
    onSwipeRight,
    threshold = 50,
    className,
    showNavigation = false,
    disablePrev = false,
    disableNext = false,
    navButtonClassName,
}: SwipeableProps) {
    const touchStartX = useRef<number | null>(null)
    const mouseStartX = useRef<number | null>(null)
    const isDragging = useRef(false)

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (diff > threshold) onSwipeLeft?.()
        else if (diff < -threshold) onSwipeRight?.()
        touchStartX.current = null
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        mouseStartX.current = e.clientX
        isDragging.current = true
    }

    const handleMouseUp = (e: React.MouseEvent) => {
        if (!isDragging.current || mouseStartX.current === null) return
        const diff = mouseStartX.current - e.clientX
        if (diff > threshold) onSwipeLeft?.()
        else if (diff < -threshold) onSwipeRight?.()
        mouseStartX.current = null
        isDragging.current = false
    }

    const handleMouseLeave = () => {
        isDragging.current = false
        mouseStartX.current = null
    }

    const baseNavBtn = `
        absolute top-1/2 -translate-y-1/2 z-10
        flex items-center justify-center
        w-9 h-9 rounded-full
        bg-white shadow-md border border-neutral-200
        text-neutral-700
        transition-all duration-200
        hover:bg-neutral-100 hover:scale-110
        disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100
    `

    return (
        <div className="relative w-full">
            {/* Prev Button */}
            {showNavigation && (
                <Button
                    onClick={onSwipeRight}
                    disabled={disablePrev}
                    aria-label="Previous"
                    className={`${baseNavBtn} left-0 ${navButtonClassName ?? ''}`}
                >
                    <ChevronLeft className="size-5" />
                </Button>
            )}

            {/* Swipeable area */}
            <div
                className={`select-none cursor-grab active:cursor-grabbing w-full ${className ?? ''}`}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>

            {/* Next Button */}
            {showNavigation && (
                <Button
                    onClick={onSwipeLeft}
                    disabled={disableNext}
                    aria-label="Next"
                    className={`${baseNavBtn} right-0 ${navButtonClassName ?? ''}`}
                >
                    <ChevronRight className="size-5" />
                </Button>
            )}
        </div>
    )
}