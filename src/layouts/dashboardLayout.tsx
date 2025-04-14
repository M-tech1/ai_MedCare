import { Outlet } from "react-router";
import { Home, Settings, Menu, X } from "lucide-react";
import { SideNav } from "@/components/nav/sideNav";
import DashboardRightSide from "@/components/DB_rightSideContent";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { FaRocketchat } from "react-icons/fa";
import { MdOutlinePayments } from "react-icons/md";
import { CiMedicalClipboard } from "react-icons/ci";

export function DashboardLayout() {
  const navItems = [
    {
      label: "Dashboard",
      icon: <TbDeviceDesktopAnalytics size={20} />,
      to: "",
    },
    {
      label: "My Appointments",
      icon: <ImProfile size={20} />,
      to: "appointment/",
    },
    {
      label: "Medical Records",
      icon: <CiMedicalClipboard size={20} />,
      to: "/dashboard/medical-records",
    },
    {
      label: "Chat with Doctor",
      icon: <FaRocketchat size={20} />,
      to: "/dashboard/chat",
    },
    {
      label: "Payment",
      icon: <MdOutlinePayments size={20} />,
      to: "/dashboard/payment",
    },
    {
      label: "Notifications",
      icon: <Settings size={20} />,
      to: "/dashboard/notifications",
    },
  ];

  return (
    <>
      <div className=" h-[100vh]  bg-lite flex ">
        <aside>
          <SideNav items={navItems} />
        </aside>
        <div className="bg-lite w-[100vw] overflow-x-auto">
          <Outlet />
        </div>
        <DashboardRightSide />
      </div>
    </>
  );
}
