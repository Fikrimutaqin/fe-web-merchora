'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PromoSliderProps } from '@/types/slider-promo';

export default function PromoSlider({ slides, autoPlay, delay, navigation, indicator }: PromoSliderProps) {
    if (!slides || slides.length === 0) return null

    const [currentSlide, setCurrentSlide] = useState(0)
    const slide = slides[currentSlide]
    const touchStartX = useRef<number | null>(null)
    const isDragging = useRef(false)

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return
        const diff = touchStartX.current - e.changedTouches[0].clientX
        if (diff > 50) nextSlide()
        else if (diff < -50) prevSlide()
        touchStartX.current = null
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        touchStartX.current = e.clientX
        isDragging.current = true
    }

    const handleMouseUp = (e: React.MouseEvent) => {
        if (!isDragging.current || touchStartX.current === null) return
        const diff = touchStartX.current - e.clientX
        if (diff > 50) nextSlide()
        else if (diff < -50) prevSlide()
        touchStartX.current = null
        isDragging.current = false
    }

    const handleMouseLeave = () => {
        isDragging.current = false
        touchStartX.current = null
    }

    useEffect(() => {
        if (!autoPlay) return
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, delay)
        return () => clearInterval(interval)
    }, [autoPlay, delay, slides.length])

    return (
        <div className="relative w-full overflow-hidden rounded-2xl bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-600">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-32 -top-32 size-96 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -left-32 bottom-0 size-72 rounded-full bg-white/5 blur-3xl" />
            </div>

            <div
                className="relative h-96 w-full overflow-hidden rounded-2xl md:h-[500px] cursor-grab active:cursor-grabbing select-none"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
            >
                {slides.map((s, index) => (
                    <div
                        key={s.id}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            backgroundImage: `url('${s.imageUrl}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40" />
                    </div>
                ))}

                <div className="relative z-10 flex h-full flex-col justify-center px-5 py-5 md:px-12 lg:px-24 md:py-16 pointer-events-none">
                    <div className="max-w-md">
                        {slide.badgeLabel && (
                            <div className={`inline-flex w-fit rounded-full ${slide.badgeBackground || 'bg-emerald-500'} px-3 py-1.5 mb-4`}>
                                <span className="text-sm font-semibold uppercase tracking-wide text-white">
                                    {slide.badgeLabel}
                                </span>
                            </div>
                        )}
                        <h1 className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl mb-4">
                            {slide.title}
                        </h1>
                        <p className="text-pretty text-base md:text-lg text-white/90 mb-6">
                            {slide.description}
                        </p>

                        <div className="pointer-events-auto">
                            <Link
                                href={slide.buttonLink || '#'}
                                className={`${slide.buttonBackground || 'bg-emerald-500'} hover:opacity-90 px-6 py-3 rounded-lg text-base font-semibold text-white transition-opacity`}
                            >
                                {slide.buttonLabel}
                            </Link>
                        </div>
                    </div>
                </div>

                {navigation && (
                    <>
                        <Button
                            onClick={prevSlide}
                            className="absolute w-10 h-10 left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-green-700/80 lg:bg-green-700 p-2 text-white transition-all hover:bg-white/50 md:left-8"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="size-6" />
                        </Button>

                        <Button
                            onClick={nextSlide}
                            className="absolute w-10 h-10 right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-green-700/80 lg:bg-green-700 p-2 text-white transition-all hover:bg-white/50 md:right-8"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="size-6" />
                        </Button>
                    </>
                )}


                {indicator && (
                    <div className="absolute bottom-6 left-1/2 z-20 flex gap-2 -translate-x-1/2 md:bottom-8">
                        {slides.map((_, index) => (
                            <Button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

            </div>
        </div>
    )
}
