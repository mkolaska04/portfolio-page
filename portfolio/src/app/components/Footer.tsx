import { FaGithub, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function Footer() {
    return (


        <footer className="bg-background flex flex-col justify-center items-center py-4">
            <hr className="my-4 border-[#543568] w-4/5 sm:mx-auto lg:my-6" />
            <div className="flex justfy-between items-between w-4/5">
                <div className="mx-auto w-full max-w-screen-2xl lg:py-4">
                    <hr className=" border-[#543568]sm:mx-auto" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-[#543568] hover:text-[#EF6FDE]">© 2025 <a href="https://flowbite.com/" className="hover:underline">Catsenni</a>
                        </span>
                        <div className="flex sm:justify-center sm:mt-0">
                        </div>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#" className="text-[#543568] hover:text-[#EF6FDE]">
                        <FaGithub className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="#" className="text-[#543568] hover:text-[#EF6FDE]">
                        <FaTwitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[#543568] hover:text-[#EF6FDE]">
                        <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-[#543568] hover:text-[#EF6FDE]">
                        <FaDiscord className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>

    )
}