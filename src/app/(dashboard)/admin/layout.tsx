import Sidebar from "@/components/main/dashboard/sidebar/Sidebar";
import { ReactNode } from "react";
import "./dashlayout.css";
function layout({ children }: { children: ReactNode }) {
  return (
    <section className="dashboard-layout">
      {/* sidebar */}
      <Sidebar />
      <main className="dashboard-container">{children}</main>
    </section>
  );
}

export default layout;
