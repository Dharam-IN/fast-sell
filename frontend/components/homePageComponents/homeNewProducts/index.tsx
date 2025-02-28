'use client'
import React, { useEffect, useState } from 'react';
import SectionTitle from '@/components/common/sectionTitle'
import ProductCard from '@/components/common/productCard'
import {homeBestSellingProduct} from '@/types/commonInterface'

// Dummy API function to simulate fetching products
const fetchProducts = async (): Promise<homeBestSellingProduct[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, time: '11 Mins', currency: "$", title: "Green Pumpkin (Hara Kaddu)", category: 'Jewelry', price: 1200, offer: '10% Off', badge: 'Best Seller', image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/655a442d-3a65-4dcd-9998-57868f0aea0d.jpg?ts=1710233981" },
                { id: 2, time: '11 Mins', currency: "$", title: "Green Pumpkin (Hara Kaddu)", category: 'Jewelry', price: 1500, offer: '15% Off', badge: 'New Arrival', image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/655a442d-3a65-4dcd-9998-57868f0aea0d.jpg?ts=1710233981" },
                { id: 3, time: '11 Mins', currency: "$", title: "Green Pumpkin (Hara Kaddu)", category: 'Accessories', price: 500, offer: '5% Off', badge: 'Limited Edition', image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/655a442d-3a65-4dcd-9998-57868f0aea0d.jpg?ts=1710233981" },
                { id: 4, time: '11 Mins', currency: "$", title: "Green Pumpkin (Hara Kaddu)", category: 'Jewelry', price: 800, offer: '20% Off', badge: 'Trending', image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/655a442d-3a65-4dcd-9998-57868f0aea0d.jpg?ts=1710233981" },
                { id: 5, time: '11 Mins', currency: "$", title: "Green Pumpkin (Hara Kaddu)", category: 'Jewelry', price: 2000, offer: '25% Off', badge: 'Exclusive', image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/655a442d-3a65-4dcd-9998-57868f0aea0d.jpg?ts=1710233981" },
                { id: 6, time: '11 Mins', currency: "$", title: "Green Pumpkin (Hara Kaddu)", category: 'Jewelry', price: 2000, offer: '25% Off', badge: 'Exclusive', image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/655a442d-3a65-4dcd-9998-57868f0aea0d.jpg?ts=1710233981" },
                { id: 7, time: '11 Mins', currency: "$", title: "Green Pumpkin (Hara Kaddu)", category: 'Jewelry', price: 2000, offer: '25% Off', badge: 'Exclusive', image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/655a442d-3a65-4dcd-9998-57868f0aea0d.jpg?ts=1710233981" },
                { id: 8, time: '11 Mins', currency: "$", title: "Green Pumpkin (Hara Kaddu)", category: 'Jewelry', price: 2000, offer: '25% Off', badge: 'Exclusive', image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/655a442d-3a65-4dcd-9998-57868f0aea0d.jpg?ts=1710233981" },
                { id: 9, time: '11 Mins', currency: "$", title: "Green Pumpkin (Hara Kaddu)", category: 'Jewelry', price: 2000, offer: '25% Off', badge: 'Exclusive', image: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/655a442d-3a65-4dcd-9998-57868f0aea0d.jpg?ts=1710233981" },
            ]);
        }, 1000);
    });
};

const Index = () => {
    const [products, setProducts] = useState<homeBestSellingProduct[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        getProducts();
    }, []);

    return (
        <section className='pt-SectionMobileGap lg:pt-SectionLgGap pb-SectionMobileGap lg:pb-SectionLgGap'>
            <div className="container mx-auto px-6">
                <SectionTitle title="New Added Products" align='center' />
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-6 gap-3">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Index;