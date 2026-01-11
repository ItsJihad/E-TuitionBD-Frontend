import { use, useState } from "react";
import { Link } from "react-router";
import UseAuth from "../../hooks/UseAuth";

function Headerbar() {
 const {currentUser,LoggOut} = UseAuth()
 const [user,SetUser]=useState(null)
 const signut=()=>{
   LoggOut()
  }
  return (
    <div className="navbar bg-base-100 px-20 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <Link to={"/"}> Home </Link>
            <Link to={"/tuitions"}> Tuitions </Link>
            <Link to={"/tutors"}> Tutors </Link>
            <Link to={"/about"}> About </Link>
            <Link to={"/contact"}> Contact </Link>
          </ul>
        </div>
        <Link to={"/"} className=" font-bold text-2xl p-5">
          e-TuitionBD
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 font-bold ">
          <Link
            className="hover:bg-[#422ad5] rounded-xl p-2 hover:text-white"
            to={"/"}
          >
          
            Home 
          </Link>
          <Link
            className="hover:bg-[#422ad5] rounded-xl p-2 hover:text-white"
            to={"/tuitions"}
          >
           
            Tuitions 
          </Link>
          <Link
            className="hover:bg-[#422ad5] rounded-xl p-2 hover:text-white"
            to={"/tutors"}
          >
           
            Tutors 
          </Link>
          <Link
            className="hover:bg-[#422ad5] rounded-xl p-2 hover:text-white"
            to={"/about"}
          >
             
            About 
          </Link>
          <Link
            className="hover:bg-[#422ad5] rounded-xl p-2 hover:text-white"
            to={"/contact"}
          >
            Contact 
          </Link>
        </ul>
      </div>
      <div className="navbar-end gap-3">

        {

          currentUser?(<div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            src={currentUser.photoURL?currentUser.photoURL :("https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp")} />
        </div>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            {/* <span className="badge">{currentUser.displayName?currentUser.displayName:"Google User"}</span> */}
          </a>
        </li>
        <li><a>Settings</a></li>
        <li onClick={signut} ><a>Logout</a></li>
      </ul>
    </div>
  ):(<Link to={"/signin"} className="btn">Get Started</Link>)

        }
        {/* <Link to={"/signin"} className="btn">Get Started</Link> */}
      </div>
    </div>
  );
}

export default Headerbar;
