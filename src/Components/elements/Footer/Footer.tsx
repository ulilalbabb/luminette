import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="bg-amber-900 text-white text-center py-10 px-4 md:px-6 lg:px-34">
            <div className="md:flex md:flex-row md:justify-between">
                <div className="md:flex md:flex-row md:gap-4 flex flex-col items-center">
                    <h1 className="font-bold text-2xl">Luminette</h1>
                    <p className="hidden md:block">|</p>
                    <MdOutlineHorizontalRule size={40} className="md:hidden"/>
                    <p className="text-gray-400">Decoration Store</p>
                </div>
                <div className="pt-8 md:pt-0">
                    <ul className="flex flex-col gap-6 md:flex md:flex-row md:gap-4">
                        <li className="block rounded px-2 py-1 hover:bg-white/10 transition"><a href="#">Home</a></li>
                        <li className="block rounded px-2 py-1 hover:bg-white/10 transition"><a href="#">Shop</a></li>
                        <li className="block rounded px-2 py-1 hover:bg-white/10 transition"><a href="#">Product</a></li>
                        <li className="block rounded px-2 py-1 hover:bg-white/10 transition"><a href="#">Blog</a></li>
                        <li className="block rounded px-2 py-1 hover:bg-white/10 transition"><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
            <hr className="w-[100%] h-0.5 bg-gray-700 border-none mt-8"/>
            <div className="flex flex-col gap-6 md:flex md:flex-row-reverse md:justify-between md:items-center pt-4">
                <div className="flex justify-center items-center gap-5 mt-5 md:mt-0">
                        <FaInstagram size={25}/>
                        <FaFacebookSquare size={25}/>
                        <FiYoutube size={25}/>
                </div>
                <div className="md:flex md:flex-row-reverse md:gap-4">
                    <div className="flex gap-5 justify-center">
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <p className="text-gray-400 pt-4 md:pt-0">© 2023 Luminette. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer