import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/Login";
import AddIncome from "./pages/dashboard/AddIncome";
import Signup from "./pages/auth/Signup";

function App() {

  return (
    <Routes>
      {/* Dashboard routes */}
      <Route element={<DashboardLayout/>}>
        <Route path='/' element={<Dashboard />} />
        <Route path="/add-income" element={<AddIncome/>} />
      </Route>

      {/* Auth routes */}
      <Route path="auth" element={<AuthLayout/>}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App
