import { Bell, UserCircle, Search  } from "lucide-react";

function Navbar() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md py-3 px-6 flex items-center justify-between sticky top-0 z-40 md:py-7">
     {/* Left: Search Bar */}
      <div className="relative md:w-full max-w-md md:ml-80">
        <Search className="absolute left-3 top-1.5 md:top-3.5 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search transactions..."
          className="w-full pl-10 pr-4 md:py-2 text-lg border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-100 dark:bg-blue-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right: Notification & Profile */}
      <div className="hidden md:flex items-center gap-4">
        <button className="relative">
          <Bell className="w-9 h-9 text-gray-600 dark:text-gray-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-2">
          <UserCircle className="w-9 h-9 text-gray-600 dark:text-gray-300" />
          <span className="text-gray-800 dark:text-white text-2xl ">Chiemena</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
