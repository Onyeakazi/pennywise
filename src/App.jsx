import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/Login";
import AddIncome from "./pages/dashboard/AddIncome";
import Signup from "./pages/auth/Signup";
import Logout from "./pages/auth/Logout";
import ProtectedRoute from "./components/Auth/ProtectedRoute";


function App() {

  return (
    <Routes>
      {/* Dashboard routes */}

      <Route 
        element={
          <ProtectedRoute>
            <DashboardLayout/>
          </ProtectedRoute>
        }
      >

        <Route path='/' element={<Dashboard />} />
        <Route path="/add-income" element={<AddIncome/>} />
      </Route>

      {/* Auth routes */}
      <Route path="auth" element={<AuthLayout/>}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />


        <Route path='logout' element={<Logout />} />

      </Route>
    </Routes>
  )
}

export default App
