import Subscribe from "./Subscribe";
import { Button } from "./ui/button";
import image from "../assets/company-logo.jpg";

const Navbar = () => {
  return (
    <nav id="navbar" className="bg-slate-900 text-white fixed w-full">
      <div className="mx-auto">
        <div className="flex items-center h-16 px-8">
          <div className="flex-shrink-0">
            <img className="h-16 w-16" src={image} alt="Logo" />
          </div>
          <div className="hidden md:block ml-auto">
            <div className="flex">
              <NavbarLink>Projects</NavbarLink>
              <NavbarLink>About Us</NavbarLink>
              <NavbarLink>Investigations</NavbarLink>
              <NavbarLink>Tabs</NavbarLink>
              <NavbarLink>RSS</NavbarLink>
              <Subscribe />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavbarLink = ({ children }: any) => {
  return (
    <Button variant="link" className="text-sm font-medium text-inherit"><p className="nofont saira">{children}</p></Button>
  );
};

export default Navbar;
