import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className="bg-base-200 w-1/5 py-5 px-2 flex flex-col gap-5">
    <div className="bg-base-300 rounded-xl">
      <h1 className="text-center font-bold py-4 text-2xl">Our Store</h1>
    </div>
    <ul className="menu rounded-box ">
      <NavLink className={(nav) => nav.isActive? 'border-l-4 border-primary' : ''} to="/home">
        <li>
          <div>Home</div>
        </li>
      </NavLink>
      <NavLink className={(nav) => nav.isActive? 'border-l-4 border-primary' : ''} to="/product">
        <li>
          <div>Product</div>
        </li>
      </NavLink>
      <NavLink className={(nav) => nav.isActive? 'border-l-4 border-primary' : ''} to="/category">
        <li>
          <div>Category</div>
        </li>
      </NavLink>
      <NavLink className={(nav) => nav.isActive? 'border-l-4 border-primary' : ''} to="/user">
        <li>
          <div>User</div>
        </li>
      </NavLink>
      <NavLink className={(nav) => nav.isActive? 'border-l-4 border-primary' : ''} to="/inbox">
        <li>
          <div>Inbox</div>
        </li>
      </NavLink>
    </ul>
  </nav>
  )
}
