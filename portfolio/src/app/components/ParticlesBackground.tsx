'use client'
import Particles from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; 
import type { IOptions, RecursivePartial } from "@tsparticles/engine";

const ParticlesBackground = (props: { id: string | undefined; }) => {

  const [, setInit] = useState(false);
  useEffect(() => {
    (async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadSlim(tsParticles);
      setInit(true);
    })();
  }, []);

  const particlesLoaded = (container: unknown) => {
    console.log(container);
  };


  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "transparent",
        },
        size: "cover",
        opacity: 1,
      },
      fullScreen: {
        enable: true,
        zIndex: 0,
      },
      detectRetina: true,
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "bubble",
            parallax: {
              enable: false,
              force: 2,
              smooth: 10,
            },
          },
          resize: {
            enable: true
          }
          
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0.5,
            size: 4,
          },
          repulse: {
            distance: 300,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          outModes: {
            default: "out",
          },
        },
        number: {
          value: 100,
          density: {
            enable: true,
            width: 800,
          },
        },
        opacity: {
          value: {
            min: 0.3,
            max: 0.7,
          },
          animation: {
            enable: true,
            speed: 1,
            startValue: "random",
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: {
            min: 1,
            max: 3,
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