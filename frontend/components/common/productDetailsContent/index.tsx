'use client';

import React, { useState } from 'react';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import BreadCrumb from '@/components/common/breadCrumb'

const Index: React.FC = () => {
    const [price, setPrice] = useState(752);
    const [discount, setDiscount] = useState(6);
    const [mrp, setMrp] = useState(800);

    return (
        <>
            <div className="mt-5 p-6 border border-border rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Product Details</h3>
                <ul className="text-base leading-7">
                    <li><strong>Full Cream Milk</strong></li>
                    <li><strong>Type:</strong> Key Features</li>
                    <li>A perfect blend of good health and wholesome taste</li>
                    <li>Fresh and pure</li>
                    <li>Good source of calcium and milk proteins</li>
                    <li>Ideal for preparing tea, coffee, sweets, buttermilk etc.</li>
                    <li><strong>Unit:</strong> 500 ml</li>
                    <li><strong>FSSAI License:</strong> 10012013000275</li>
                    <li><strong>Shelf Life:</strong> 2 days</li>
                    <li><strong>Return Policy:</strong>
                        <ul className="list-disc ml-6">
                            <li>The product is non-returnable. For a damaged, defective, expired or incorrect item, you can request a replacement within 24 hours of delivery.</li>
                            <li>In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/unopened/unused and in original condition.</li>
                        </ul>
                    </li>
                    <li><strong>Packaging Type:</strong> Pack</li>
                    <li><strong>Manufacturer's Address:</strong> Jaipur Zila Dugdh Utpadak Sahakari Sangh Ltd., Jaipur - 15</li>
                    <li><strong>Country of Origin:</strong> India</li>
                    <li><strong>Customer Care Details:</strong> Email: info@blinkit.com</li>
                    <li><strong>Seller:</strong> ASVAH RETAIL PRIVATE LIMITED</li>
                    <li><strong>Seller FSSAI:</strong> 10823999000339</li>
                    <li><strong>Disclaimer:</strong> Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.</li>
                </ul>
            </div>

        </>
    );
};

export default Index;
