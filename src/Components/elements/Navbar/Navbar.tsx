'use client'

import Link from "next/link"
import { motion } from "motion/react"
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FiShoppingCart } from "react-icons/fi";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { FaInstagram, FaFacebookSquare,} from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { AiFillTikTok } from "react-icons/ai";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Product", href: "/product" },
    { label: "Contact Us", href: "/contact" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", isOpen);
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="h-18 flex items-center justify-between mx-3 md:mx-6 lg:mx-34">

            {/* Mobile Menu */}
            <div className="flex gap-3 items-center">
                <Button
                    onClick={toggleMenu}
                    variant=""
                    >
                        <div className="flex flex-col items-center gap-1 cursor-pointer">
                            <span className={`block lg:hidden md:hidden w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                            <span className={`block lg:hidden md:hidden w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                            <span className={`block lg:hidden md:hidden w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                        </div>
                </Button>

                {/* Side Menu */}
                {isOpen && (
                    <div onClick={toggleMenu} className="fixed inset-0 bg-black/50 z-40" />)}
                        <aside
                            className={`fixed top-0 left-0 h-screen w-9/10 bg-white z-50 transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                                <div className="flex justify-between items-center p-6">
                                    <h1 className="text-xl font-medium text-amber-800">
                                        Luminette
                                    </h1>
                                    <Button
                                        onClick={toggleMenu}
                                        variant="text-xl"
                                    >
                                        ✕
                                    </Button>
                                </div>
                                    <ul className="px-6 space-y-6 text-lg">
                                        {navItems.map((item, index) => (
                                            <li key={index} className="border-b border-gray-300">
                                                <Link href={item.href}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="px-6 mt-[100%]">
                                        <Button
                                            variant="w-full bg-amber-900 text-white py-3 rounded-lg hover:bg-amber-800">
                                                <Link href="/auth/login">Sign In</Link>
                                        </Button>
                                        <div className="flex gap-3 mt-5">
                                            <FaInstagram size={35}/>
                                            <FaFacebookSquare size={35}/>
                                            <FiYoutube size={35}/>
                                            <AiFillTikTok size={35}/>
                                        </div>
                                    </div>
                        </aside>            
                <h1 className="text-2xl text-amber-800 font-medium">Luminette</h1>
            </div>

            {/* Desktop Menu */}
            <div>
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item, index) => (
                        <motion.li 
                            key={index} 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            className="relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full "
                        >
                                <Link href={item.href}>{item.label}</Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div className="flex gap-3 items-center">
                <Link href="/auth/login">
                    <HiOutlineUserCircle size={30} />
                </Link>
                <FiShoppingCart size={20}/>
            </div>
        </nav>
    )
}

export default Navbar