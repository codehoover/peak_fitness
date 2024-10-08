"use client";
import {
  ClipboardIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import Accordion from "../components/Accordion";
import { useState } from "react";

export default function Contact() {
  const [role, setRole]= useState('');

  return (
    <div className="flex flex-col pt-28 bg-neutral-800 p-6 h-full text-white">
      <section className="flex flex-col text-left sm:text-center sm:items-center gap-2 mb-12">
        <h1 className="text-5xl font-medium"> Contact Us </h1>
        <p className="text-gray-300 sm:w-3/6 ">
          Have any questions about our platform? We're here to help. Send a
          message to us and we'll be sure to get back to you quickly!
        </p>
      </section>

      <section className="flex flex-row items-center justify-center xl:gap-24">
        <form className="flex flex-col gap-4 pb-6">
          <section className="flex flex-col sm:flex-row gap-6">
            <div className="w-full">
              <p className="text-sm font-semibold">First name</p>
              <input
                className="bg-transparent border border-neutral-500 focus:border-orange-500 rounded-sm p-1 min-w-40 sm:w-full focus:outline-none"
                placeholder="First name"
              />
            </div>

            <div className="w-full">
              <p className="text-sm font-semibold">Last name</p>
              <input
                className="bg-transparent border border-neutral-500 focus:border-orange-500 rounded-sm p-1 min-w-40 sm:w-full focus:outline-none"
                placeholder="Last name"
              />
            </div>
          </section>

          <section className="min-w-80">
            <p className="text-sm font-semibold">Email</p>
            <input
              className="bg-transparent border border-neutral-500 focus:border-orange-500 rounded-sm p-1 min-w-80 sm:min-w-full focus:outline-none"
              placeholder="johndoe@example.com"
            />
          </section>

          <section className="flex flex-col justify-center gap-2">
            <button
              className={role == 'COACH' 
                ? "flex flex-row gap-2 text-sm w-full p-2 text-left border rounded-md border-orange-500 duration-300"
                : "flex flex-row gap-2 text-sm w-full p-2 text-left border border-neutral-500 rounded-md hover:border-orange-500 duration-300"
              }
              type="button"
              onClick={()=>setRole('COACH')}
            >
              <ClipboardIcon width={30} height={30} />

              <section>
                I am a Coach
                <p className="text-neutral-300 text-xs">
                  I use the platform for coaching
                </p>
              </section>
            </button>

            <button
              className={role == 'CLIENT' 
                ? "flex flex-row gap-2 text-sm w-full p-2 text-left border rounded-md border-orange-500 duration-300"
                : "flex flex-row gap-2 text-sm w-full p-2 text-left border border-neutral-500 rounded-md hover:border-orange-500 duration-300"
              }
              type="button"
              onClick={()=>setRole('CLIENT')}
            >
              <PersonIcon width={30} height={30} />
              <section>
                I am a User/Client
                <p className="text-neutral-300 text-xs">
                  I use the platform personally/with a coach.
                </p>
              </section>
            </button>
          </section>

          <section>
            <p className="text-sm font-semibold">Message</p>
            <textarea
              className="bg-transparent border border-neutral-500 focus:border-orange-500 rounded-sm p-1 min-w-80 w-full sm:h-40 focus:outline-none"
              placeholder="Leave us a message..."
            />
          </section>

          <button className="bg-orange-500 p-2 min-w-80 w-full rounded-md text-sm hover:font-semibold hover:bg-orange-600 duration-300">
            Get in touch
          </button>
        </form>

        <section className="hidden xl:flex sm:flex-col sm:w-1/6 sm:gap-16">
          <div>
            <h1 className="font-semibold"> Customer Support</h1>
            <p className="text-gray-300">
              Our support team is available to address any concerns or queries
              you may have.
            </p>
          </div>

          <div>
            <h1 className="font-semibold"> Feedback and Suggestions </h1>
            <p className="text-gray-300">
              We value your feedback and are continously working to improve
              Peak. Your input is crucial in shaping the future of Peak.
            </p>
          </div>

          <div className="flex flex-row gap-6 justify-center">
            <Link
              href="https://www.linkedin.com/company/peak-fitness-app"
              target="_blank"
            >
              <LinkedInLogoIcon
                width={35}
                height={35}
                className="hover:text-orange-500 hover:-translate-y-2 duration-300"
              />
            </Link>

            <Link href="mailto: esaurahim@gmail.com">
              <EnvelopeClosedIcon
                width={35}
                height={35}
                className="hover:text-orange-500 hover:-translate-y-2 duration-300"
              />
            </Link>
          </div>
        </section>
      </section>

      <section className="sm:px-48 mb-14">
        <h1 className="text-5xl font-medium"> FAQ </h1>
        <h1 className="text-sm text-gray-300">
          Quick answers to questions you may have. Can't find what you're
          looking for? Fill out the form above to contact us!
        </h1>
        <Accordion />
      </section>
    </div>
  );
}
