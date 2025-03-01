'use client'
import Link from 'next/link'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useRouter } from 'next/navigation';
import { handleBack } from '@/services/helper';

const page = () => {

    const router = useRouter()

  return (
    <>
      <header className='border border-b-border px-6 py-3 fixed top-0 left-0 w-full bg-white z-20'>
        <nav className='flex justify-between lg:items-center lg:flex-row flex-col'>
          <div className='xl:w-[20%] lg:w-[38%] w-[70%]'>
            <div className='flex gap-3 items-center'>
              <Link href={"/"} className='lg:block hidden'>
                {/* <Image src={""} width={150} height={50} alt='logo' /> */}
                <h3 className='uppercase text-3xl font-bold'>LOGO</h3>

              </Link>
            </div>
          </div>

          <div className='xl:w-[70%] lg:w-[38%] w-full'>
            <div className='w-full relative'>
              <input type='text' placeholder='Search "Anything"' autoFocus className='w-full border border-border block py-3 rounded-lg bg-gray-100 md:pl-14 pl-11 pe-3'/>
              <button className='pl-3 absolute top-1/2 left-0 -translate-y-1/2 lg:block hidden'>
                <SearchIcon/>
              </button>
              <button className='pl-3 absolute top-1/2 left-0 -translate-y-1/2 lg:hidden block' onClick={() => handleBack(router)}>
                <KeyboardBackspaceOutlinedIcon/>
              </button>
            </div>
          </div>

          <div className='xl:w-[10%] lg:w-[19%] w-[30%] lg:block hidden'>
            <div className='flex justify-end gap-3'>
              {/* <Link href={'/login'} className='flex flex-row items-center gap-2'>
                <span>
                  Login
                </span>
                <PersonIcon />
              </Link> */}
              <Link href={"/cart"} className='btn-fill gap-2'>
                <span>Cart</span>
                <ShoppingCartIcon />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default page