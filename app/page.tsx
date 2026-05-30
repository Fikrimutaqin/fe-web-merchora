'use client'

import { useCallback, useRef, useState } from "react";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";
import PromoSlider from "@/components/SliderPromo/slider-promo";
import CardProduct from "@/components/CardProduct/card-product";
import Swipeable from "@/components/ui/swipeable";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  const getItemWidth = useCallback(() => {
    if (!trackRef.current) return 0
    const firstItem = trackRef.current.children[0] as HTMLElement
    return firstItem?.offsetWidth ?? 0
  }, [])

  const getItemsPerView = useCallback(() => {
    if (!trackRef.current) return 1
    return Math.round(trackRef.current.offsetWidth / getItemWidth())
  }, [getItemWidth])

  const itemsPerView = getItemsPerView()

  const next = () => {
    const max = courses.length - getItemsPerView()
    setCurrentIndex((prev) => Math.min(prev + 1, max))
  }

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const offset = currentIndex * getItemWidth()

  const slides = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=1200&h=600&fit=crop',
      alt: 'Digital assets showcase 1',
      badgeLabel: 'FLASH SALE',
      title: 'Digital Assets Mega Drop',
      description: 'Up to 70% off on premium vectors, UI kits, and 3D models. Limited time only.',
      buttonLabel: 'Shop Now',
      badgeBackground: 'bg-emerald-500',
      buttonBackground: 'bg-emerald-500',
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
      alt: 'Digital assets showcase 2',
      badgeLabel: 'LIMITED OFFER',
      title: 'Premium UI Components',
      description: 'Access 1000+ carefully crafted components for your next project.',
      buttonLabel: 'Explore Now',
      badgeBackground: 'bg-blue-500',
      buttonBackground: 'bg-blue-500',
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1611532736000-2f4b8c0b84d4?w=1200&h=600&fit=crop',
      alt: 'Digital assets showcase 3',
      badgeLabel: 'NEW',
      title: '3D Models Collection',
      description: 'Beautiful 3D models ready for your creative projects.',
      buttonLabel: 'Browse Collection',
      badgeBackground: 'bg-purple-500',
      buttonBackground: 'bg-purple-500',
    },
  ];

  const courses = [
    {
      id: '1',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      title: 'AI Engineer Agentic Track: The Complete Agent & MCP Course',
      instructor: 'Ed Donner, Ligency',
      category: 'AI & Machine Learning',
      rating: 4.7,
      ratingCount: 40727,
      price: 169000,
      isBestseller: true,
    },
    {
      id: '2',
      imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      title: 'Web Development Bootcamp: From Zero to Hero',
      instructor: 'Sarah Johnson, Tech Academy',
      category: 'Web Development',
      rating: 4.8,
      ratingCount: 35200,
      price: 149000,
      isBestseller: true,
    },
    {
      id: '3',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      title: 'Mobile App Development with React Native',
      instructor: 'John Smith, Mobile Dev Pro',
      category: 'Mobile Development',
      rating: 4.6,
      ratingCount: 28500,
      price: 139000,
      isBestseller: false,
    },
    {
      id: '4',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      title: 'Data Science & Analytics Masterclass',
      instructor: 'Dr. Emily Chen, Data Experts',
      category: 'Data Science',
      rating: 4.9,
      ratingCount: 52100,
      price: 199000,
      isBestseller: true,
    },
    {
      id: '5',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      title: 'Data Science & Analytics Masterclass',
      instructor: 'Dr. Emily Chen, Data Experts',
      category: 'Data Science',
      rating: 4.9,
      ratingCount: 52100,
      price: 199000,
      isBestseller: true,
    },
    {
      id: '6',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      title: 'Data Science & Analytics Masterclass',
      instructor: 'Dr. Emily Chen, Data Experts',
      category: 'Data Science',
      rating: 4.9,
      ratingCount: 52100,
      price: 199000,
      isBestseller: true,
    },
    {
      id: '7',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      title: 'Data Science & Analytics Masterclass',
      instructor: 'Dr. Emily Chen, Data Experts',
      category: 'Data Science',
      rating: 4.9,
      ratingCount: 52100,
      price: 199000,
      isBestseller: true,
    },
    {
      id: '8',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      title: 'Data Science & Analytics Masterclass',
      instructor: 'Dr. Emily Chen, Data Experts',
      category: 'Data Science',
      rating: 4.9,
      ratingCount: 52100,
      price: 199000,
      isBestseller: true,
    },
    {
      id: '9',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      title: 'Data Science & Analytics Masterclass',
      instructor: 'Dr. Emily Chen, Data Experts',
      category: 'Data Science',
      rating: 4.9,
      ratingCount: 52100,
      price: 199000,
      isBestseller: true,
    },
    {
      id: '10',
      imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      title: 'Data Science & Analytics Masterclass',
      instructor: 'Dr. Emily Chen, Data Experts',
      category: 'Data Science',
      rating: 4.9,
      ratingCount: 52100,
      price: 199000,
      isBestseller: true,
    },
  ];

  return (
    <>
      <main className="flex flex-col justify-between h-screen w-full">
        <Header />
        <div className="px-4 lg:px-6 lg:max-w-7xl max-full mx-auto w-full py-5 flex flex-col justify-center items-center gap-10 lg:gap-10">
          <PromoSlider
            slides={slides}
            autoPlay={true}
            indicator={true}
            navigation={false}
            delay={10000}
          />
          <div className="flex flex-col w-full justify-start items-start">
            <h1 className="font-semibold text-3xl capitalize">
              Trending Products
            </h1>

            {/* ✅ overflow-x-clip agar vertikal tidak terpotong, pr agar item berikutnya keliatan */}
            <div className="overflow-x-clip w-full">
              <Swipeable
                onSwipeLeft={next}
                onSwipeRight={prev}
                threshold={50}
                showNavigation={true}
                disablePrev={currentIndex === 0}
                disableNext={currentIndex >= courses.length - itemsPerView}
                navButtonClassName={"bg-linear-to-r from-linear-to-r from-[#148f59] via-[#0b8e4f] to-[#086539] text-white"}
              >
                <div
                  ref={trackRef}
                  className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform"
                  style={{ transform: `translateX(-${offset}px)` }}
                >
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="shrink-0 w-[85%] sm:w-[45%] lg:w-[23%] px-2 py-10"
                    >
                      <CardProduct {...course} onClick={() => { }} />
                    </div>
                  ))}
                </div>
              </Swipeable>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
