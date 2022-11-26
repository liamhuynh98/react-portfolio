import React, { useCallback } from 'react'
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

type Props = {}

const Particle = (props: Props) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "fullScreen": {
                    "enable": true,
                    "zIndex": 1
                },
                "detectRetina": false,
                "fpsLimit": 120,
                "interactivity": {
                    "events": {
                        "onClick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "onDiv": {
                            "elementId": "repulse-div",
                            "enable": false,
                            "mode": "repulse"
                        },
                        "onHover": {
                            "enable": true,
                            "mode": "bubble",
                            "parallax": {
                                "enable": false,
                                "force": 2,
                                "smooth": 10
                            }
                        },
                        "resize": true
                    },
                    "modes": {
                        "bubble": {
                            "distance": 40,
                            "duration": 2,
                            "opacity": 8,
                            "size": 6,
                            "speed": 3
                        },
                        "connect": {
                            "distance": 80,
                            "lineLinked": {
                                "opacity": 0.5
                            },
                            "radius": 60
                        },
                        "grab": {
                            "distance": 400,
                            "lineLinked": {
                                "opacity": 1
                            }
                        },
                        "push": {
                            "quantity": 4
                        },
                        "remove": {
                            "quantity": 2
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "slow": {
                            "active": true,
                            "radius": 0,
                            "factor": 1
                        }
                    }
                },
                "particles": {
                    "color": {
                        "value": "#ffffff"
                    },
                    "lineLinked": {
                        "blink": true,
                        "color": "#ffffff",
                        "consent": false,
                        "distance": 50,
                        "enable": true,
                        "opacity": 0.5,
                        "width": 1
                    },
                    "move": {
                        "attract": {
                            "enable": false,
                            "rotate": {
                                "x": 600,
                                "y": 1200
                            }
                        },
                        "bounce": false,
                        "direction": "none",
                        "enable": true,
                        "outMode": "bounce",
                        "random": false,
                        "speed": 1,
                        "straight": false
                    },
                    "number": {
                        "density": {
                            "enable": false,
                            "area": 2000
                        },
                        "limit": 0,
                        "value": 200
                    },
                    "opacity": {
                        "animation": {
                            "enable": true,
                            "minimumValue": 0.05,
                            "speed": 2,
                            "sync": false
                        },
                        "random": false,
                        "value": 0.4
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "size": {
                        "animation": {
                            "enable": false,
                            "minimumValue": 0.1,
                            "speed": 40,
                            "sync": false
                        },
                        "random": true,
                        "value": 1
                    }
                },
                "polygon": {
                    "draw": {
                        "enable": true,
                        "lineColor": "rgba(255,255,255,0.2)",
                        "lineWidth": 0.5
                    },
                    "enable": true,
                    "move": {
                        "radius": 10
                    },
                    "inline": {
                        "arrangement": "equidistant"
                    },
                    "scale": 0.5,
                    "type": "inline",
                    "url": "https://particles.js.org/images/smalldeer.svg"
                },
                "background": {
                    "color": "",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}
        />
    );
};

export default Particle