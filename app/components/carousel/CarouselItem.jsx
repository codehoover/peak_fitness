export default function CarouselItem({title, details, description}){
    return(
        <div className="flex flex-col gap-16 transition ease-in-out">
            <section className="flex flex-col items-center gap-2">
                <h1 className="text-3xl"> {title} </h1>
                <p className="text-xs text-center text-neutral-300"> {details} </p>
            </section>

            <section className="flex rounded-lg bg-neutral-800 p-6 leading-relaxed text-sm">
                <p>
                    {description} 
                </p>
            </section>

            
        </div>
    )
}