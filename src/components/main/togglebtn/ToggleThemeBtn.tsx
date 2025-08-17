"use client";
import { Button } from "@/components/ui/Button/Button";
import "./togglethemebtn.css";
import { useTheme } from "@/provider/theme-provider";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";
function ToggleThemeBtn() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="toggle-theme-container">
      <Button onClick={toggleTheme} className="toggle-theme-btn" variant="default">
        {theme === "dark" ? <GoSun /> : <FaRegMoon />}
      </Button>
    </div>
  );
}

export default ToggleThemeBtn;
