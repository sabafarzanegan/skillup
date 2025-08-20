import {
  BadgePlus,
  LayoutDashboard,
  ChartColumnDecreasing,
  FolderGit2,
  Users,
  Settings,
} from "lucide-react";
export const navlinks = [
  { id: 1, name: "خانه", kink: "/" },
  { id: 2, name: "دوره ها", kink: "/courses" },
  { id: 3, name: "سوالات متداول", kink: "/courses" },
];

export const navLinksdashboar = [
  { id: 1, name: "افزودن دوره", href: "/admin/create", icon: BadgePlus },
  { id: 2, name: "دوره ها", href: "/admin/courses", icon: LayoutDashboard },
  { id: 3, name: "آمار", href: "/admin/analytics", icon: ChartColumnDecreasing },
  { id: 4, name: "پروژه ها", href: "/admin/analytics", icon: FolderGit2 },
  { id: 5, name: "تیم", href: "/admin/analytics", icon: Users },
  { id: 6, name: "تنظیمات", href: "/admin/analytics", icon: Settings },
];
