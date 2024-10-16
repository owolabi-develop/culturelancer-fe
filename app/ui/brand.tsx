
export default function LeadingBrand(){

   const brand = ["logo 1","logo 2","logo 3","logo 4","logo 5","logo 6"]


    return (
        <section className="md:grid grid-cols-1 p-20 w-full justify-around">

        <div className="m-5 text-center w-full">
            <h1 className="text-2xl font-bold md:text-4xl block">Trusted by Leading Brands</h1>
        </div>
        <div className="space-y-4 sm:space-y-4 md:space-y-0 md:grid grid-cols-6 rounded text-center items-center p-5 w-full gap-10"> 
            {brand.map((item,index)=>(
                <div key={index} className="bg-[#f1f1f1] rounded py-4">{item}</div>
            ))}
            
        </div>
        <div className="text-center w-full">
            <p className="text-base md:text-lg text-[#d1d0cd]">Trusted by over 1000+ companies worldwide</p>
        </div>
    </section>
    
    )

}