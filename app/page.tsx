'use client'

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PromoSlider from "@/components/slider-promo/slider-promo";
import CardProduct from "@/components/card-product/card-product";
import Swipeable from "@/components/ui/swipeable";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardTestimony, { TestimonyProps } from "@/components/card-testimony/card-testimony";

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

  const testimonies: (TestimonyProps & { id: string })[] = [
    {
      id: '1',
      name: 'Fikri Mutaqin',
      role: 'Frontend Developer',
      avatarUrl: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      comment: 'Platform ini benar-benar mengubah cara saya belajar. Materi yang disajikan sangat terstruktur dan mudah dipahami bahkan untuk pemula sekalipun.',
      date: '12 Mei 2026',
    },
    {
      id: '2',
      name: 'Sari Dewi',
      role: 'UI/UX Designer',
      avatarUrl: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      comment: 'Instrukturnya sangat responsif dan selalu membantu ketika saya kesulitan. Kelas desainnya sangat relevan dengan kebutuhan industri saat ini.',
      date: '3 Mei 2026',
    },
    {
      id: '3',
      name: 'Budi Santoso',
      role: 'Backend Engineer',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
      rating: 4,
      comment: 'Konten kursusnya sangat lengkap dan up-to-date. Saya berhasil mendapatkan pekerjaan baru setelah menyelesaikan kursus di sini.',
      date: '28 April 2026',
    },
    {
      id: '4',
      name: 'Anisa Rahma',
      role: 'Product Manager',
      avatarUrl: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      comment: 'Sangat worth it! Harga yang terjangkau tapi kualitas kontennya tidak kalah dengan platform internasional. Highly recommended!',
      date: '20 April 2026',
    },
    {
      id: '5',
      name: 'Rizky Pratama',
      role: 'Mobile Developer',
      avatarUrl: 'https://i.pravatar.cc/150?img=7',
      rating: 4,
      comment: 'Kursus Flutter-nya sangat komprehensif. Dari dasar hingga deploy ke Play Store semua dibahas dengan jelas dan praktis.',
      date: '15 April 2026',
    },
    {
      id: '6',
      name: 'Maya Putri',
      role: 'Data Analyst',
      avatarUrl: 'https://i.pravatar.cc/150?img=11',
      rating: 5,
      comment: 'Materi data science-nya sangat mendalam. Proyek-proyek yang diberikan benar-benar membantu saya membangun portfolio yang kuat.',
      date: '10 April 2026',
    },
    {
      id: '7',
      name: 'Dimas Arya',
      role: 'Fullstack Developer',
      avatarUrl: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      comment: 'Belajar Next.js di sini sangat menyenangkan. Penjelasannya step-by-step dan ada sesi live coding yang sangat membantu.',
      date: '5 April 2026',
    },
    {
      id: '8',
      name: 'Nadia Fitriani',
      role: 'Digital Marketer',
      avatarUrl: 'https://i.pravatar.cc/150?img=16',
      rating: 4,
      comment: 'Kursus digital marketing-nya sangat praktis. Langsung bisa diterapkan ke bisnis saya dan hasilnya sudah terasa dalam 2 bulan.',
      date: '1 April 2026',
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
                      className="shrink-0 w-[85%] sm:w-[45%] md:w-[27%] lg:w-[23%] px-2 py-10"
                    >
                      <CardProduct {...course} onClick={() => { }} />
                    </div>
                  ))}
                </div>
              </Swipeable>
            </div>
          </div>

          <div className="flex flex-col w-full justify-start items-start">
            <h1 className="font-semibold text-3xl capitalize">
              Products
            </h1>

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
                      className="shrink-0 w-[85%] sm:w-[45%] md:w-[27%] lg:w-[23%] px-2 py-10"
                    >
                      <CardProduct {...course} onClick={() => { }} />
                    </div>
                  ))}
                </div>
              </Swipeable>
            </div>
          </div>

          <div className="bg-black w-full rounded-2xl p-10">
            <div className="flex flex-row justify-between items-center">
              <div className="w-1/2 text-white">
                <h1 className="text-3xl font-semibold">Reimagine your career in the AI era</h1>
                <p className="mt-2 text-neutral-300 text-wrap">Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-7 mt-4">
                  <div className="flex justify-start items-start gap-2">
                    <Check className="w-6 h-6" />
                    <p className="text-base">AI-powered learning paths tailored to your goals</p>
                  </div>
                  <div className="flex justify-start items-start gap-2">
                    <Check className="w-6 h-6" />
                    <p className="text-base">Prep for a certification</p>
                  </div>
                  <div className="flex justify-start items-start gap-2">
                    <Check className="w-6 h-6" />
                    <p className="text-base">Practice with AI coaching</p>
                  </div>
                  <div className="flex justify-start items-start gap-2">
                    <Check className="w-6 h-6" />
                    <p className="text-base">Advance your career</p>
                  </div>
                </div>
                <Button className="bg-white text-black mt-10 rounded-lg py-6 px-10 font-semibold cursor-pointer hover:bg-white/80 transition-colors">
                  Get started with Personal Plan
                </Button>
              </div>
              <div className="w-1/2 flex justify-center">
                <Image className="w-full h-full object-fill" src={"https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp"} alt="image remaign your carreer" width={600} height={600} />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full justify-start items-start">
            <h1 className="font-semibold text-3xl capitalize">
              Testimonies
            </h1>

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
                  {testimonies.map((t) => (
                    <div
                      key={t.id}
                      className="shrink-0 w-[85%] sm:w-[45%] md:w-[27%] lg:w-[27%] px-2 py-10"
                    >
                      <CardTestimony {...t} />
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
