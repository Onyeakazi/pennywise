import { Outlet } from 'react-router-dom';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import FloatingButton from '../components/Dashboard/FloatingButton';
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='relative flex h-screen bg-gray-100 dark:bg-gray-950'>
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Hamburger Toggle (mobile only) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-3 right-4 z-50 p-2 rounded-full transition-all"
        aria-label="Toggle sidebar"
      >
        <div className="space-y-1.5">
          <div
            className={`h-0.5 w-6 bg-gray-800 dark:bg-white transition-transform ${
              sidebarOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`h-0.5 w-6 bg-gray-800 dark:bg-white transition-opacity ${
              sidebarOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`h-0.5 w-6 bg-gray-800 dark:bg-white transition-transform ${
              sidebarOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </div>
      </button>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 overflow-y-auto md:ml-80 mt-4">
          <Outlet />
        </main>
        <FloatingButton />
      </div>
    </div>
  );
};

export default DashboardLayout;
