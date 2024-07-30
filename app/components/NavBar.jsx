'use client';

import Link from 'next/link';
import Image from 'next/image';
import Peak_img from '../assets/peak_lm.png'
import { useState } from 'react';

export default function NavBar(args){
    const [isActive, setIsActive] = useState(0)
    return(
        <nav className={'flex flex-row justify-between px-4 bg-transparent w-full fixed z-50'}>
            <Link className='flex flex-row text-orange-500 items-center '
            href='/'
            onClick={()=>setIsActive(0)}>
                <Image src={Peak_img} width={65} height={65} alt='Peak fitness logo' priority/>
                <h1 className='text-2xl font-light'> Peak Fitness </h1>
            </Link>

            <section className='grid grid-cols-3 gap-4 place-items-center text-orange-500 font-semibold'>
                <Link className={isActive == 0 ? "border-b-2 border-orange-500 duration-150": "hover:-translate-y-0.5 hover:font-normal duration-300 font-light border-none"}
                href='/'
                onClick={()=> setIsActive(0)}> Home </Link>
                
                <Link className={isActive == 1 ? "border-b-2 border-orange-500 duration-150": "hover:-translate-y-0.5 hover:font-normal duration-300 font-light border-none"}
                href="/about"
                onClick={()=> setIsActive(1)}> About </Link>

                <Link className={isActive == 2 ? "border-b-2 border-orange-500 duration-150": "hover:-translate-y-0.5 hover:font-normal duration-300 font-light border-none"}
                href='/contact'
                onClick={()=> setIsActive(2)}> Contact </Link>
            </section>

            <section className='flex flex-row items-center gap-4'>
                <Link className='text-orange-500 border-2 border-orange-500 p-2 px-4 text-sm rounded-lg font-bold hover:bg-orange-500 hover:text-neutral-800 duration-300'
                href='/login'
                onClick={()=> setIsActive(4)}>
                    Login
                </Link>

                <Link className='bg-orange-500 rounded-lg text-sm font-bold p-2.5 px-4 hover:bg-orange-600 duration-300'
                href='/register'
                onClick={()=> setIsActive(5)}>
                    Sign Up
                </Link>

            </section>


        </nav>
    )
}