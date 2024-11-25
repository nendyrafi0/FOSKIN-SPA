import React, { useState, useEffect, useRef } from "react";
import Logo from '../assets/img/foskin-logo.png'

// Routing should be made
// Color should be changed
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for Hamburger Menu
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header>
            <nav className="max-w-7xl mx-auto py-4 pe-4 sm:pe-8 lg:pe-10">
                <div className="flex justify-between gap-12 items-center h-16">
                    {/* Logo */}
                    <div className="flex md:w-44 w-28 h-14 bg-black rounded-e-lg items-center justify-end px-6">
                        <a href="">
                            <img src={Logo} alt="foskin-logo.png" className="w-10  object-contain"/>  
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex justify-around w-full mx-4">
                        <a href="#" className="text-base font-semibold text-gray-800 hover:text-blue-500">
                            Home
                        </a>
                        <a href="#" className="text-base font-semibold text-gray-800 hover:text-blue-500">
                            Features
                        </a>

                        {/* Dropdown Button */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                className="text-base font-semibold text-gray-800 hover:text-blue-500 flex items-center"
                            >
                                About
                                <svg
                                    className="ml-1 w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {/* Dropdown Items */}
                            {isDropdownOpen && (
                                <div className="absolute bg-white border border-gray-200 rounded-lg shadow-md mt-2 w-32 z-20">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-semibold"
                                    >
                                        Background
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-semibold"
                                    >
                                        Contact Us
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 font-semibold"
                                    >
                                        Social Media
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Hamburger Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="md:hidden flex items-center justify-center text-gray-500 hover:text-gray-800 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4">
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Landing
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Account
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Background
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                            Social Media
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
