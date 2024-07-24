import Link from 'next/link';
import Image from 'next/image';
import Peak_img from '../assets/peak_lm.png'

export default function NavBar(){
    return(
        <div className='flex flex-row justify-between px-4 bg-transparent w-full fixed'>
            <section className='flex flex-row text-orange-500 items-center'>
                <Image src={Peak_img} width={65} height={65} alt='Peak fitness logo' priority/>
                <h1 className='text-sm font-bold'> Peak Fitness </h1>
            </section>

            <section className='flex flex-row gap-4 items-center text-orange-500 font-semibold'>
                <Link href='/'> Home </Link>
                
                <Link href="/about"> About </Link>

                <Link href='/contact'> Contact </Link>
            </section>

            <section className='flex flex-row items-center gap-4'>
                <Link className='text-orange-500 border-2 border-orange-500 p-2 px-4 text-sm rounded-lg font-bold'
                href='/login'>
                    Login
                </Link>

                <Link className='bg-orange-500 rounded-lg text-sm font-bold p-2.5 px-4'
                href='/register'>
                    Sign Up
                </Link>

            </section>


        </div>
    )
}