import { Lock, EyeOff, Eye, Mail, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { googleLogin, login } from "@/services/authService";
import toast from "react-hot-toast";

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try{
            await login(formData.email, formData.password);
            setLoading(false);
            toast.success("Logged In!");

            setTimeout(() => {
                navigate("/");
            }, 1500);
        }catch(error) {
            setLoading(false);
            toast.error(error.message);
        }
    }

    const handleGoogleIn = async () => {
        setLoading(true);
        try{
            await googleLogin();
            toast.success("Log in Successfull!");
            navigate("/");
        }catch(error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form 
            onSubmit={handleSubmit}
            className="p-8 rounded-lg w-full"
        >
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <div className="relative">
                <Mail className="absolute left-3 top-6 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type="email" 
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="w-full pl-10 p-3 mb-4 border rounded-lg bg-gray-200" 
                />
            </div>

            <div className="relative">
                <Lock className="absolute left-3 top-6 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    onChange={handleChange}
                    placeholder="Enter Password"
                    className="w-full pl-10 p-3 mb-4 border rounded-lg bg-gray-200" 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-6 -translate-y-1/2 text-gray-400"
                >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                </button>
            </div>

            <div className="md:flex justify-between mt-4 space-y-2 text-sm text-center">

                <Link 
                    to='/forgot-password' 
                    className="block text-blue-500 hover:underline"
                >
                    Forgot Password?
                </Link>
                <Link 
                    to='/auth/signup'
                    className="text-blue-500 hover:underline"
                >
                    Don't have an Account? Sign in
                </Link>

            </div>


            <button 
                type="submit"
                disabled={loading}
                className={`w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"}`}
            >
                {loading ? "Logging In..." : "Login"}
            </button>

            <div className="flex justify-center space-x-4 mt-4">
                <div className="bg-white rounded-xl shadow-md p-4">
                    <button onClick={handleGoogleIn} className="cursor-pointer">
                        <FcGoogle size={35} />
                    </button>
                </div>
            </div>

        </form>
    );
}

export default Login;





