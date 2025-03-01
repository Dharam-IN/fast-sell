import React from 'react'
import ProductImageGallery from '@/components/common/productDetailsImages'
import ProductMainDetails from '@/components/common/productMainDetails'
import ProductDetailsContent from '@/components/common/productDetailsContent'

const page = () => {
  return (
    <>
      <section className='lg:mt-28 mt-7'>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <ProductImageGallery />
            </div>
            <div>
              <ProductMainDetails />
            </div>
          </div>
          <div>
            <ProductDetailsContent/>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
