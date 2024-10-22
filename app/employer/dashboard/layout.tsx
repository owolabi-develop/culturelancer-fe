import Footer from "@/app/ui/footer";
import DashboardNavbar from "@/app/ui/employer/dashboard/navbmenu";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div>
      < DashboardNavbar/>
      
      <div className={`w-full mx-auto`}>{children}</div>
      <Footer/>
    </div>
  );
}