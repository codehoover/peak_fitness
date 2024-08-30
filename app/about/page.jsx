import { RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col pt-28 pb-60 gap-12 h-full bg-neutral-800 text-white">
      <section className="flex flex-col items-center text-center">
        <h1 className="text-5xl font-medium"> About </h1>
        <p className="text-gray-300 p-2">
          We aim to make reaching your goals more attaintable.
        </p>
      </section>

      <section className="flex flex-col items-center gap-12 p-6 ">
        <h1 className="flex flex-row items-center gap-2 text-4xl font-bold text-orange-500">
          Everthing you need to achieve your goals
        </h1>

        <p className="font-semibold sm:w-3/6">
          <span className="text-orange-500"> Welcome to Peak. </span> A fitness
          app dedicated to providing an accessible, comprehensive, and
          user-friendly platform for all fitness enthusiasts.
          <br />
          <br /> <span className="text-orange-500"> Our mission </span> is to
          create a platform which enables users to acheve their health and
          fitness goals without financial barriers. With no paywalls and a
          donation-based model, Peak ensures that everyone has access to
          essential features like customizable workout plans, real-time
          tracking, and a robust communication hub for coaches and personal
          trainers. Join us in our journey to make fitness accessible to all,
          and let's reach new heights together!
        </p>
      </section>

      <section className="bg-zinc-900 rounded-t-3xl p-6">
        <section className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl"> Donation based platform </h1>
          <p className="sm:w-3/6">

            We strongly believe in providing equal access to all our users. I am
            committed to ensureing that every individual can access all features
            of our platform without any paywalls. Join us at Peak and unlock
            your full potential, completely free.
          </p>
        </section>

        <section className="flex flex-col items-center justify-center text-orange-500 w-full p-6 gap-10">
          <h1 className="flex flex-row gap-2 items-center text-4xl font-bold">
            Key Features
          </h1>

          <section className="flex flex-col sm:flex-row gap-6">
            <div className="flex flex-col w-48 h-48 p-2 border-orange-500 border rounded-md hover:scale-105 hover:font-semibold duration-300 ">
              <p> Routine Builder </p>
              <p className="text-xs">
             
                Tailored workouts and nutrition plans based on your goals
              </p>
            </div>
            <div className="w-48 h-48 p-2 border-orange-500 border rounded-md hover:scale-105 hover:font-semibold duration-300">
              <p> Communication hub </p>
              <p className="text-xs">
            
                Be able to communicate with friends or clients.
              </p>
            </div>
            <div className="w-48 h-48 p-2 border-orange-500 border rounded-md hover:scale-105 hover:font-semibold duration-300">
              <p> Real-time tracking </p>
              <p className="text-xs">
                
                Monitor your progress from workout to workout.
              </p>
            </div>
          </section>
        </section>
      </section>

      <section>
        <div className="flex flex-col sm:items-center gap-2 p-6 sm:w-full">
          <h1 className="text-4xl">

            Start your journey to becoming a better you now!
          </h1>
          <p className="text-gray-300">

            Peak is available on Apples App store as well as the Google play
            store
          </p>
          <p className="text-xs"> Coming soon! </p>
        </div>
      </section>

      <section className="flex flex-col p-6 items-center">
        <h1 className="text-4xl font-bold text-orange-500"> Contact Us</h1>
        <p>

          Have questions or feedback? Fill out the form
          <Link className="text-orange-500 hover:underline" href="/contact">
            here
          </Link>
          &nbsp;and we'll get right back to ya!
        </p>
      </section>
    </div>
  );
}
