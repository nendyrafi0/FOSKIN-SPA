import React, { useState, useEffect, useRef } from "react";
import Logo from '../assets/img/foskin-logo.png'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

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
                    <div className="flex md:w-44 w-28 h-14 bg-black rounded-e-lg items-center justify-end px-6">
                        <a href="">
                            <img src={Logo} alt="foskin-logo.png" className="w-10  object-contain" />
                        </a>
                    </div>

                    <div className="hidden md:flex justify-around w-full mx-4">
                        <a href="#Home" className="text-lg font-semibold text-black hover:text-gray-700">
                            Home
                        </a>
                        <a href="#Features" className="text-lg font-semibold text-black hover:text-gray-700">
                            Features
                        </a>

                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsDropdownOpen((prev) => !prev)}
                                className="text-lg font-semibold text-black hover:text-gray-700 flex items-center"
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
                                        href="#Background"
                                        className="block px-4 py-2 text-black hover:bg-gray-200 font-semibold"
                                    >
                                        Background
                                    </a>
                                    <a
                                        href="#Contact"
                                        className="block px-4 py-2 text-black hover:bg-gray-200 font-semibold"
                                    >
                                        Contact Us
                                    </a>
                                    <a
                                        href="#Contact"
                                        className="block px-4 py-2 text-black hover:bg-gray-200 font-semibold"
                                    >
                                        Social Media
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="md:hidden flex items-center justify-center text-gray-500 hover:text-black focus:outline-none"
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

                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4">
                        <a
                            href="#Home"
                            className="block text-lg px-4 py-2 text-black hover:bg-gray-300 rounded-lg"
                        >
                            Home
                        </a>
                        <a
                            href="#Features"
                            className="block text-lg px-4 py-2 text-black hover:bg-gray-300 rounded-lg"
                        >
                            Features
                        </a>
                        <a
                            href="#Background"
                            className="block text-lg px-4 py-2 text-black hover:bg-gray-300 rounded-lg"
                        >
                            Background
                        </a>
                        <a
                            href="#Contact"
                            className="block text-lg px-4 py-2 text-black hover:bg-gray-300 rounded-lg"
                        >
                            Contact Us
                        </a>
                        <a
                            href="#Contact"
                            className="block text-lg px-4 py-2 text-black hover:bg-gray-300 rounded-lg"
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
