import React from 'react'
import { useNavigate } from 'react-router-dom'
import {signOut} from 'firebase/auth'
import { auth } from '../firebase'

export default function Navbar({location}) {
  const navigate = useNavigate()

  const handleLogout = async () => {
    localStorage.removeItem('token')
    navigate('/')
    // await signOut(auth).then((res) => {
    //   console.log(res)
    // })
  }

  return (
    <div className="navbar bg-base-300 rounded-xl px-5">
    <div className="flex-1">
      <div onClick={()=>navigate(-1)} className="btn btn-ghost text-xl capitalize">
        {'< '+ location.substring(1)}
      </div>
    </div>
    <div className="flex gap-5">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <div>An order has received</div>
          </li>
          <li>
            <div>Mr. Kowalski give a comment</div>
          </li>
          <li>
            <div>Mr. Skyper like a product</div>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <div>Profile</div>
          </li>
          <li>
            <div>Settings</div>
          </li>
          <li>
            <div onClick={handleLogout}>Logout</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
