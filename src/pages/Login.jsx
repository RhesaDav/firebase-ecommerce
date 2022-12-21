import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    let navigate = useNavigate()
  return (
    <div className="flex justify-center my-20">
    <div className="flex flex-col gap-5">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text w-56">Your Email</span>
        </label>
        <label className="input-group">
          <span className="w-28">Email</span>
          <input
            type="text"
            placeholder="info@site.com"
            className="input input-bordered w-64"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your Password</span>
        </label>
        <label className="input-group">
          <span className="w-28">Password</span>
          <input
            type="password"
            placeholder="input your password"
            className="input input-bordered w-64"
          />
        </label>
      </div>
      <div className="flex justify-center">
        <button onClick={()=> navigate('/home')} className="btn">Login</button>
      </div>
    </div>
  </div>
  )
}
