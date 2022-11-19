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
                    "zIndex": 0
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
                            "enable": true,
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
                            "distance": 20,
                            "duration": 2,
                            "opacity": 10,
                            "size": 4,
                            "speed": 2
                        },
                        "connect": {
                            "distance": 80,
                            "lineLinked": {
                                "opacity": 1
                            },
                            "radius": 60
                        },
                        "grab": {
                            "distance": 400,
                            "lineLinked": {
                                "opacity": 10
                            }
                        },
                        "push": {
                            "quantity": 3
                        },
                        "remove": {
                            "quantity": 4
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
                        "value": "#38bdf8"
                    },
                    "lineLinked": {
                        "blink": false,
                        "color": "#f43f5e",
                        "consent": false,
                        "distance": 50,
                        "enable": true,
                        "opacity": 4,
                        "width": 2
                    },
                    "move": {
                        "attract": {
                            "enable": false,
                            "rotate": {
                                "x": 600,
                                "y": 1200
                            }
                        },
                        "bounce": true,
                        "direction": "none",
                        "enable": true,
                        "outMode": "bounce",
                        "random": false,
                        "speed": 0.5,
                        "straight": false
                    },
                    "number": {
                        "density": {
                            "enable": false,
                            "area": 2000
                        },
                        "limit": 0,
                        "value": 400
                    },
                    "opacity": {
                        "animation": {
                            "enable": true,
                            "minimumValue": 0.05,
                            "speed": 2,
                            "sync": true
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
                            "speed": 30,
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
                    "scale": 2,
                    "type": "inline",
                    "url": "https://particles.js.org/images/hollowknight.svg"
                },
                "background": {
                    "color": "#111827",
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