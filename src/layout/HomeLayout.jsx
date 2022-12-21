import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function HomeLayout({ children }) {
  let location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname) {
      setActiveLink("bordered");
    }
  }, []);
  return (
    <div className="flex min-h-screen">
        <Sidebar/>
      <div className="p-5 flex flex-col w-full">
        <Navbar location={location.pathname}/>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
}
