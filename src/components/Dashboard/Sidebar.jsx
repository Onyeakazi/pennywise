import React, { useState } from "react";
import { LayoutDashboard, PlusCircle, History, Settings, LogOut, ChevronDown, ChevronUp } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import profile from "../../assets/images/profile.jpg";

export default function Sidebar({ isOpen }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, id: "dashboard", path: "/" },
    { label: "Add Transaction", icon: PlusCircle, id: "add" },
    { label: "Transactions", icon: History, id: "transactions", path: "/transactions" },
    { label: "Settings", icon: Settings, id: "settings", path: "/settings" },
    { label: "Logout", icon: LogOut, id: "logout", path: "/logout" },
  ];

  const isDropdownChildActive = ["/add-income", "/add-expense"].includes(location.pathname);

  return (
    <aside className={`h-screen w-80 bg-white dark:bg-gray-900 shadow-md flex flex-col justify-between fixed top-0 left-0 z-40 transform transition-transform duration-300 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div>
        <div className="flex flex-col items-center justify-center p-6 space-y-2 text-center mt-11 md:mt-24">
          <img
            src={profile}
            alt="User"
            className="w-32 h-32 rounded-full object-cover border border-gray-300 dark:border-gray-700"
          />
          <div className="pt-2">
            <p className="text-3xl font-semibold text-gray-800 dark:text-white">Chiemena Godswill</p>
          </div>
        </div>

        <nav className="mt-6 space-y-1">
          {navItems.map(({ label, icon: Icon, id, path }) => (
            <React.Fragment key={id}>
              {id === "add" ? (
                // DROPDOWN PARENT - not a NavLink
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className={`w-75 flex items-center justify-between px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-colors ${
                    isDropdownChildActive
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-white"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center">
                    <Icon className="mr-3 w-5 h-5" />
                    {label}
                  </div>
                  {isDropdownOpen ? (
                    <ChevronUp className="w-5 h-5 ml-auto" />
                  ) : (
                    <ChevronDown className="w-5 h-5 ml-auto" />
                  )}
                </button>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `w-75 flex items-center px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-white"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  <Icon className="mr-3 w-5 h-5" />
                  {label}
                </NavLink>
              )}

              <AnimatePresence>
                {id === "add" && isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ml-10 mt-1 flex flex-col gap-1"
                  >
                    <NavLink
                      to="/add-income"
                      className={({ isActive }) =>
                        `w-67 text-left px-3 py-3 text-sm rounded-lg transition-colors ${
                          isActive
                            ? "text-blue-600 bg-blue-100 dark:bg-blue-900/50 dark:text-white"
                            : "text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-100"
                        }`
                      }
                    >
                      + Add Income
                    </NavLink>
                    <NavLink
                      to="/add-expense"
                      className={({ isActive }) =>
                        `w-67 text-left px-3 py-3 text-sm rounded-lg transition-colors ${
                          isActive
                            ? "text-blue-600 bg-blue-100 dark:bg-blue-900/50 dark:text-white"
                            : "text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-100"
                        }`
                      }
                    >
                      - Add Expense
                    </NavLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </React.Fragment>
          ))}
        </nav>
      </div>

      <div className="p-6">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">PENNYWISE</div>
      </div>
    </aside>
  );
}
