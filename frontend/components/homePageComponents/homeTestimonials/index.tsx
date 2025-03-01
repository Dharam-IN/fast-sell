"use client";
import React from 'react';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import SectionTitle from '@/components/common/sectionTitle';

// Define types for card details
interface CardDetail {
    imgUrl: string;
    title: string;
    description: string;
    userName: string;
    userRole: string;
}

const Index: React.FC = () => {
    const cardDetails: Record<number, CardDetail> = {
        0: {
            imgUrl: "/images/logo.png",
            title: "“Excellent Service for Small Business Loans”",
            description: "The loan process was seamless, and the customer support team was incredibly helpful in guiding us through every step. Highly recommend!",
            userName: "Emily R.",
            userRole: "Small Business Owner"
        },
        1: {
            imgUrl: "/images/logo.png",
            title: "“Trusted and Transparent”",
            description: "I’ve never had a better experience securing a loan. This platform is reliable, transparent, and fast. It helped me get the best deal.",
            userName: "James L.",
            userRole: "Freelancer"
        },
        2: {
            imgUrl: "/images/logo.png",
            title: "“A Game-Changer for Homeowners”",
            description: "This service helped me find the right loan for my home renovation. The process was simple and efficient, with great customer service along the way.",
            userName: "Sophia M.",
            userRole: "Homeowner"
        },
        3: {
            imgUrl: "/images/logo.png",
            title: "“Stress-Free Loan Experience”",
            description: "Securing a loan for my business has never been easier. The platform made everything clear and straightforward, and the rates were great!",
            userName: "Mark T.",
            userRole: "Entrepreneur"
        },
        4: {
            imgUrl: "/images/logo.png",
            title: "“Fast and Reliable”",
            description: "I was able to compare multiple loan offers quickly, and the entire process was smooth and reliable. I would definitely use this service again.",
            userName: "Olivia J.",
            userRole: "Freelancer"
        },
        5: {
            imgUrl: "/images/logo.png",
            title: "“Highly Recommend!”",
            description: "I’m impressed by the level of professionalism and support provided throughout the loan process. Everything was explained clearly, and I felt confident every step of the way.",
            userName: "Daniel P.",
            userRole: "Small Business Owner"
        },
        6: {
            imgUrl: "/images/logo.png",
            title: "“Excellent Customer Service”",
            description: "The team was always available to assist with any questions, and the process was simple and fast. I’m grateful for this service.",
            userName: "Isabella N.",
            userRole: "Homeowner"
        }
    };

    // Truncate description function with type
    const truncateDescription = (text: string): string => {
        return text.length > 120 ? `${text.slice(0, 120)}...` : text;
    };

    return (
        <section className='bg-gray-100 py-SectionMobileGap lg:py-SectionLgGap'>
            <SectionTitle
                title="What Our Clients Say"
            >
                Our clients trust us to find the best loan options that meet their needs. Here&apos;s what they have to say!
            </SectionTitle>
            <div className="homeTestimonialsCarouselContainer">
                <div className="carousel-track">
                    {Object.keys(cardDetails).map((detailKey) => {
                        const detail = cardDetails[parseInt(detailKey)];
                        return (
                            <div 
                                className="group bg-white border border-solid h-auto border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600" 
                                key={detailKey}
                            >
                                <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <StarIcon key={index} className="w-5 h-5" />
                                    ))}
                                </div>

                                <p className="text-lg text-gray-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-gray-800">
                                    {truncateDescription(detail.description)}
                                </p>

                                <div className="flex items-center gap-5">
                                    <Image
                                        className="rounded-full object-cover w-10 h-10"
                                        src={detail.imgUrl}
                                        alt="avatar"
                                        width={150}
                                        height={150}
                                    />
                                    <div className="grid gap-1">
                                        <h5 className="text-gray-900 font-medium transition-all duration-500 group-hover:text-indigo-600">
                                            {detail.userName}
                                        </h5>
                                        <span className="text-sm leading-6 text-gray-500">{detail.userRole}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Index;
