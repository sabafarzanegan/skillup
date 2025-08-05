"use client";
import { useTheme } from "@/provider/theme-provider";
import "./page.module.css";
export default function Home() {
  const { toggleTheme, theme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" ? "تاریک" : "روشن"}
      </button>
    </div>
  );
}
