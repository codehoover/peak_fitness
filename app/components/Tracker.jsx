'use client';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import { useState } from "react";


export default function Tracker(){
    const [currentWeight, setCurrentWeight] = useState(0);
    const [isActive, setIsActive] = useState(false)
    let conversion = 0;

    const handlePounds = () =>{
        Number(setCurrentWeight(currentWeight * 2.205)).toFixed(2)
        setIsActive(!isActive)
    }
    const handleKilo = () => {
        Number(setCurrentWeight(currentWeight / 2.205)).toFixed(2)
        setIsActive(!isActive)
    }

    return(
        <div className="flex flex-col gap-10 items-center bg-neutral-800 pb-10 ">

            <section className="text-center text-white">
                <h1 className="font-semibold text-xl"> What is your current weight? </h1>
                <input
                className="flex flex-row bg-transparent text-center text-3xl"
                value={currentWeight}
                onChange={e => setCurrentWeight(e.target.value)}
                />
            </section>


            <section className="flex flex-row justify-center w-full p-2">
                <button className={`flex items-center justify-center bg-black text-white p-2 rounded-l-lg w-28 ${isActive ? "":"bg-orange-500 font-bold duration-300" }`}
                onClick={()=>handlePounds()}
                disabled={!isActive}> LB </button>
                <button className={`flex items-center justify-center bg-black text-white p-2 rounded-r-lg w-28 ${isActive ? "bg-orange-500 font-bold duration-300":"" }`}
                onClick={()=>handleKilo()}
                disabled={isActive}> KG </button>
            </section>

            <button className="p-2 w-1/12 rounded-lg bg-black text-white hover:bg-neutral-900 hover:font-semibold duration-300"> Continue </button>
        </div>
    )

}