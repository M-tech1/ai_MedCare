import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <div className="w-[full] h-[100vh] ">
        <div className=" w-full">
          <NavBar />
        </div>
        <div className="">
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
}
