import Link from 'next/link';
import Image from 'next/image';
import Peak_img from '../assets/peak_lm.png'
import ContactUs from '../pages/ContactUs';

export default function NavBar(){
    return(
        <div className='flex flex-row justify-between px-4 bg-neutral-800 w-full fixed'>
            <section className='flex flex-row text-orange-500 items-center'>
                <Image src={Peak_img} width={75} height={75}/>
                <h1 className='text-sm font-bold'> Peak Fitness. </h1>
            </section>

            <section className='flex flex-row gap-4 items-center text-orange-500 font-semibold'>
                <div> 
                    Home
                </div>
                <div>
                    About
                </div>

                <div>
                    Contact 
                </div>
            </section>

            <section className='flex flex-row items-center gap-4'>
                <div className='text-orange-500 border-2 border-orange-500 p-2 px-4 text-sm rounded-lg font-bold'>
                    Login
                </div>

                <div className='bg-orange-500 rounded-lg text-sm font-bold p-2.5 px-4'>
                    Sign Up
                </div>

            </section>


        </div>
    )
}