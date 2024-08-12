"use client";

import {
  LockClosedIcon,
  EnvelopeClosedIcon,
  LetterCaseCapitalizeIcon,
  PersonIcon,
  BackpackIcon,
  EnterIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  ClipboardIcon,
  FaceIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import peakLogo from "../assets/peak_icon.png";
import Carousel from "../components/carousel/Carousel";
import Link from "next/link";

export default function Register() {
  const [toggle, setToggle] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  return (
    <div className="flex flex-row items-center justify-center w-full h-screen bg-neutral-800 text-white ">
      <div className="flex flex-col md:flex-row justify-between bg-orange-500 sm:w-4/6 max-w-6xl h-5/6 md:h-4/6 mx-4 p-6 rounded-3xl ">
        <section className=" flex flex-col items-center justify-between h-full md:w-1/3 ">
          <Image
            src={peakLogo}
            width={60}
            height={60}
            alt="Peak fitness logo"
          />

          <h1 className="text-4xl font-medium"> Create an account </h1>

          <section className="flex flex-row gap-2 justify-between items-center w-full">
            <button
              className={`flex flex-row items-center justify-center gap-px border border-black p-2 rounded-md w-1/2 duration-300 font-medium ${!toggle ? "bg-black" : "bg-transparent text-black"}`}
              onClick={() => setToggle(!toggle)}
              disabled={!toggle}
              name="User"
            >
              <FaceIcon width={20} height={20} /> User
            </button>
            <button
              className={`flex flex-row items-center justify-center gap-px border border-black p-2 rounded-md w-1/2 duration-300 font-medium ${toggle ? "bg-black" : "bg-transparent text-black"}`}
              onClick={() => setToggle(!toggle)}
              disabled={toggle}
              name="coach"
            >
              <ClipboardIcon width={20} height={20} /> Coach
            </button>
          </section>

          {toggle ? (
            <div className="flex flex-col w-full h-3/6 justify-between transition-h duration-300">
              <div className="flex flex-row items-center gap-2 border-b-2 ">
                <LetterCaseCapitalizeIcon width={25} height={25} />
                <input
                  className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
                  placeholder="Full Name"
                />
              </div>

              <div className="flex flex-row items-center gap-2 border-b-2 ">
                <EnvelopeClosedIcon width={25} height={25} />
                <input
                  className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
                  placeholder="Business Email"
                />
              </div>

              <div className="flex flex-row items-center gap-2 border-b-2 ">
                <BackpackIcon width={25} height={25} />
                <input
                  className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
                  placeholder="Organization (Optional)"
                />
              </div>

              <div className="flex flex-row items-center gap-2 border-b-2">
                <PersonIcon width={25} height={25} />
                <input
                  className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
                  placeholder="Username"
                />
              </div>

              <div className="flex flex-row items-center gap-2 border-b-2">
                <LockClosedIcon width={25} height={25} />
                <input
                  className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
                  placeholder="Password"
                  type={isVisible ? "text" : "password"}
                />
                <button onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col w-full h-2/5 transition-h duration-300 justify-between">
              <div className="flex flex-row items-center gap-2 border-b-2 ">
                <LetterCaseCapitalizeIcon width={25} height={25} />
                <input
                  className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
                  placeholder="Full Name"
                />
              </div>

              <div className="flex flex-row items-center gap-2 border-b-2 ">
                <EnvelopeClosedIcon width={25} height={25} />
                <input
                  className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-row items-center gap-2 border-b-2">
                <PersonIcon width={25} height={25} />
                <input
                  className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
                  placeholder="Username"
                />
              </div>

              <div className="flex flex-row items-center gap-2 border-b-2">
                <LockClosedIcon width={25} height={25} />
                <input
                  className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
                  placeholder="Password"
                  type={isVisible ? "text" : "password"}
                />
                <button
                  onClick={() => setIsVisible(!isVisible)}
                  name="password visibility toggle"
                >
                  {isVisible ? <EyeOpenIcon /> : <EyeClosedIcon />}
                </button>
              </div>
            </div>
          )}

          <button
            className="bg-neutral-800 rounded-lg p-2 hover:bg-neutral-700 hover:font-semibold duration-300 w-full"
            name="create account"
          >
            Create account
          </button>

          <section className="flex flex-col gap-2 items-center text-xs w-full">
            <p className="text-gray-100"> Already have an account? </p>
            <Link
              href={"/login"}
              onClick={() => router.push("/login")}
              className="flex flex-row w-full items-center justify-center gap-px font-semibold text-black"
            >
              {" "}
              <EnterIcon width={20} height={20} /> Log In{" "}
            </Link>
          </section>
        </section>

        <div className="hidden md:block flex items-center p-6 w-2/4 h-full bg-gradient-to-r from-black to-neutral-900 rounded-3xl">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
