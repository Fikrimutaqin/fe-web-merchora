import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'
import Image from 'next/image'

export interface CourseCardProps {
    /** Course thumbnail image URL */
    imageUrl: string
    /** Course title */
    title: string
    /** Instructor name */
    instructor: string
    /** Course category/brand */
    category?: string
    /** Course rating (0-5) */
    rating?: number
    /** Number of ratings/reviews */
    ratingCount?: number
    /** Course price */
    price: string | number
    /** Is bestseller or featured */
    isBestseller?: boolean
    /** Click handler for the card */
    onClick?: () => void
}

export default function CardProduct({
    imageUrl,
    title,
    instructor,
    category,
    rating = 4.7,
    ratingCount = 0,
    price,
    isBestseller = false,
    onClick,
}: CourseCardProps) {
    return (
        <Card
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={onClick}
        >
            {/* Image Section */}
            <div className="relative w-full h-48 overflow-hidden px-3">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={500}
                    height={500}
                    quality={100}
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300 ease-out"
                />
            </div>

            {/* Content Section */}
            <div className="p-4 space-y-3">
                {/* Category/Brand */}
                {category && (
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                        {category}
                    </p>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold leading-tight text-foreground line-clamp-2">
                    {title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-muted-foreground">
                    {instructor}
                </p>

                {/* Rating and Bestseller Badge */}
                <div className="flex items-center gap-2 pt-2 flex-wrap">
                    {isBestseller && (
                        <span className="px-2 py-1 bg-linear-to-r from-linear-to-r from-[#148f59] via-[#0b8e4f] to-[#086539] text-white text-xs font-medium rounded-lg">
                            Best Seller
                        </span>
                    )}

                    {rating && (
                        <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-semibold text-foreground">
                                {rating.toFixed(1)}
                            </span>
                        </div>
                    )}

                    {ratingCount > 0 && (
                        <span className="text-xs text-muted-foreground">
                            {ratingCount.toLocaleString()} ratings
                        </span>
                    )}
                </div>

                {/* Price */}
                <div className="pt-2 border-t border-border">
                    <p className="text-xl font-bold text-foreground">
                        {typeof price === 'number'
                            ? `Rp${price.toLocaleString('id-ID')}`
                            : price}
                    </p>
                </div>
            </div>
        </Card>
    )
}
