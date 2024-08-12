"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Peak_img from "../assets/peak_lm.png";
import { useState } from "react";

export default function NavBar() {
  const router = useRouter();
  //reads current urls pathname
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={
        pathname != "/"
          ? "flex flex-row justify-between px-4 bg-neutral-800 border-b border-neutral-700 w-full fixed z-40"
          : "flex flex-row justify-between px-4 bg-transparent w-full fixed z-40"
      }
    >
      <Link
        className="flex flex-row text-orange-500 items-center "
        href="/"
        onClick={() => router.push("/")}
      >
        <Image
          src={Peak_img}
          width={65}
          height={65}
          alt="Peak fitness logo"
          priority
        />
        <h1 className="text-2xl font-light"> Peak Fitness </h1>
      </Link>

      <section className="grid grid-cols-3 gap-4 place-items-center text-orange-500 font-semibold">
        <Link
          href={"/"}
          onClick={() => router.push("/")}
          className={
            pathname == "/"
              ? "hidden sm:block border-b-2 border-orange-500 duration-150"
              : "hidden sm:block hover:-translate-y-0.5 hover:font-normal duration-300 font-light border-none"
          }
        >
          Home
        </Link>

        <Link
          href={"/about"}
          onClick={() => router.push("/about")}
          className={
            pathname == "/about"
              ? "hidden sm:block border-b-2 border-orange-500 duration-150"
              : "hidden sm:block hover:-translate-y-0.5 hover:font-normal duration-300 font-light border-none"
          }
        >
          About
        </Link>

        <Link
          href={"/contact"}
          onClick={() => router.push("/contact")}
          className={
            pathname == "/contact"
              ? "hidden sm:block border-b-2 border-orange-500 duration-150"
              : "hidden sm:block hover:-translate-y-0.5 hover:font-normal duration-300 font-light border-none"
          }
        >
          Contact
        </Link>
      </section>

      <section className="hidden sm:flex flex-row items-center gap-4">
        <Link
          className="text-orange-500 border-2 border-orange-500 p-2 px-4 text-sm rounded-lg font-bold hover:bg-orange-500 hover:text-neutral-800 duration-300"
          href="/login"
        >
          Login
        </Link>

        <Link
          className="bg-orange-500 rounded-lg text-sm font-bold p-2.5 px-4 hover:bg-orange-600 duration-300"
          href="/register"
        >
          Sign Up
        </Link>
      </section>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col sm:hidden justify-center items-center "
      >
        <span
          className={`z-50 bg-orange-500 block transition-all duration-300 ease-out 
                                    h-0.5 w-6 rounded-sm ${
                                      isOpen
                                        ? "rotate-45 translate-y-1"
                                        : "-translate-y-0.5"
                                    }`}
        ></span>

        <span
          className={`z-50 bg-orange-500 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`}
        ></span>

        <span
          className={`z-50 bg-orange-500 block transition-all duration-300 ease-out 
                                    h-0.5 w-6 rounded-sm ${
                                      isOpen
                                        ? "-rotate-45 -translate-y-1"
                                        : "translate-y-0.5"
                                    }`}
        ></span>
        <nav
          className={
            isOpen
              ? "flex flex-col items-start gap-2 w-52 h-48 px-6 pt-4 rounded-md opacity-100 absolute right-2 top-2 bg-black text-orange-500 font-semibold transition-all duration-300 ease-out z-40"
              : "transition-all opacity-0 duration-300 ease-out z-40 hidden"
          }
        >
          <Link
            href={"/"}
            onClick={() => router.push("/")}
            className={"duration-300 border-none z-50"}
          >
            Home
          </Link>

          <Link
            href={"/about"}
            onClick={() => router.push("/about")}
            className={"duration-300 border-none z-50"}
          >
            About
          </Link>

          <Link
            href={"/contact"}
            onClick={() => router.push("/contact")}
            className={"duration-300 border-none z-50"}
          >
            Contact
          </Link>

          <Link
            href={"/login"}
            onClick={() => router.push("/login")}
            className={" duration-300 border-none z-50"}
          >
            Login
          </Link>

          <Link
            href={"/register"}
            onClick={() => router.push("/register")}
            className={"duration-300 border-none z-50"}
          >
            Sign Up
          </Link>
        </nav>
      </button>
    </nav>
  );
}
