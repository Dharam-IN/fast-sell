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
      <header className='border border-red-400 px-6 py-3'>
        <nav className='flex justify-between items-center'>
          <div className='lg:w-[20%] w-1/2'>
            <div className='flex gap-3 items-center'>
              <Image src={"https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.53.3/images/header/primary-logo.svg"} width={150} height={50} alt='logo' />
              <HeaderDetectLocation />
            </div>
          </div>

          <div className='lg:w-[65%] w-1/2'>
            <Link href={'/search'} className='w-full border border-border block py-3 rounded-lg bg-gray-100'>
              <button className='pl-3'>
                <SearchIcon />
              </button>
            </Link>
          </div>

          <div className='lg:w-[10%] w-1/2'>
            <div className='flex justify-between gap-3'>
              <Link href={'/login'} className='flex flex-row items-center gap-2'>
                <span>
                Login
                </span>
                <PersonIcon />
              </Link>
              <div>
                <Link href={"/cart"} className='btn-fill gap-2'>
                  <span>Cart</span>
                  <ShoppingCartIcon />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;