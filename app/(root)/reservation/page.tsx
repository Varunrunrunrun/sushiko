import NavBar from '@/components/reusable/NavBar'
import Image from 'next/image'
import React from 'react'

const Reservation = () => {
    return (
        <main className='w-full h-screen bg-primaryCol text-secondaryCol flex lg:flex-row flex-col gap-4 sm:p-4 p-0'>
            <div className='lg:h-full h-auto lg:w-1/2 w-full rounded-[20px] bg-reservation-hero bg-center bg-no-repeat flex flex-col justify-between items-start sm:p-8 p-4 gap-6'>
                <NavBar />
                <div className="text-5xl md:text-7xl lg:text-9xl w-full h-auto">
                    <div>BOOK</div>
                    <div>A TABLE</div>
                </div>
            </div>
            <div className='lg:w-1/2 w-full h-full'>
                <div className='w-full h-full border-[1px] rounded-lg border-secondaryCol/50 relative p-4 pt-20'>
                    <div className='w-full flex justify-center gap-4 items-center mb-6'>
                        <Image src="/assets/menu/grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16' />
                        <h1 className='text-4xl'>RESERVATION</h1>
                        <Image src="/assets/menu/grid.png" alt='grid' width={1000} height={1000} className='h-auto w-16 rotate-180' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Reservation