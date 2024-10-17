import { WelcomeNoteHire } from "../ui/section";
import LeadingBrand from "../ui/brand";
import {TopService} from "../ui/oursolutions";
import CommunityEngagement from "../ui/community";
import {HireCta} from "../ui/cta";
import HomeNavbar from "../ui/navbar";
import Footer from "../ui/footer";
import { WorkProcess } from "../ui/oursolutions";


export default function HomePage() {
  return (
    <div className={`w-full mx-auto`}>
      {/* navbar component */}
    <div className=" bg-[#f1f1f1]">
    <HomeNavbar/>
    <WelcomeNoteHire/>
    </div>
      {/* navbar component */}

      {/* leading brands component */}

    <LeadingBrand/>
     {/* leading brands component */}

     {/* how it work component */}
     <WorkProcess/>
      {/* how it work component */}



     {/* our solutions component */}

     <div className=" bg-[#f1f1f1]">
      <TopService/>
   
    </div>
      {/* our solutions component */}



      {/* cta component */}
      <HireCta/>

      {/* cta component */}


      {/* community and engagament */}
      <CommunityEngagement/>


 {/* community and engagament */}

 {/* footer */}
 
 <Footer/>

    </div>
    
  
  );
}
