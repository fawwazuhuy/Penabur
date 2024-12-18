"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NavbarWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const excludedPaths = ["/LoginRegister/Register", "/LoginRegister/Login"];

  return (
    <>
      {!excludedPaths.includes(pathname) && <Navbar />}
      {children}
      {!excludedPaths.includes(pathname) && <Footer />}
    </>
  );
};

export default NavbarWrapper;
