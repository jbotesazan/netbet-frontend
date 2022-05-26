import React from "react"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleBackground () {

    const particlesInit = async (main) => {
    // console.log(main);
 
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
 
  const particlesLoaded = (container) => {
    // console.log(container);
  };

    return (
        <div>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false
                },
                background: {
                    color: 'transparent'
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        resize: true
                    },
                },
                particles: {
                    color: {
                        value: '6633FF'
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit: 0,
                        value: 400,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.05,
                            speed: 1,
                            sync: false
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.05,
                        },
                        value: 1
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        random: {
                            enable: true,
                            minimumValue: 2,
                        },
                        value: 1,
                    },
                },
            }} />
        </div>
    )
}

export default ParticleBackground;