import React, { useState } from 'react';
import {TutorApplicationCard} from "../../pages/dashboards/temp/TutorApplicationCard"
import { 
  LayoutDashboard, PlusCircle, BookOpen, Users, 
  CreditCard, Settings, Menu, X, Bell, LogOut, Search 
} from 'lucide-react';

export const StudentDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { name: 'Overview', icon: <LayoutDashboard size={20}/>, path: '/dashboard' },
    { name: 'My Tuitions', icon: <BookOpen size={20}/>, path: '/dashboard/my-tuitions' },
    { name: 'Post New Tuition', icon: <PlusCircle size={20}/>, path: '/dashboard/post-tuition' },
    { name: 'Applied Tutors', icon: <Users size={20}/>, path: '/dashboard/applications' },
    { name: 'Payments', icon: <CreditCard size={20}/>, path: '/dashboard/payments' },
    { name: 'Profile Settings', icon: <Settings size={20}/>, path: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0`}>
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="bg-indigo-500 p-2 rounded-lg">
            <BookOpen size={24} className="text-white"/>
          </div>
          <span className="text-xl font-bold tracking-tight">eTuitionBd</span>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <a key={item.name} href={item.path} className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-indigo-400 transition-all group">
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 w-full px-4 py-3 text-rose-400 hover:bg-rose-500/10 rounded-xl transition-all">
            <LogOut size={20}/>
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8">
          <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 text-slate-600">
            {isSidebarOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
          
          <div className="hidden md:flex items-center bg-slate-100 px-4 py-2 rounded-full w-96">
            <Search size={18} className="text-slate-400"/>
            <input type="text" placeholder="Search your tuitions..." className="bg-transparent border-none focus:ring-0 text-sm w-full ml-2"/>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors relative">
              <Bell size={22}/>
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900">Alex Johnson</p>
                <p className="text-xs text-slate-500">Student</p>
              </div>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" className="w-10 h-10 rounded-full bg-slate-100" alt="Avatar"/>
            </div>
          </div>
        </header>

        {/* Content Area - Where your nested routes render */}
        <div className="p-4 lg:p-8 overflow-y-auto">
          {/* Example Content: Applied Tutors View */}
          <div className="max-w-6xl mx-auto">
            <header className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Tutor Applications</h1>
              <p className="text-slate-500">Review and hire the best match for your tuition post.</p>
            </header>

            {/* Application List Container */}
            <div className="grid gap-6">
              <TutorApplicationCard />
              <TutorApplicationCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};