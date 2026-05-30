export interface SlideContent {
    id: string
    imageUrl: string
    alt: string
    badgeLabel?: string
    title: string
    description: string
    buttonLabel: string
    badgeBackground?: string
    buttonBackground?: string
    buttonLink?: string
}

export interface PromoSliderProps {
    slides: SlideContent[]
    autoPlay: boolean
    delay: number
    navigation: boolean
    indicator: boolean
}