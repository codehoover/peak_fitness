'use client'

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
    FaceIcon} from "@radix-ui/react-icons";
import { useState } from "react";
import Image from "next/image";
import peakLogo from '../assets/peak_icon.png';
import CarouselItem from "../components/carousel/CarouselItem";
import Carousel from "../components/carousel/Carousel";

export default function Login(){
    const [toggle, setToggle] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    return(
        <div className="flex flex-row items-center justify-center w-full h-screen bg-neutral-800 text-white ">
            
            <div className="flex flex-col md:flex-row bg-orange-500 w-4/6 max-w-6xl h-4/6 mx-4 p-6 rounded-3xl ">
            
            <div className="hidden md:block flex items-center p-6 w-2/4 h-full bg-gradient-to-r from-black to-neutral-900 rounded-3xl">
                <Carousel/>
            </div>

            <section className="flex flex-col items-center justify-between h-full md:w-1/3 md:m-auto ">
                        <Image src={peakLogo} width={60} height={60} alt="Peak fitness logo"/>
                        
                        <h1 className="text-4xl font-medium"> Welcome back! </h1>
        
                        <section className="flex flex-row gap-2 justify-between items-center w-full">
                            <button className={ `flex flex-row items-center justify-center gap-px border border-black p-2 rounded-md w-1/2 duration-300 font-medium ${!toggle ? "bg-black" : "bg-transparent text-black"}`}
                            onClick={()=> setToggle(!toggle)}
                            disabled={!toggle}
                            name="User"> 
                                <FaceIcon width={20} height={20}/> User 
                            </button>
                            <button className={ `flex flex-row items-center justify-center gap-px border border-black p-2 rounded-md w-1/2 duration-300 font-medium ${toggle ? "bg-black" : "bg-transparent text-black"}`}
                            onClick={()=> setToggle(!toggle)}
                            disabled={toggle}
                            name="coach">
                                <ClipboardIcon width={20} height={20}/> Coach 
                            </button>
                        </section>

                        { toggle ? 
                        <div className="flex flex-col w-full h-2/5 justify-around transition-h duration-300">
            
                            <div className="flex flex-row items-center gap-2 border-b-2">
                                <PersonIcon width={25} height={25}/>
                                <input
                                className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200" 
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}/>
                            </div>
            
                            <div className="flex flex-row items-center gap-2 border-b-2">
                                <LockClosedIcon width={25} height={25}/>
                                <input
                                className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200" 
                                placeholder="Password"
                                type={isVisible ? "text" : "password"}
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                />
                                <button onClick={()=> setIsVisible(!isVisible)}>
                                    {isVisible ? <EyeOpenIcon/> : <EyeClosedIcon/>}
                                </button>
                            </div>
                        </div>
                        :
                        <div className="flex flex-col w-full h-2/5 transition-h duration-300 justify-around">
            
                            <div className="flex flex-row items-center gap-2 border-b-2">
                                <PersonIcon width={25} height={25}/>
                                <input
                                className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200" 
                                placeholder="Username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}/>
                            </div>
            
                            <div className="flex flex-row items-center gap-2 border-b-2">
                                <LockClosedIcon width={25} height={25}/>
                                <input
                                className="bg-transparent outline-none placeholder-white w-full hover:-translate-y-2 duration-200" 
                                placeholder="Password"
                                type={isVisible ? 'text': 'password' }
                                value={password}
                                onChange={e => setPassword(e.target.value)}/>
                                <button onClick={()=>setIsVisible(!isVisible)} name="password visibility toggle"> 
                                    {isVisible ? <EyeOpenIcon/> : <EyeClosedIcon/>} 
                                </button>
                            </div>
                        </div>
                        }
        
                        
        
                        <button className="bg-neutral-800 rounded-lg p-2 hover:bg-neutral-700 hover:font-semibold duration-300 w-full"
                        name="create account"> 
                            Login
                        </button>

                        <section className="flex flex-col gap-2 items-center text-xs w-full"> 
                            <p className="text-gray-100"> Don't have an account? </p>
                            <span className="flex flex-row w-full items-center justify-center gap-px font-semibold text-black"> <EnterIcon width={20} height={20}/> Sign Up </span>
                             
                        </section>
        
                    </section> 






            </div>

         
        </div>
    )
}