'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { handleBack } from '@/services/helper';
import Image from 'next/image';

const Index: React.FC = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    const images = [
        'https://swiperjs.com/demos/images/nature-1.jpg',
        'https://swiperjs.com/demos/images/nature-2.jpg',
        'https://swiperjs.com/demos/images/nature-3.jpg',
        'https://swiperjs.com/demos/images/nature-4.jpg',
        'https://swiperjs.com/demos/images/nature-5.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-7.jpg',
        'https://swiperjs.com/demos/images/nature-8.jpg',
        'https://swiperjs.com/demos/images/nature-9.jpg',
        'https://swiperjs.com/demos/images/nature-10.jpg',
    ];

    const router = useRouter();

    return (
        <>
            <div className='relative'>
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                    } as React.CSSProperties}
                    spaceBetween={10}
                    navigation={{
                        prevEl: '.home-prev',
                        nextEl: '.home-next',
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="productDetailsSlider rounded-lg shadow-lg"
                >
                    {images.map((src, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                width={800}
                                height={400}
                                className="w-full h-96 object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='homeHeroCustomPrev productDetailsSwiperButtons mobileSwiperButton'>
                    <div className="home-prev">
                        <ChevronLeftIcon />
                    </div>
                    <div className="home-next">
                        <ChevronRightIcon />
                    </div>
                </div>
                <div className='lg:hidden block'>
                    <div className='absolute top-3 left-3 z-30'>
                        <button onClick={() => handleBack(router)} className='bg-[#ffffffd2] rounded-full w-10 h-10 text-base text-center leading-10'>
                            <KeyboardBackspaceOutlinedIcon />
                        </button>
                    </div>
                    <div className='absolute top-3 right-3 z-30 flex gap-4'>
                        <Link href={'/search'} className='bg-[#ffffffd2] rounded-full w-10 h-10 text-base text-center leading-10'>
                            <SearchIcon />
                        </Link>
                        <Link href={'#'} className='bg-[#ffffffd2] rounded-full w-10 h-10 text-base text-center leading-10'>
                            <IosShareOutlinedIcon />
                        </Link>
                    </div>
                </div>
            </div>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="productDetailsSliderThumbs mt-6"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            width={200}
                            height={100}
                            className="w-full h-24 object-cover cursor-pointer hover:opacity-80"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Index;
