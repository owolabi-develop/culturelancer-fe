import SettingsNavbar from "@/app/ui/applicant/profile-settings/navbar";
import SideBar from "@/app/ui/applicant/profile-settings/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SettingsNavbar />
      <div className="flex md:flex-row">
        <SideBar />
        <div className="w-full py-8 pl-8 h-[calc(100vh-80px)] overflow-x-hidden overflow-y-auto bg-[#e5e7eb7d]">
          {children}
        </div>
      </div>
    </div>
  );
}
