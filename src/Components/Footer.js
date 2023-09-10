import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="w-full  bg-red-50 text-gray-600 py-2 px-2 ">
            <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4 justify-between">
                <div className="col-span-1 py-8 md:pt-2">
                    <Link to="./privacy" className="font-bold uppercare pt-2">Privacy Policy</Link>
                </div>
                <div className="col-span-1 py-8 md:pt-2">
                    <Link to="./settings" className="font-bold uppercare pt-2">User Settings</Link>
                </div >
                <div className="col-span-2 py-8 md:pt-2">
                    <p className="font-bold uppercase">Subscribe to our newsletters</p>
                    <p className="py-4">
                        The Latest deals, articles and resources sent to your inbox weekly.
                    </p>
                    
                </div>
                <div className="col-span-2 py-8 md:pt-2">
                    <form className="flex flex-col sm:flex-row">
                        <input
                            className="w-full p-2 mr-4 rounded-md mb-4"
                            type="email"
                            placeholder="Enter email.."
                        />
                        <button className="p-2 mb-4 rounded-md">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
                <p className="py-4">2023 Experiences, LLC. All rights reserved</p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <TiSocialPinterest size={30} />
                </div>
            </div>
        </div>
    );
};

export default Footer;