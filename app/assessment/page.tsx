
import HomeNavbar from "../ui/navbar";
import Footer from "../ui/footer";
import ApplicantAssessment from "../ui/assessment";


export  default async function HomePage() {

  return (
    <div className={`w-full mx-auto`}>
      {/* navbar component */}
    <div className=" bg-[#f1f1f1]">
    <HomeNavbar/>
    </div>
      {/* assessment form */}
      <ApplicantAssessment/>
    {/* assessment form */}
    
 {/* footer */}
 
 <Footer/>

    </div>
    
  
  );
}
