import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <div className="flex h-screen">
      <Sidebar
        isSidebarHovered={isSidebarHovered}
        setIsSidebarHovered={setIsSidebarHovered}
      />

      <div
        className={`flex-1 p-4 overflow-y-auto transition-all duration-300  ${
          isSidebarHovered ? "bg-black/80" : "bg-transparent"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
