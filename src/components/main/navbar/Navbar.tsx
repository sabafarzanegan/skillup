import { navlinks } from "@/app/lib/helper";
import Logo from "../logo/Logo";
import "./navbar.css";
import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";
import ToggleThemeBtn from "../togglebtn/ToggleThemeBtn";
import Dropdown from "../dropdownprofile/Dropdown";
import { auth } from "../../../../auth";
import { headers } from "next/headers";
import Shoppingcart from "../shoppingcart/ShoppingCart";

async function Navbar() {
  const session = await auth.api.getSession({ headers: await headers() });
  return (
    <header className="header-container">
      {/* logo and navlinks */}
      <div className="navlinks-logo">
        <Logo />
        <nav className="nav-container">
          {navlinks.map((link) => (
            <Link href={link.kink} key={link.id} className="body-sm">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      {/* theme toggle and userdropdown or login btn */}
      <div className="theme-container">
        {session?.user.id ? (
          <Dropdown />
        ) : (
          <Button className="login-btn-navbar" variant="secondary">
            <Link href="/login">ورود</Link>
          </Button>
        )}
        <ToggleThemeBtn />
        <Shoppingcart />
      </div>
    </header>
  );
}

export default Navbar;
