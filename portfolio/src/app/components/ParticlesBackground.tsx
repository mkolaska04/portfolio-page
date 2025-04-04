'use client'
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import { IOptions, RecursivePartial } from "@tsparticles/engine";

const ParticlesBackground = (props: { id: string | undefined; }) => {

  const [, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: unknown) => {
    console.log(container);
  };


  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: { value: "transparent" },
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        opacity: 1,
      },
      fullScreen: { enable: true, zIndex: 0 },
      detectRetina: true,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "repulse" },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: { enable: false, force: 2, smooth: 10 },
          },
          resize: {
            enable: true,  // Enable or disable the resize event
            delay: 0.5,    // Delay between resize events in seconds
          },
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            opacity: 0,
            size: 0,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        move: {
          enable: true,
          speed: { min: 0.1, max: 1 },
        },
        number: {
          density: { enable: true, width: 1920, height: 1080 },
          value: 160,
        },
        opacity: {
          value: { min: 0.1, max: 1 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
            startValue: "random",
          },
        },
        shape: { type: "circle" },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: false,
            speed: 5,
            sync: false,
            startValue: "random",
          },
        },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
    }),
    []
  );
  


  return <Particles id={props.id} init={particlesLoaded} options={options} className="z-[-1]"/>; 
};

export default ParticlesBackground;