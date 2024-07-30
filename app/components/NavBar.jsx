'use client';

import { useRouter,usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Peak_img from '../assets/peak_lm.png'

export default function NavBar(){
    const router = useRouter();

    //reads current urls pathname
    const pathname = usePathname();

    return(
        <nav className={pathname != '/' ? 'flex flex-row justify-between px-4 bg-neutral-800 border-b border-neutral-700 w-full fixed z-50':'flex flex-row justify-between px-4 bg-transparent w-full fixed z-50'}>
            <Link className='flex flex-row text-orange-500 items-center '
            href='/'
            onClick={()=>setIsActive(0)}>
                <Image src={Peak_img} width={65} height={65} alt='Peak fitness logo' priority/>
                <h1 className='text-2xl font-light'> Peak Fitness </h1>
            </Link>

            <section className='grid grid-cols-3 gap-4 place-items-center text-orange-500 font-semibold'>
                <Link href={'/'} 
                onClick={() => router.push('/')}
                className={pathname == '/' ? "border-b-2 border-orange-500 duration-150": "hover:-translate-y-0.5 hover:font-normal duration-300 font-light border-none"}>
                    Home
                </Link>

                <Link href={'/about'} 
                onClick={() => router.push('/about')}
                className={pathname == '/about' ? "border-b-2 border-orange-500 duration-150": "hover:-translate-y-0.5 hover:font-normal duration-300 font-light border-none"}>
                    About
                </Link>

                <Link href={'/contact'} 
                onClick={() => router.push('/contact')}
                className={pathname == '/contact' ? "border-b-2 border-orange-500 duration-150": "hover:-translate-y-0.5 hover:font-normal duration-300 font-light border-none"}>
                    Contact
                </Link>
            </section>

            <section className='flex flex-row items-center gap-4'>
                <Link className='text-orange-500 border-2 border-orange-500 p-2 px-4 text-sm rounded-lg font-bold hover:bg-orange-500 hover:text-neutral-800 duration-300'
                href='/login'
                >
                    Login
                </Link>

                <Link className='bg-orange-500 rounded-lg text-sm font-bold p-2.5 px-4 hover:bg-orange-600 duration-300'
                href='/register'
                >
                    Sign Up
                </Link>

            </section>


        </nav>
    )
}