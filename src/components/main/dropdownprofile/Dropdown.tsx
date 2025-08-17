"use client";
import { createPortal } from "react-dom";
import { useState, useTransition } from "react";
import "./dropdown.css";
import { LogOut, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button/Button";
import Link from "next/link";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/ui/Loader/Loader";

function Dropdown() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const navlinks = [
    { id: 1, name: "داشبورد", href: "/" },
    { id: 2, name: "دوره های من", href: "/" },
    { id: 3, name: "تدریس کنید", href: "/" },
  ];
  const signOutHandler = () => {
    try {
      startTransition(async () => {
        await authClient.signOut();
        toast.success("خروج شما از حساب کاربری با موفقیت انجام شد");
        router.refresh();
        setOpen((prev) => !prev);
      });
    } catch {
      toast.error("خطا!دوباره تلاش کنید");
    }
  };
  return (
    <div className="dropdown">
      <Button className="trigger-btn" variant="default" onClick={() => setOpen((prev) => !prev)}>
        <UserRound className="user-dropdown-icon" />
      </Button>

      {open &&
        createPortal(
          <div className="dropdown-content">
            <div className="dropdown-content-header">
              {navlinks.map((link) => (
                <div key={link.id} className="dropdown-link">
                  <Link href={link.href}>{link.name}</Link>
                </div>
              ))}
            </div>
            <div className="dropdown-content-footer">
              <div onClick={signOutHandler} className="logout-container">
                <LogOut className="logout-icon" />
                <span>{isPending ? <Loader variant="outline" /> : "خروج از حساب کاربری"} </span>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

export default Dropdown;
