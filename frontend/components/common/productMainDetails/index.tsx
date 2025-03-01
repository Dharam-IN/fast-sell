'use client';

import React from 'react';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import BreadCrumb from '@/components/common/breadCrumb'

const Index: React.FC = () => {
    // const [price, setPrice] = useState(752);
    // const [discount, setDiscount] = useState(6);
    // const [mrp, setMrp] = useState(800);
    const price = 752;
    const discount = 6;
    const mrp = 800;


    return (
        <>
            <div className="p-6 border border-border rounded-xl">
                <BreadCrumb categoryname='Milk' productname='Saras Gold Full Cream Fresh Milk' />
                <h3 className="text-2xl font-bold mb-4">Ensure Balanced Nutrition Drink Powder For Adults - Vanilla Flavored</h3>
                <p className="text-gray-500 mb-2">Net Qty: 375g</p>

                <div className="mb-6">
                    <span className="text-3xl font-bold">₹{price}</span>
                    <span className="text-green-500 ml-2">{discount}% Off</span>
                    <p className="text-gray-500 line-through">MRP ₹{mrp}</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                    <p className="text-lg font-semibold mb-2">Coupons & Offers</p>
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <CreditCardOutlinedIcon className="text-blue-500" />
                            <span>Get flat 10% discount with RBL Bank Credit cards</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CreditCardOutlinedIcon className="text-green-500" />
                            <span>Get flat 10% discount with Federal Bank Credit Card</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <LocalOfferOutlinedIcon className="text-yellow-500" />
                            <span>Get flat 5% discount with Onecard</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <LocalOfferOutlinedIcon className="text-purple-500" />
                            <span>Up to ₹300 cashback with CRED</span>
                        </div>
                    </div>
                </div>

                <button className="btn-fill !w-full lg:block hidden">
                    Add To Cart
                </button>
            </div>

            <div className='lg:hidden block fixed w-full bottom-0 left-0 bg-white p-3'>
                <div className='px-6'>
                    <button className="btn-fill !w-full">
                        Add To Cart
                    </button>
                </div>
            </div>

        </>
    );
};

export default Index;
