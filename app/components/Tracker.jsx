'use client';
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js";
import { useState } from "react";
import { DoubleArrowLeftIcon, ThickArrowLeftIcon } from "@radix-ui/react-icons";

export default function Tracker(){
    const [currentWeight, setCurrentWeight] = useState(0);
    const [goalWeight, setGoalWeight] = useState(0);
    const [metric, setMetric] = useState('lbs')
    const [isActive, setIsActive] = useState(false)
    const [num, setNum] = useState(0);

    const handlePounds = () =>{
        setCurrentWeight(currentWeight * 2.205)
        setIsActive(!isActive)
        setMetric('lbs')
    }
    const handleKilo = () => {
        setCurrentWeight(currentWeight / 2.205)
        setIsActive(!isActive)
        setMetric('kgs')
    }

    const initScreen = () =>{
        return(
            <div>
                
                <section className="text-center text-white w-full">
                <h1 className="font-semibold text-2xl "> What is your current weight? </h1>
                <input
                className="flex flex-row bg-transparent text-center text-5xl outline-none w-full"
                value={Number(currentWeight)}
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
        
            </div>
        )
    }

    const targetWeight = () =>{
        return(
            <div className="text-white w-full p-2">
                <button
                className="pl-2"
                onClick={() => setNum(num-1)}> 
                    <DoubleArrowLeftIcon width={25} height={25}/> 
                </button>               
                <section className="text-center">

                    <h1 className="font-semibold text-2xl"> Do you have a goal weight? </h1>
                    <p className="text-xs"> If not you can skip this section </p>
                </section>
                
                <input
                className="flex flex-row bg-transparent text-center text-5xl outline-none w-full" 
                value={Number(goalWeight)}
                onChange={e => setGoalWeight(e.target.value)}/>
    
            </div>
        )

    }

    const auditScreen = () => {
        return(
            <div className="text-white w-full p-2">

                <button
                className="pl-2"
                onClick={() => setNum(num-1)}> 
                    <DoubleArrowLeftIcon width={25} height={25}/> 
                </button>

                <div className="flex flex-col items-center justify-center">

                    <h1 className="text-xl mb-2"> My progress </h1>

                    <section className="grid grid-cols-3 gap-2">
                        <div className=" flex flex-col items-center bg-orange-500 px-6 py-4 max-w-48 rounded-sm text-2xl">
                            {currentWeight + metric}
                            <p className="text-sm"> Current </p>
                        </div>

                        <div className=" flex flex-col items-center bg-orange-500 px-6 py-4 rounded-sm text-2xl">
                            {goalWeight + metric}
                            <p className="text-sm"> Goal </p>
                        </div>

                        <div className=" flex flex-col items-center bg-orange-500 px-6 py-4 rounded-sm text-2xl">
                            {Math.abs(Number(currentWeight-goalWeight)) + metric}
                            <p className="text-sm"> Left </p>
                        </div>
                    </section>

                </div>

            </div>
        )
    }

    const contentDisplay = [initScreen(),targetWeight(), auditScreen()]

    return(
        <div className="flex flex-col gap-10 items-center bg-neutral-800 pb-10 w-full transition-h duration-300">

            {contentDisplay[num]}

            <button className="p-2 min-w-1/12 rounded-lg bg-black text-white hover:bg-neutral-900 hover:font-semibold duration-300"
            onClick={() => setNum(num + 1)}> 
                Continue 
            </button>
        </div>
    )

}