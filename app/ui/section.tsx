
export default function WelcomeNote(){

    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

        <div className="m-2 text-center w-full">
            <h1 className="text-4xl font-bold md:text-6xl block">Welcome to CultureLancer.</h1>
            <h2 className="text-lg md:text-2xl text-[#d1d0cd] mt-4">
                Please complete the following assessments to help us match you with the best job opportunities.
            </h2>
        </div>

        <div className="text-center space-x-4 py-8">
            <button className=" bg-black text-white rounded py-3 px-5">I want to Hire</button>
            <button className="rounded py-3 px-5 text-black bg-white border border-current"> I want to Work</button>
        </div>

        <div className="rounded bg-[#cccbc8] text-center py-20 w-full"> main-visual-placeholder</div>
    </section>
    
    )

}