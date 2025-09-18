import {Outlet} from "react-router-dom";
import bgVideo from "../assets/videos/bg-video.mp4"

const AuthLayout = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
            <video 
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={bgVideo} type="video/mp4"/>
            </video>

            {/* Overlay to darken video*/}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 w-full m-5 md:max-w-[600px] max-w-[500px] bg-white/40 backdrop-blur-md shadow-lg rounded-2xl p-6">
                <Outlet/>
            </div>
        </div>
    );
}

export default AuthLayout;
