import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  let navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [showAlert, setAlert] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault()
    await signInWithEmailAndPassword(auth, e.target[0].value, e.target[1].value)
    .then((res) => {
      localStorage.setItem("token", res.user.accessToken);
      navigate('/home')
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setAlert(true)
        if (setAlert) {
          setTimeout(() => {
            setAlert(false)
          },5000)
        }
      });
  };
  return (
    <div className="flex justify-center my-20">
      <form onSubmit={handleLogin} className="flex flex-col gap-5">
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
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
      {showAlert ? (
        <div className="alert alert-error shadow-lg fixed bottom-10 right-10 w-fit cursor-pointer" onClick={()=>setAlert(!showAlert)}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{errorMsg}</span>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
