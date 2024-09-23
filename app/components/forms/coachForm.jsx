"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
    LockClosedIcon,
    EnvelopeClosedIcon,
    LetterCaseCapitalizeIcon,
    PersonIcon,
    BackpackIcon,
    EyeClosedIcon,
    EyeOpenIcon,
  } from "@radix-ui/react-icons";


export default function CoachForm(){
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    //react form submission
    const {
      register,
      reset,
      formState: { errors },
      handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        try { 
            const response = await fetch("/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),

            });
            if (response.ok) {
                router.push("/login");
                reset();
            }else{
                console.error("REGISTRATION FAILED")
            }
        } catch(error) {
            console.error("Error", error);
        }

    };

    const role = {...register("role", {value: 'COACH'})}

    return(
        <form className="flex flex-col w-full h-3/6 justify-between transition-h duration-300"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row items-center gap-2 border-b-2 ">
          <LetterCaseCapitalizeIcon width={25} height={25} />
          <input
            className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
            placeholder="Full Name"
            {...register("name", {required: true})}
            aria-invalid={errors.name ? "true" : "false"}
          />
        </div>

        <div className="flex flex-row items-center gap-2 border-b-2 ">
          <EnvelopeClosedIcon width={25} height={25} />
          <input
            className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200"
            placeholder="Business Email"
            {...register("email", {required: true})}
            aria-invalid={errors.email ? "true" : "false"}
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
        <button
          className="bg-neutral-800 rounded-lg p-2 hover:bg-neutral-700 hover:font-semibold duration-300 w-full"
          name="create account"
          type="submit"
        >
          Create account
        </button>
      </form>
    )
}