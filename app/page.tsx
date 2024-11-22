import { WelcomeNote } from "./ui/section";
import LeadingBrand from "./ui/brand";
import { OurSolutions } from "./ui/oursolutions";
import CommunityEngagement from "./ui/community";
import { Cta } from "./ui/cta";
import HomeNavbar from "./ui/navbar";
import Footer from "./ui/footer";

export default function HomePage() {
  return (
    <div className={`w-full mx-auto`}>
      {/* navbar component */}
      <div className=" bg-[#f1f1f1]">
        <HomeNavbar />
        <WelcomeNote />
      </div>
      {/* navbar component */}

      {/* leading brands component */}

      <LeadingBrand />
      {/* leading brands component */}

      {/* our solutions component */}

      <div className=" bg-[#f1f1f1]">
        <OurSolutions />
      </div>
      {/* our solutions component */}

      {/* cta component */}
      <Cta />

      {/* cta component */}

      {/* community and engagament */}
      <CommunityEngagement />

      {/* community and engagament */}

      {/* footer */}

      <Footer />
    </div>
  );
}
