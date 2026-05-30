// src/components/ui/card-testimony.tsx
'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'

export interface TestimonyProps {
    name: string
    role?: string
    avatarUrl?: string
    rating: number // 1-5
    comment: string
    date?: string
}

export default function CardTestimony({
    name,
    role,
    avatarUrl,
    rating,
    comment,
    date,
}: TestimonyProps) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-200 w-full h-64">
            {/* Rating */}
            <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={`size-4 ${i < rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-neutral-200 text-neutral-200'
                            }`}
                    />
                ))}
            </div>

            {/* Comment */}
            <p className="text-sm text-neutral-600 leading-relaxed line-clamp-4">
                "{comment}"
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-neutral-100 flex-wrap gap-y-3 gap-x-3">
                <div className="flex items-center gap-3">
                    {/* Avatar */}
                    {avatarUrl ? (
                        <Image
                            src={avatarUrl}
                            alt={name}
                            width={36}
                            height={36}
                            className="rounded-full object-cover size-9"
                        />
                    ) : (
                        <div className="size-9 rounded-full bg-primary-100 flex items-center justify-center">
                            <span className="text-sm font-semibold text-primary-600">
                                {name.charAt(0).toUpperCase()}
                            </span>
                        </div>
                    )}


                    {/* Name & Role */}
                    <div className='flex flex-col'>
                        <p className="text-sm font-semibold text-neutral-800">{name}</p>
                        {role && (
                            <p className="text-xs text-neutral-400">{role}</p>
                        )}
                        {/* Date */}
                        {date && (
                            <p className="text-xs  text-neutral-400 pt-1">{date}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}