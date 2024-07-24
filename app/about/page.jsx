export default function About(){
    return(
        <div className="grid grid-rows-4 sm:px-6 pt-48 h-screen bg-neutral-800 text-white overflow-hidden">

            <section className="flex flex-col items-end gap-12 w-2/6">
                <h1 className="text-5xl font-bold text-orange-500"> 
                    Everthing you need to achieve your goals 
                </h1>

                <p className="font-semibold w-5/6"> 
                    Welcome to Peak. A fitness app dedicated to 
                    providing an accessible, comprehensive, and user-friendly platform
                    for all fitness enthusiasts. Our mission is to create a platform
                    which enables users to acheve their health and fitness goals without
                    financial barriers. With no paywalls and a donation-based model, Peak 
                    ensures that everyone has access to essential features like customizable 
                    workout plans, real-time tracking, and a robust communication hub for coaches and personal trainers. 
                    Join us in our journey to make fitness accessible to all, and let's reach new heights together!
                </p>
            </section>
            <section></section>
            <section></section>

            <section className="flex flex-row items-center justify-center text-orange-500 gap-10">
                <div className="w-48 h-48 border-orange-500 border rounded-lg">
                    <p> Routine Builder </p>
                </div>
                <div className="w-48 h-48 border-orange-500 border rounded-lg">
                    <p> Communication hub </p>
                </div>
                <div className="w-48 h-48 border-orange-500 border rounded-lg">
                    <p> Real-time tracking </p>
                </div>
            </section>

        </div>
    )
}