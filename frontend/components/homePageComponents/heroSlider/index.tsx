'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface Slide {
  id: number;
  imageUrl: string;
  altText: string;
}

const Index: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await new Promise<Slide[]>((resolve) => {
          setTimeout(() => {
            resolve([
              { id: 1, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg', altText: 'Slide 1' },
              { id: 2, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg', altText: 'Slide 2' },
              { id: 3, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg', altText: 'Slide 3' },
              { id: 4, imageUrl: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg', altText: 'Slide 4' },
            ]);
          }, 1000);
        });

        setSlides(response);
      } catch (err) {
        setError('Failed to load slides. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) return <div className="text-center p-6">Loading slides...</div>;
  if (error) return <div className="text-center p-6 text-red-500">{error}</div>;

  return (
    <div className="w-full relative">
      <Swiper navigation={{
        prevEl: '.home-prev',
        nextEl: '.home-next',

      }} pagination={true} modules={[Navigation, Pagination]} className="HeroSwiperSlider">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.imageUrl}
              alt={slide.altText}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}

      </Swiper>
      <div className='homeHeroCustomPrev mobileSwiperButton'>
        <div className="home-prev">
          <ChevronLeftIcon />
        </div>
        <div className="home-next">
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Index;