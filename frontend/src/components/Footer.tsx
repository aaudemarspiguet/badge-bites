import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className = "bg-red-500 py-10">
            <div className = "container mx-auto flex flex-col md:flex-row justify-between items-center">
                <Link to="/" className ="text-white font-bold tracking-tight">
                    <span className="">© BadgeBites 2024</span>
                </Link>
                
                <span className = "text-white tracking-tight flex gap-4">
                    <span>Terms of Service</span>
                    <span>Privacy</span>
                    <span>Delivery Locations</span>
                    <span>Do Not Sell or Share My Personal Information</span>
                </span>
            </div>
        </div>
    );
};

export default Footer;