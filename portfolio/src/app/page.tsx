'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useActiveSection } from './context/ActiveSectionContext';
import TypingEffect from './components/TypingEffect';
const sections = ["home", "about", "services", "contact"];

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
    <div className="flex flex-col justify-center items-center my-36">
      
      <div
        className='flex flex-col justify-center items-center h-screen'
        id={sections[0]}
        ref={(el) => {
          sectionRefs.current[sections[0]] = el;
        }}
      >
       <h1 className="  font-roboto text-4xl">
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
        className="w-full h-screen"
      >
        <h2 className="text-4xl">{sections[1].toUpperCase()}</h2>
      </div>
      <div
        id={sections[2]}
        ref={(el) => {
          sectionRefs.current[sections[2]] = el;
        }}
        className="w-full h-screen"
      >
        <h2 className="text-4xl">{sections[2].toUpperCase()}</h2>
      </div>
      <div
        id={sections[3]}
        ref={(el) => {
          sectionRefs.current[sections[3]] = el;
        }}
        className="w-full h-screen"
      >
        <h2 className="text-4xl">{sections[3].toUpperCase()}</h2>
      </div>
    </div>
  );
}