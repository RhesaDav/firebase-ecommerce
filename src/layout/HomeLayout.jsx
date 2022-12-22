import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function HomeLayout({ children }) {
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem('token')) {
      navigate('/')
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
