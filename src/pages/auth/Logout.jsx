import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebase"; // adjust path
import toast from "react-hot-toast";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const doLogout = async () => {
      try {
        await signOut(auth);
        navigate("/auth/login");
      } catch (error) {
        toast.error("Logout failed:", error);
      }
    };

    doLogout();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-600">Logging out...</p>
    </div>
  );
};

export default Logout;
