import DashboardNavbar from "@/app/ui/applicant/dashboard/navmenu";
import Footer from "@/app/ui/footer";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div>
      < DashboardNavbar/>
      
      <div className={`w-full mx-auto`}>{children}</div>
      <Footer/>
    </div>
  );
}