'use client'
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { homeCategorySlide } from '@/types/commonInterface'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Index = () => {

    const [categories, setCategories] = useState<homeCategorySlide[]>([]);

    useEffect(() => {
        // Simulate API call with dummy data
        const fetchCategories = async () => {
            const dummyCategories: homeCategorySlide[] = [
                { id: 1, name: 'Convenience', icon: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/be401ec1-2395-4138-aa11-91415e6757ff.jpeg' },
                { id: 2, name: 'Grocery', icon: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/be401ec1-2395-4138-aa11-91415e6757ff.jpeg' },
                { id: 3, name: 'Health', icon: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/be401ec1-2395-4138-aa11-91415e6757ff.jpeg' },
                { id: 4, name: 'Personal Care', icon: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/be401ec1-2395-4138-aa11-91415e6757ff.jpeg' },
                { id: 5, name: 'Electronics', icon: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/be401ec1-2395-4138-aa11-91415e6757ff.jpeg' },
                { id: 6, name: 'Stationary', icon: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/be401ec1-2395-4138-aa11-91415e6757ff.jpeg' },
                { id: 7, name: 'Pet Care', icon: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/be401ec1-2395-4138-aa11-91415e6757ff.jpeg' },
                { id: 8, name: 'Alcohol', icon: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/be401ec1-2395-4138-aa11-91415e6757ff.jpeg' },
                { id: 9, name: 'Baby Care', icon: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/be401ec1-2395-4138-aa11-91415e6757ff.jpeg' },
                { id: 10, name: 'Gourmet', icon: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/be401ec1-2395-4138-aa11-91415e6757ff.jpeg' },
            ];
            setCategories(dummyCategories);
        };

        fetchCategories();
    }, []);

    return (
        <section className='pt-SectionMobileGap lg:pt-SectionLgGap'>
            <div className='relative'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    navigation={{
                        prevEl: '.category-prev',
                        nextEl: '.category-next',

                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        320: { slidesPerView: 4 },
                        768: { slidesPerView: 5 },
                        1024: { slidesPerView: 8 },
                    }}
                    className='mySwiper'
                >
                    {categories.map((category, index) => (
                        <SwiperSlide key={index} className='!h-auto'>
                            <Link href={"/"} className='flex flex-col items-center bg-gray-100 px-3 md:px-6 py-2 md:py-5 rounded-lg h-full'>
                                <Image
                                    src={category.icon}
                                    alt={category.name}
                                    width={80}
                                    height={80}
                                />
                                <span className='text-center text-sm md:text-base font-semibold mt-2'>{category.name}</span>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='categoryHeroCustomPrev mobileSwiperButton'>
                    <div className="category-prev shadow-xl">
                        <ChevronLeftIcon />
                    </div>
                    <div className="category-next shadow-xl">
                        <ChevronRightIcon />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;