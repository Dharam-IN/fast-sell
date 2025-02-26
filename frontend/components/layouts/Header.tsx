'use client'
import React from 'react';
import { useTheme } from '@mui/material/styles';
import HeaderDetectLocation from '@/components/detectLocation/HeaderDetectLocation'
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <header className='border border-b-border px-6 py-3'>
        <nav className='flex justify-between lg:items-center lg:flex-row flex-col'>
          <div className='xl:w-[25%] lg:w-[35%] w-[70%]'>
            <div className='flex gap-3 items-center'>
              <div className='lg:block hidden'>
                <Image src={"https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.53.3/images/header/primary-logo.svg"} width={150} height={50} alt='logo' />
              </div>
              <HeaderDetectLocation />
            </div>
          </div>

          <div className='xl:w-[55%] lg:w-[42%] w-full lg:mt-0 mt-3'>
            <Link href={'/search'} className='w-full border border-border block py-3 rounded-lg bg-gray-100'>
              <button className='pl-3'>
                <SearchIcon />
              </button>
            </Link>
          </div>

          <div className='xl:w-[15%] lg:w-[19%] w-[30%] lg:relative absolute right-4'>
            <div className='flex justify-end gap-3'>
              <Link href={'/login'} className='flex flex-row items-center gap-2'>
                <span>
                  Login
                </span>
                <PersonIcon />
              </Link>
              <Link href={"/cart"} className='btn-fill gap-2 sm:inline-flex hidden'>
                <span>Cart</span>
                <ShoppingCartIcon />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;