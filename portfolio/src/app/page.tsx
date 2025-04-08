'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useActiveSection } from './context/ActiveSectionContext';
import TypingEffect from './components/TypingEffect';
import ContactForm from './components/ContactForm';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";
import ProjectTile from './components/ProjectTile';
import FadeInWhenVisible from './components/FadeInWhenVisible';
import { RiNextjsFill, RiTailwindCssFill  } from "react-icons/ri";
import { FaReact, FaNode, FaCss3Alt  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import AboutMeTile from './components/AboutMeTile';
// css tailwind, js node, react next

const sections = ["home", "about", "projects", "contact"];

export default function Home() {
  const { setActiveSection } = useActiveSection();
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      if (sectionRefs.current[section]) {
        observer.observe(sectionRefs.current[section]);
      }
    });

    return () => observer.disconnect();
  }, [setActiveSection]);



  return (
    <div className="flex flex-col justify-center items-center my-3 py-2">

      <div
        className='flex flex-col justify-center items-center h-screen'
        id={sections[0]}
        ref={(el) => {
          sectionRefs.current[sections[0]] = el;
        }}
      >
        <h1 className="text-4xl align-center text-center">
          Hello, I&apos;m <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#EF6FDE] via-[#DF84FF] to-[#84D3FF]">Martyna Kolaska</span>, but you can call me <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#EF6FDE] via-[#DF84FF] to-[#84D3FF]">Catsenni</span>
        </h1>
        <Image
          src="/logo.png"
          alt="logo"
          width={600}
          height={600}
          className="rounded-lg cursor-pointer"
          priority
        />
        <TypingEffect />
      </div>
      <div
        id={sections[1]}
        ref={(el) => {
          sectionRefs.current[sections[1]] = el;
        }}
        className="w-full my-16"
      >
        <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#EF6FDE] via-[#DF84FF] to-[#84D3FF] text-4xl lg:text-6xl p-4 font-bold">About me</h2>
        This and Projects section still during development, so they are empty for now :&#41;
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <div className="lg:w-1/2">
            <p> I&apos;m an Entry-level Web Developer with a strong passion for creating beautiful and responsive websites.
            </p>
            <p>Since an early age, I&apos;ve been deeply interested in art and design in all its forms. Discovering frontend development felt like a natural path — a perfect blend of my creative side and my growing love for programming. It allows me to bring ideas to life in a visual, interactive way while staying connected to technology.</p>
            <p>I’m committed to writing clean, efficient code, and I’m always seeking opportunities to improve my skills, stay updated with the latest technologies, and build on my knowledge. Whether it’s through collaboration with other developers or tackling new projects on my own.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <FadeInWhenVisible>
            <AboutMeTile icons={[<IoLogoJavascript key="js" className="text-yellow-300" />, <FaNode key="node" className="text-green-300" />]} text="JavaScript" />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <AboutMeTile icons={[<FaCss3Alt key="css3" className="text-blue-300"/>, <RiTailwindCssFill key="tailwind" className="text-blue-200" />]} text="CSS3" />
            </FadeInWhenVisible>
            <FadeInWhenVisible>
            <AboutMeTile icons={[<FaReact key="reactjs" className="text-blue-500" />, <RiNextjsFill key="nextjs" />]} text="ReactJs" />
            </FadeInWhenVisible>

            




          </div>
        </div>
      </div>
      <div
        id={sections[2]}
        ref={(el) => {
          sectionRefs.current[sections[2]] = el;
        }}
        className="w-full my-16"
      >
        <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#EF6FDE] via-[#DF84FF] to-[#84D3FF] text-4xl lg:text-6xl p-4 font-bold">Projects</h2>
        Currently Project tiles don&apos;t work, i put them only for illustration purposes. I will add them later :&#41;
        <div className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:space-x-4">

          <FadeInWhenVisible>
            <div className="w-full">
              <ProjectTile project={{ title: "Project 1", description: "Description of project 1", links: [{ name: "Link 1", url: "#" }] }} />
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="w-full">
              <ProjectTile project={{ title: "Project 2", description: "Description of project 2", links: [{ name: "Link 1", url: "#" }, { name: "Link 2", url: "#" }] }} />
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div className="w-full ">
              <ProjectTile project={{ title: "Project 3", description: "Description of project 3 ", links: [{ name: "Link 1", url: "#" }] }} />
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
      <div
        id={sections[3]}
        ref={(el) => {
          sectionRefs.current[sections[3]] = el;
        }}
        className="w-full flex items-center justify-center"
      >

        <div className=" bg-box md:w-4/5 lg:w-3/5 w-full flex flex-col justify-center items-center rounded-lg shadow-lg p-4 mb-2 md:mb-16 max-w-7xl">
          <div className="w-full">
            <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#EF6FDE] via-[#DF84FF] to-[#84D3FF] text-4xl lg:text-6xl p-4 font-bold">Contact me</h2>
          </div>
          <div className="w-full flex flex-col justify-between items-start lg:flex-row">
            <div className="left lg:w-1/2 ">
              <div className="lg:text-xl p-4">Whether you have a question, a project in mind, or simply want to say hello, feel free to reach out. I respond quickly :&#41;. Contact me via given contact form or on one of my socials:</div>
              <div className="socials p-4 flex flex-col space-y-4">
                <a href="https://github.com/mkolaska04" className=" hover:text-[#EF6FDE] flex">
                  <FaGithub className="w-5 h-5 mx-2" /> Github
                </a>
                <a href="https://www.linkedin.com/in/martyna-kolaska-7140572b3/" className=" hover:text-[#EF6FDE] flex">
                  <FaLinkedin className="w-5 h-5 mx-2" /> LinkedIn
                </a>
                <a href="https://discord.com/users/430662565266325505" className=" hover:text-[#EF6FDE] flex">
                  <FaDiscord className="w-5 h-5 mx-2" /> Discord
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}