import SettingsNavbar from "@/app/ui/applicant/profile-settings/navbar";
import SideBar from "@/app/ui/applicant/profile-settings/sidebar";
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SettingsNavbar />

      <div className="flex md:flex-row">
        <div className="md:w-[30%] w-full ">
          <SideBar />
        </div>
        <div className="w-full">{children}</div>
      </div>


    </div>
 
  );
}