import { Lock, EyeOff, Eye, Mail, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signup, googleLogin } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Signup = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match!");
            return;
        }

        setLoading(true);

        try{
            await signup(formData.name, formData.email, formData.password);
            setLoading(false);
            toast.success("Account created successfully!");

            setTimeout(() => {
                navigate("/");
            }, 1500);

        } catch(error) {
            setLoading(false);
            toast.error(error.message);
        }
    }

    const handleGoogleSignup = async () => {
        setLoading(true);
        try {
            await googleLogin();
            toast.success("Signed in with Google");
            navigate("/"); 
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form 
            onSubmit={handleSubmit}
            className="p-8 rounded-lg w-full"
        >
            <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

            <div className="relative">
                <User className="absolute left-3 top-6 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type="text" 
                    name="name"
                    placeholder="Enter FullName"
                    onChange={handleChange}
                    className="w-full pl-10 p-3 mb-4 border rounded-lg bg-gray-200" 
                />
            </div>

            <div className="relative">
                <Mail className="absolute left-3 top-6 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type="email" 
                    name="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
                    className="w-full pl-10 p-3 mb-4 border rounded-lg bg-gray-200" 
                />
            </div>

            <div className="relative">
                <Lock className="absolute left-3 top-6 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type={showPassword ? "text" : "password"} 
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
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

            <div className="relative">
                <Lock className="absolute left-3 top-6 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                    type={showPassword ? "text" : "password"} 
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    className="w-full pl-10 p-3 mb-4 border rounded-lg bg-gray-200" 
                />
            </div>

            <div className="md:flex justify-between mt-4 space-y-2 text-sm text-center">

                <Link 
                    to='/forgot-password' 
                    className="block text-blue-500 hover:underline"
                >
                    Forgot Password?
                </Link>
                <Link 
                    to='/auth/login'
                    className="text-blue-500 hover:underline"
                >
                    Already have an Account? Log in
                </Link>

            </div>


            <button 
                type="submit"
                disabled={loading}
                className={`w-full py-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer ${
                loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
                }`}
            >
                {loading ? "Signing up..." : "Sign Up"}
                
            </button>

            <div className="mt-4 text-sm text-center text-gray-500">
                <p>Or sign in with</p>
            </div>

            <div className="flex justify-center space-x-4 mt-4">
                <div className="bg-white rounded-xl shadow-md p-4">
                    <button onClick={handleGoogleSignup} className="cursor-pointer">
                        <FcGoogle size={35} />
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Signup;
