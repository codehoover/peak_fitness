import Onboarding from "./components/onBoarding";
import {
  ArrowRightIcon,
  ArrowTopRightIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-neutral-800 h-screen justify-center items-center overflow-hidden">
      <video
        className="fixed z-0 overflow-hidden opacity-90 rounded-md object-cover sm:block  h-screen w-screen"
        src={"/Beach_running.mp4"}
        loop
        autoPlay
        muted
      ></video>

      <div className="flex flex-col pt-20 pl-6 pb-6 justify-between h-full">
        <Link
          className="text-white flex flex-row gap-10 items-center rounded-xl p-2 hover:bg-black duration-300 w-1/12 min-w-36 z-10"
          href="/contact"
        >
          <div className=" grid grid-cols-2 max-w-4">
            <ArrowTopRightIcon
              className="rounded-full bg-white z-20"
              color="black"
              width={20}
              height={20}
              hey
            />

            <QuestionMarkCircledIcon className="z-10" width={40} height={40} />
          </div>

          <p className="font-light min-w-20 max-w-20 leading-none">
            Have a question?
          </p>
        </Link>

        <section className="flex flex-col text-white gap-6 z-10 ">
          <h1 className="text-5xl sm:text-6xl w-5/6 sm:w-2/6">
            Unlock your potential, reach your
            <span className="text-orange-500 "> Peak </span>
          </h1>
          <p className="w-5/6 sm:w-2/6 font-light">
            Welcome to your health and wellness journey.
            <span className="text-orange-500 font-bold"> Peak </span>
            is a free to use platform made to help you reach your goals. Build
            and track workouts, keep intouch with your friends fitness journey's
            and track real time progress!
          </p>

          <Link
            href="/about"
            className="flex items-center text-sm justify-center gap-2 p-4 w-44 bg-orange-500 rounded-full hover:bg-orange-600 hover:font-semibold duration-300"
          >
            LEARN MORE
            <ArrowRightIcon width={20} height={20} />
          </Link>
        </section>
      </div>
      {/* <Onboarding /> */}
    </main>
  );
}
