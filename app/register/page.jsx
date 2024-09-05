"use client";

import {
  EnterIcon,
  ClipboardIcon,
  FaceIcon,
} from "@radix-ui/react-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";


import Image from "next/image";
import peakLogo from "../assets/peak_icon.png";
import Carousel from "../components/carousel/Carousel";
import Link from "next/link";

import ClientForm from "../components/forms/clientForm";
import CoachForm from "../components/forms/coachForm";

export default function Register() {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  return (
    <div className="flex flex-row items-center justify-center w-full h-screen bg-neutral-800 text-white pt-12">
      <div className="flex flex-col md:flex-row justify-between  bg-orange-500 sm:w-4/6  h-5/6 md:h-5/6 mx-4 p-6 rounded-3xl ">
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
              name="CLIENT"
            >
              <FaceIcon width={20} height={20} /> User
            </button>
            <button
              className={`flex flex-row items-center justify-center gap-px border border-black p-2 rounded-md w-1/2 duration-300 font-medium ${toggle ? "bg-black" : "bg-transparent text-black"}`}
              onClick={() => setToggle(!toggle)}
              disabled={toggle}
              name="COACH"
            >
              <ClipboardIcon width={20} height={20} /> Coach
            </button>
          </section>

          {toggle ? ( <CoachForm/>) : (<ClientForm/>)}

          <section className="flex flex-col gap-2 items-center text-xs w-full">
            <p className="text-gray-100"> Already have an account? </p>
            <Link
              href={"/login"}
              onClick={() => router.push("/login")}
              className="flex flex-row w-full items-center justify-center gap-px font-semibold text-black"
            >
              <EnterIcon width={20} height={20} /> Log In
            </Link>
          </section>
        </section>

        <div className="hidden md:block items-center p-6 w-2/4 h-full bg-gradient-to-r from-black to-neutral-900 rounded-3xl">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
