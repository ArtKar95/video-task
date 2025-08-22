import type { Dispatch } from "react";
import { NavLink } from "react-router-dom";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { appRouts } from "@/app/routes/appRoutes";

interface IProps {
  isSidebarHovered: boolean;
  setIsSidebarHovered: Dispatch<boolean>;
}

//As now we don't do any action with bottom menu items, i will map just
//If these items also should have own pages, can be just added in the routs array and will be appear
//with position
const BottomMenuItems = ["Language", "Get Help", "Exit"];

const Sidebar = ({ isSidebarHovered, setIsSidebarHovered }: IProps) => {
  return (
    <div
      className={`bg-black transition-all duration-300 flex flex-col ${
        isSidebarHovered ? "w-[350px]" : "w-[90px]"
      }`}
      onMouseEnter={() => setIsSidebarHovered(true)}
      onMouseLeave={() => setIsSidebarHovered(false)}
    >
      <div className="h-35">
        {isSidebarHovered && (
          <div className="flex items-center gap-3 p-3 mb-6">
            <Avatar
              size={82}
              style={{ backgroundColor: "GrayText" }}
              icon={<UserOutlined />}
            />
            <p className="text-[28px] text-white font-semibold truncate">
              Daniel
            </p>
          </div>
        )}
      </div>

      <div className="flex-1 flex flex-col gap-5 p-2">
        {appRouts
          .filter(({ forSidebar }) => !!forSidebar)
          .map(({ label, path, icon }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `flex items-center h-15 text-center gap-6 p-2 rounded-[12px] transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--color-sidebar-active)]"
                    : "hover:bg-gray-800"
                } ${
                  isSidebarHovered
                    ? "w-auto"
                    : "w-[60px] justify-center align-center rounded-[50%]"
                }`
              }
            >
              <img
                src={icon}
                className="w-8 h-8 p-1 flex-shrink-0"
                alt={label}
              />
              {isSidebarHovered && (
                <p className="text-white text-[32px] truncate">{label}</p>
              )}
            </NavLink>
          ))}
      </div>

      {isSidebarHovered && (
        <div className="flex flex-col gap-3 p-4">
          {BottomMenuItems.map((item) => (
            <Button
              style={{
                background: "inherit",
                border: "none",
              }}
              variant="text"
              disabled
            >
              <span className="text-gray-500 text-[24px] tracking-[5px] w-full text-left">
                {item}
              </span>
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
