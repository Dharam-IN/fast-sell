'use client'
import React, { useEffect, useState } from 'react';
// import { useTheme } from '@mui/material/styles';
import HeaderDetectLocation from '@/components/detectLocation/HeaderDetectLocation'
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { usePathname } from 'next/navigation';

const Header = () => {
  // const theme = useTheme();
  const [mobileSticky, setMobileSticky] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname()

  const handleStickyNavbar = () => {

    const currentScrollPos = window.scrollY;

    if (currentScrollPos < prevScrollPos) {
      // Scrolling up
      setMobileSticky(true);
    } else {
      // Scrolling down
      setMobileSticky(false);
    }

    setPrevScrollPos(currentScrollPos);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, [prevScrollPos]);
  return (
    <>
      <header className='border border-b-border px-6 py-3 fixed top-0 left-0 w-full bg-white z-20'>
        <nav className='flex justify-between lg:items-center lg:flex-row flex-col'>
          <div className='xl:w-[25%] lg:w-[38%] w-[70%]'>
            <div className='flex gap-3 items-center'>
              <Link href={"/"} className='lg:block hidden'>
                {/* <Image src={""} width={150} height={50} alt='logo' /> */}
                <h3 className='uppercase text-3xl font-bold'>LOGO</h3>
              </Link>
              <HeaderDetectLocation />
            </div>
          </div>

          <div className='xl:w-[55%] lg:w-[38%] w-full lg:mt-0 md:mt-6 mt-3'>
            <div className='w-full relative'>
              <Link href={'/search'} className='w-full border border-border block py-3 rounded-lg bg-gray-100'>
                <button className='pl-3'>
                  <SearchIcon />
                </button>
              </Link>
            </div>
          </div>

          <div className='xl:w-[15%] lg:w-[19%] w-[30%] lg:relative absolute right-4 top-[13%]'>
            <div className='flex justify-end gap-3'>
              <Link href={'/login'} className='flex flex-row items-center gap-2'>
                <span>
                  Login
                </span>
                <PersonIcon />
              </Link>
              <Link href={"/cart"} className='btn-fill gap-2 md:inline-flex hidden'>
                <span>Cart</span>
                <ShoppingCartIcon />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <div className={`md:hidden block fixed transition-all duration-500 ease-in-out ${mobileSticky ? "bottom-0" : "-bottom-24"} z-20 w-full bg-white`}>
        <ul className='flex justify-between w-full mx-auto py-3 px-10'>
          <li>
            <Link href="/" className={`flex flex-col items-center gap-1 ${pathname === '/' && 'font-bold text-primary'}`}>
              <HomeOutlinedIcon className='text-[25px]' />
              <span className='text-sm'>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/categories" className={`flex flex-col items-center gap-1 ${pathname === '/categories' && 'font-bold text-primary'}`}>
              <CategoryOutlinedIcon className='text-[25px]' />
              <span className='text-sm'>Categories</span>
            </Link>
          </li>
          <li>
            <Link href="/" className={`flex flex-col items-center gap-1 ${pathname === '/wishlist' && 'font-bold text-primary'}`}>
              <BookmarkBorderOutlinedIcon className='text-[25px]' />
              <span className='text-sm'>Wishlist</span>
            </Link>
          </li>
          <li>
            <Link href="/" className={`flex flex-col items-center gap-1 ${pathname === '/cart' && 'font-bold text-primary'}`}>
              <ShoppingCartOutlinedIcon className='text-[25px]' />
              <span className='text-sm'>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;