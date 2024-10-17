import { WelcomeNoteWork } from "../ui/section";
// import {FocusArea} from "../ui/oursolutions";
import CommunityEngagement from "../ui/community";
import {WorkCta} from "../ui/cta";
import HomeNavbar from "../ui/navbar";
import Footer from "../ui/footer";


export default function Work() {
  return (
    <div className={`w-full mx-auto`}>
      {/* navbar component */}
    <div className=" bg-[#f1f1f1]">
    <HomeNavbar/>
    <WelcomeNoteWork/>
    </div>
      {/* navbar component */}

      {/* cta component */}
      <WorkCta/>

      {/* cta component */}


      {/* community and engagament */}
      <CommunityEngagement/>


 {/* community and engagament */}

 {/* footer */}
 
 <Footer/>

    </div>
    
  
  );
}
