'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface SubCategory {
  id: number;
  name: string;
  imageUrl: string;
}

interface MainCategory {
  id: number;
  name: string;
  subCategories: SubCategory[];
}

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState<MainCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        // Simulate API call
        const dummyData: MainCategory[] = [
          {
            id: 1,
            name: 'Grocery & Kitchen',
            subCategories: [
              { id: 1, name: 'Fruits & Vegetables', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/19c07fe9-3d12-4bd4-b815-e7f60d4ac9e6.jpg' },
              { id: 2, name: 'Dairy & Eggs', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/19c07fe9-3d12-4bd4-b815-e7f60d4ac9e6.jpg' },
              { id: 3, name: 'Snacks & Beverages', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/19c07fe9-3d12-4bd4-b815-e7f60d4ac9e6.jpg' },
              { id: 4, name: 'Spices & Condiments', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/19c07fe9-3d12-4bd4-b815-e7f60d4ac9e6.jpg' },
              { id: 41, name: 'Spices & Condiments', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/19c07fe9-3d12-4bd4-b815-e7f60d4ac9e6.jpg' },
              { id: 5, name: 'Bakery & Breads', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/19c07fe9-3d12-4bd4-b815-e7f60d4ac9e6.jpg' },
            ],
          },
          {
            id: 2,
            name: 'Personal Care',
            subCategories: [
              { id: 6, name: 'Skincare', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-4000-4000,pr-true,f-auto,q-80/cms/product_variant/f1417e9e-0299-4794-b916-9f823b56aa4b.jpg' },
              { id: 7, name: 'Hair Care', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-4000-4000,pr-true,f-auto,q-80/cms/product_variant/f1417e9e-0299-4794-b916-9f823b56aa4b.jpg' },
              { id: 8, name: 'Oral Care', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-4000-4000,pr-true,f-auto,q-80/cms/product_variant/f1417e9e-0299-4794-b916-9f823b56aa4b.jpg' },
              { id: 9, name: 'Bath & Body', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-4000-4000,pr-true,f-auto,q-80/cms/product_variant/f1417e9e-0299-4794-b916-9f823b56aa4b.jpg' },
              { id: 91, name: 'Bath & Body', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-4000-4000,pr-true,f-auto,q-80/cms/product_variant/f1417e9e-0299-4794-b916-9f823b56aa4b.jpg' },
              { id: 10, name: 'Men’s Grooming', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-4000-4000,pr-true,f-auto,q-80/cms/product_variant/f1417e9e-0299-4794-b916-9f823b56aa4b.jpg' },
            ],
          },
          {
            id: 3,
            name: 'Home Essentials',
            subCategories: [
              { id: 11, name: 'Cleaning Supplies', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-3602-3602,pr-true,f-auto,q-80/cms/product_variant/81568fec-e5ff-4b0c-89f2-581a6b07a9cf.jpeg' },
              { id: 12, name: 'Kitchenware', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-3602-3602,pr-true,f-auto,q-80/cms/product_variant/81568fec-e5ff-4b0c-89f2-581a6b07a9cf.jpeg' },
              { id: 13, name: 'Home Decor', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-3602-3602,pr-true,f-auto,q-80/cms/product_variant/81568fec-e5ff-4b0c-89f2-581a6b07a9cf.jpeg' },
              { id: 14, name: 'Storage Solutions', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-3602-3602,pr-true,f-auto,q-80/cms/product_variant/81568fec-e5ff-4b0c-89f2-581a6b07a9cf.jpeg' },
              { id: 15, name: 'Gardening', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-3602-3602,pr-true,f-auto,q-80/cms/product_variant/81568fec-e5ff-4b0c-89f2-581a6b07a9cf.jpeg' },
            ],
          },
          {
            id: 4,
            name: 'Health & Wellness',
            subCategories: [
              { id: 16, name: 'Supplements', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1389-1389,pr-true,f-auto,q-80/cms/product_variant/62dfd02e-e3d6-4782-bcad-7c2840ba5929.jpeg' },
              { id: 17, name: 'Fitness Equipment', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1389-1389,pr-true,f-auto,q-80/cms/product_variant/62dfd02e-e3d6-4782-bcad-7c2840ba5929.jpeg' },
              { id: 18, name: 'Medical Supplies', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1389-1389,pr-true,f-auto,q-80/cms/product_variant/62dfd02e-e3d6-4782-bcad-7c2840ba5929.jpeg' },
              { id: 19, name: 'Healthy Snacks', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1389-1389,pr-true,f-auto,q-80/cms/product_variant/62dfd02e-e3d6-4782-bcad-7c2840ba5929.jpeg' },
              { id: 20, name: 'Mental Wellness', imageUrl: 'https://cdn.zeptonow.com/production/tr:w-400,ar-1389-1389,pr-true,f-auto,q-80/cms/product_variant/62dfd02e-e3d6-4782-bcad-7c2840ba5929.jpeg' },
            ],
          },
        ];
        setCategories(dummyData);
      } catch (err) {
        console.error(err)
        setError('Failed to load categories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="text-center p-6">Loading categories...</div>;
  if (error) return <div className="text-center p-6 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4 lg:mt-20 mt-36">
      <h1 className="text-2xl font-bold mb-6">All Categories</h1>
      {categories.map((mainCategory) => (
        <div key={mainCategory.id} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{mainCategory.name}</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 lg:gap-6 gap-3">
            {mainCategory.subCategories.map((subCategory) => (
              <div key={subCategory.id} className="bg-white rounded-lg">
                <Image
                  src={subCategory.imageUrl}
                  alt={subCategory.name}
                  width={150}
                  height={150}
                  className="w-full h-32 object-cover rounded-md"
                />
                <h3 className="text-sm md:text-base font-bold mt-2 text-center">{subCategory.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
