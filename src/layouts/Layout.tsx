import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function MainLayout() {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <div className="flex h-screen w-full">
      <Sidebar
        isSidebarHovered={isSidebarHovered}
        setIsSidebarHovered={setIsSidebarHovered}
      />

      <div
        className={`flex-1 overflow-y-auto transition-all duration-300 bg-black/100 text-white ${
          isSidebarHovered ? "opacity-60" : "opacity-100"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
}
