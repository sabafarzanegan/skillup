"use client";
import { navLinksdashboar } from "@/app/lib/helper";
import "./sidebar.css";
import Link from "next/link";
import Logo from "../../logo/Logo";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Sidebar() {
  const pathname = usePathname();
  const [isClosed, setIsclosed] = useState(false);

  const toggleSidebar = () => {
    setIsclosed((prev) => !prev);
  };
  return (
    <nav id="sidebar" className={isClosed ? "close" : ""}>
      <ul>
        <li>
          <Logo />
          <button id="sidebar-toggle" className="" onClick={toggleSidebar}>
            <ChevronLeft className={`sidebar-toggle-icon ${isClosed ? "rotate" : ""}`} />
          </button>
        </li>
        {navLinksdashboar.map((link) => (
          <li key={link.id}>
            <Link href={link.href} className={`${pathname.includes(link.href) ? "active" : ""}`}>
              <link.icon className="link-icon" />
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
