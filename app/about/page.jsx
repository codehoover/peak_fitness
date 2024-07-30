import { RocketIcon, StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function About(){
    return(
        <div className="flex flex-col sm:px-6 pt-48 pb-60 gap-12 h-full bg-neutral-800 text-white">
            <section className="flex flex-col items-center gap-12 ">
                <h1 className="flex flex-row items-center gap-2 text-5xl font-bold text-orange-500"> 
                    Everthing you need to achieve your goals
                    <RocketIcon width={40} height={40}/> 
                </h1>

                <p className="font-semibold w-3/6"> 
                    Welcome to Peak. A fitness app dedicated to 
                    providing an accessible, comprehensive, and user-friendly platform
                    for all fitness enthusiasts.
                    <br/><br/>Our mission is to create a platform
                    which enables users to acheve their health and fitness goals without
                    financial barriers. With no paywalls and a donation-based model, Peak 
                    ensures that everyone has access to essential features like customizable 
                    workout plans, real-time tracking, and a robust communication hub for coaches and personal trainers. 
                    Join us in our journey to make fitness accessible to all, and let's reach new heights together!
                </p>
            </section>

            <section className="flex flex-col items-center justify-center text-orange-500 gap-10">
                <h1 className="flex flex-row gap-2 items-center text-5xl font-bold"> 
                    Key Features <StarIcon width={40} height={40}/> 
                </h1>

                <section className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col w-48 h-48 p-2 border-orange-500 border rounded-md hover:scale-105 hover:font-semibold duration-300 ">
                        <p> Routine Builder </p>
                        <p className="text-xs"> Tailored workouts and nutrition plans based on your goals </p>
                    </div>
                    <div className="w-48 h-48 p-2 border-orange-500 border rounded-md hover:scale-105 hover:font-semibold duration-300">
                        <p> Communication hub </p>
                        <p className="text-xs"> Be able to communicate with friends or clients. </p>
                    </div>
                    <div className="w-48 h-48 p-2 border-orange-500 border rounded-md hover:scale-105 hover:font-semibold duration-300">
                        <p> Real-time tracking </p>
                        <p className="text-xs"> Monitor your progress from workout to workout. </p>
                    </div>
                </section>

            </section>
            
            <section>
                <h1 className="text-5xl font-bold text-orange-500"> Want to keep up to date with us? </h1>
                <p> Subscribe to recieve email updates on important updates regarding our platform! </p>

            </section>

            <section>
                <h1 className="text-5xl font-bold text-orange-500"> Contact Us</h1>
                <p> Have questions or feedback? Fill out the form <Link className='text-orange-500 hover:underline' href='/contact'>here</Link> 
                &nbsp;and we'll get right back to ya!</p>
            </section>

        </div>
    )
}