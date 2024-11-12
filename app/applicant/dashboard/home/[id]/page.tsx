import { SkillTraits } from "@/app/ui/applicant/dashboard/sections";
import Cookies from "js-cookie";


export default function DashboardsDetails() {
  console.log(Cookies.get("user_id_item"))
  return (
    <>
      {/* navbar component */}
      {/* <DashboardNavbar/> */}
      
      <SkillTraits/>
   

 {/* footer */}
 
 {/* <Footer/> */}

    </>
    
  
  );
}
