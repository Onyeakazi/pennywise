import { Lock, EyeOff, Eye, Mail, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.prevent();
        console.log("Register form date:", formData);
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
                    name="name"
                    placeholder="Enter Email"
                    className="w-full pl-10 p-3 mb-4 border rounded-lg bg-gray-200" 
                />
            </div>

            <div className="relative">
                <Lock className="absolute left-3 top-6 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type={showPassword ? "text" : "password"} 
                    name="password"
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
                onClick={handleSubmit}
                className="w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Log in
            </button>

        </form>
    );
}

export default Login;





