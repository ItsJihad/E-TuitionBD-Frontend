import {
  Bolt,
  BookOpen,
  CreditCard,
  House,
  LayoutDashboard,
  LogOut,
  NotebookPen,
  School,
} from "lucide-react";
import React from "react";
import { Link } from "react-router";

function Sidebar({ outlet }) {
  const date = new Date(8.64e15).toString();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}

        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4"> <Link to={"/"} className="flex items-center justify-center gap-2">
            <img src={'/assets/favicon.png'} className="h-8 w-8"/>
            <span className="is-drawer-close:hidden font-bold">E-Tuition BD</span> 
        </Link></div>
        </nav>
        {/* Page content here */}
        <div className="p-4">{outlet}</div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        
        <div className="flex min-h-full flex-col items-center pt-15 bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
   <Link to={"/"} className="flex items-center justify-center gap-2">
            <img src={'/assets/favicon.png'} className="h-8 w-8"/>
            <span className="is-drawer-close:hidden font-bold">E-Tuition BD</span> 
        </Link>
          <ul className=" menu gap-3 font-light">
          
            <li>
              <Link   to={"/"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
         
                <House></House>
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/students'}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Dashboard"
              >
             
                <LayoutDashboard></LayoutDashboard>
                <span className="is-drawer-close:hidden">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link  to={'/dashboard/my-tuition'}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Tuitions"
              >
 
                <BookOpen></BookOpen>
                <span className="is-drawer-close:hidden">My Tuitions</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/post-tuition'}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Post Tuition"
              >
     
                <NotebookPen></NotebookPen>
                <span className="is-drawer-close:hidden">Post Tuition</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/applied-tutors'}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Applied Tutors"
              >
            
                <School></School>
                <span className="is-drawer-close:hidden">Applied Tutors</span>
              </Link>
            </li>
            <li>
              <Link to={'/dashboard/payments'}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Payments"
              >
            
                <CreditCard></CreditCard>
                <span className="is-drawer-close:hidden">Payments</span>
              </Link>
            </li>

      
            <li>
              <Link to={'/bashboard/profile'}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                
                <Bolt></Bolt>
                <span className="is-drawer-close:hidden">Settings</span>
              </Link>
            </li>
            <li>
              <Link to={'/'}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Logout"
              >
                
                <LogOut></LogOut>
                <span className="is-drawer-close:hidden">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  );
}

export default Sidebar;
