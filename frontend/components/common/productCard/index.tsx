import React from 'react';
import { ProductDataProps } from '@/types/commonInterface'
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';

const index = ({ image, offer, price, title, time, currency }: ProductDataProps) => {
    return (
        <>
            {/* <div key={id} className="border p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-600">Category: {category}</p>
                <p className="text-green-500">Price: ${price}</p>
                <p className="text-red-500">Offer: {offer}</p>
                <span className="inline-block bg-yellow-300 text-black px-3 py-1 rounded-full text-sm">
                    {badge}
                </span>
            </div> */}

            <div className='bg-accent rounded-lg overflow-hidden border border-accent'>
                <Link className='relative' href={'/'}>
                    <Image src={image} width={300} height={200} alt={title} className='w-full md:h-[150px] object-cover' />
                    <div className='offerBadge'>
                        <span className="offerBadgeTopLeft">{offer}</span>
                    </div>
                </Link>
                <div className='p-5 flex flex-col gap-2'>
                    <strong className='text-[13px] font-medium uppercase flex items-center gap-1'>
                        <AccessTimeIcon className='!text-[14px]'/>
                        {time}
                    </strong>
                    <Link className='text-sm font-semibold' href={"/"}>{title}</Link>
                    <h4 className='text-xs font-bold'>{currency} {price}</h4>
                    <button className='!w-full listingProductAddToCardBTN'>
                        Add to card
                    </button>
                </div>
            </div>
        </>
    )
}

export default index
