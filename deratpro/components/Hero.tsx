"use client";

import { Zap } from "lucide-react";
import { siteInfo } from "@/data/content";
import {useRef} from "react";
import {Canvas, useFrame} from "@react-three/fiber";
import {useMemo} from "react";

function HeroCanvasShape() {
    const meshRef = useRef<any>(null);
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[2.5, 0]} />
            <meshStandardMaterial color="#a7f3d0" wireframe={true} transparent={true} opacity={0.3} />
        </mesh>
    );
}

function HeroParticles() {
    const particlesRef = useRef<any>(null);
    const particlesPosition = useMemo(() => {
        const positions = [];
        for (let i = 0; i < 100; i++) {
            positions.push((Math.random() - 0.5) * 10);
            positions.push((Math.random() - 0.5) * 10);
            positions.push((Math.random() - 0.5) * 10);
        }
        return new Float32Array(positions);
    }, []);

    useFrame((state, delta) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.x += delta * 0.05;
            particlesRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach = "attributes-position"
                    args={[particlesPosition, 3]}
                />
            </bufferGeometry>
            <pointsMaterial color="#a7f3d0" size={0.06} transparent opacity={0.6} sizeAttenuation={true} />
        </points>
    );
}



export default function Hero() {
    return (
            <section id="hero" className="relative overflow-hidden bg-primary py-10 md:py-32">
                <div className="absolute inset-0 z-0">
                    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} />
                        <HeroCanvasShape />
                        <HeroParticles />
                    </Canvas>
                </div>


                <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
                    <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl"> {siteInfo.name} </h1>
                    <p className="max-w-2xl text-lg text-white/80"> {siteInfo.tagline} </p>
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-colors duration-300 hover:bg-slate-100">
                        <Zap className="h-4 w-4" aria-hidden="true" />
                        Cere o ofertă
                    </a>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                    <a href="#servicii" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5">
                        <Zap className="h-4 w-4" aria-hidden="true" />
                        Vezi serviciile noastre
                    </a>
                    <a href="#de-ce-deratpro" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5">
                        <Zap className="h-4 w-4" aria-hidden="true" />
                        De ce DeratPro?
                    </a>
                    <a href="#cum-functioneaza" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/5">
                        <Zap className="h-4 w-4" aria-hidden="true" />
                        Cum funcționează?
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
}