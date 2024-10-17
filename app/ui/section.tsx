import Link from 'next/link'

export  function WelcomeNote(){

    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

        <div className="m-2 text-center w-full">
            <h1 className="text-4xl font-bold md:text-6xl block">Welcome to CultureLancer.</h1>
            <h2 className="text-lg md:text-2xl text-[#d1d0cd] mt-4">
                Please complete the following assessments to help us match you with the best job opportunities.
            </h2>
        </div>

        <div className="text-center space-x-4 py-8">
           <Link href="/hire"> <button className=" bg-black text-white rounded py-3 px-5">I want to Hire</button></Link>
           <Link href="/work"><button className="rounded py-3 px-5 text-black bg-white border border-current"> I want to Work</button></Link>
        </div>

        <div className="rounded bg-[#cccbc8] text-center py-20 w-full"> main-visual-placeholder</div>
    </section>
    
    )

}




export  function WelcomeNoteHire(){

    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

        <div className="m-2 text-center w-full">
            <h1 className="text-4xl font-bold md:text-6xl block">Unlock Continuous Growth Beyond the Accelerator</h1>
            <h2 className="text-lg md:text-2xl text-[#d1d0cd] mt-4">
               Connect with top talent and accelerate your startup`s success
            </h2>
        </div>

        <div className="text-center space-x-4 py-8">
            <button className=" bg-black text-white rounded py-3 px-5">Get Started</button>
           
        </div>

    </section>
    
    )

}


export  function WelcomeNoteWork(){

    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

        <div className="m-2 text-center w-full">
            <h1 className="text-4xl font-bold md:text-6xl block">Culturelancer: Connecting College Student with Employer</h1>
            <h2 className="text-lg md:text-2xl text-black mt-4">
              Find your Dream internship or job opportunity today
            </h2>
        </div>

        <div className="text-center space-x-4 py-8">
            <button className=" bg-black text-white rounded py-3 px-5">Sign Up Now</button>
           
        </div>

    </section>
    
    )

}

