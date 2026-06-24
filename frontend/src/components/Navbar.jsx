import { TopNav } from "./Navbar/Offer";
import { SecondaryNav } from "./Navbar/SourceLink";
import { MainNavbar } from "./Navbar/Thirdone";
import { DropDownNav } from "./Navbar/DropDown";

export const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-40 bg-white backdrop-blur-md">
        <TopNav />
        <SecondaryNav />
        <MainNavbar />
        <DropDownNav />
      </nav>
    </>
  );
};
