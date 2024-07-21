import { useState } from "react";
import CarouselItem from "./CarouselItem";

export default function Carousel(){
    const [num, setNum] = useState(0);
    
    const [items, setItems] = useState([
        <CarouselItem 
        title={'Customizable Plans'}
        details={'Tailored workouts and nutrition advice based on your goals.'}
        description={"Import your own routine or get us to create one for you! Whether you're looking to switch over or start your fitness journey we are here to support you!"}/>,
        <CarouselItem
        title={"Communication hub"}
        details={'Keep all of your work and clients on one platform'}
        description={"Centralize your coaching on one platform for seamless client interactions and enhanced relationships."}/>,
        <CarouselItem
        title={"Real time tracking"}
        details={"See your progress in real time"}
        description={"Montior your progress from workout to workout to ensure you are meeting your goals!"}/>
    ])


    return( 
        <div className="grid grid-rows-1 items-center h-full">
            <section >
                {items[num]}
            </section>


            <section className="flex w-full justify-center items-center gap-4 ">
                <button
                className={`flex items-center justify-center border w-2 h-2 rounded-full border-white hover:bg-white duration-300 ${num == 0 ? 'bg-white animate-bounce' : 'bg-transparent'}`}
                onClick={()=>setNum(0)}> </button>
                <button
                 className={`flex items-center justify-center border w-2 h-2 rounded-full border-white hover:bg-white duration-300 ${num == 1 ? 'bg-white animate-bounce' : 'bg-transparent'}`}
                onClick={()=>setNum(1)}>  </button>
                <button
                 className={`flex items-center justify-center border w-2 h-2 rounded-full border-white hover:bg-white duration-300 ${num == 2 ? 'bg-white animate-bounce' : 'bg-transparent'}`}
                onClick={()=>setNum(2)}>  </button>
            </section>

        </div>
    )

}