'use client'
import { useState } from "react";
import { useActiveSection } from "../context/ActiveSectionContext";
import { Link } from "react-scroll";

const sections = ["home", "about", "projects", "contact"];

export default function Navbar() {
    const { activeSection } = useActiveSection();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="w-full bg-box flex justify-between items-center z-50 px-4 py-2 fixed md:py-4">

            <div>
                <h1 className="bg-gradient-to-r from-[#EF6FDE] via-[#DF84FF] to-[#84D3FF] inline-block text-transparent bg-clip-text font-poetsen text-3xl">
                    Catsenni
                </h1>
            </div>

            <div className="md:hidden" onClick={toggleMenu}>
                <button className="text-3xl text-[#DF84FF]">
                    {isMenuOpen ? "✖" : "☰"} 
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0  bg-opacity-50 flex justify-end items-start
                 z-50 mt-12 md:hidden" >
                    <div className="bg-background p-8 rounded-lg shadow-lg w-40">
                        <ul className="space-y-4">
                            {sections.map((section) => (
                                <li key={section}>
                                    <Link
                                        to={section}
                                        smooth={true}
                                        duration={500}
                                        offset={-50}
                                        className={`cursor-pointer ${activeSection === section ? "text-[#EF6FDE] text-xl font-bold" : "text-[#543568] text-xl"
                                            }`}
                                        onClick={() => setIsMenuOpen(false)} 
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            <div className="hidden md:flex space-x-4">
                {sections.map((section) => (
                    <Link
                        key={section}
                        to={section}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        className={`cursor-pointer ${activeSection === section ? "text-[#EF6FDE] text-xl font-bold" : "text-[#543568] text-xl"
                            }`}
                    >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
