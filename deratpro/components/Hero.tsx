"use client";

import { Zap } from "lucide-react";
import { siteInfo } from "@/data/content";
import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh, Points } from "three";

function HeroCanvasShape() {
    const meshRef = useRef<Mesh>(null);
    useFrame((_, delta) => {
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

const PARTICLE_COUNT = 400;

function createPositions(count: number) {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < positions.length; i++) {
        positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
}


function HeroParticles() {
    const particlesRef = useRef<Points>(null);
    const particlesPosition = useMemo(() => createPositions(PARTICLE_COUNT), []);

    useFrame((_, delta) => {
        if (particlesRef.current) {
            particlesRef.current.rotation.x += delta * 0.05;
            particlesRef.current.rotation.y += delta * 0.05;
        }
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particlesPosition, 3]}
                />
            </bufferGeometry>
            <pointsMaterial color="#a7f3d0" size={0.06} transparent opacity={0.6} sizeAttenuation={true} />
        </points>
    );
}



export default function Hero() {
    return (
        <section id="hero" className="relative flex min-h-svh items-center overflow-hidden bg-secondary py-20">
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 75 }}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <HeroCanvasShape />
                    <HeroParticles />
                </Canvas>
            </div>


            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-8">
                <div className="flex flex-col items-center justify-center gap-6 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl"> {siteInfo.name} </h1>
                    <p className="max-w-2xl text-lg text-white/80"> {siteInfo.tagline} </p>
                    <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-lg transition-colors duration-300 hover:bg-slate-100">
                        <Zap className="h-4 w-4" aria-hidden="true" />
                        {siteInfo.ctaLabel}
                    </a>
                </div>
            </div>
        </section>
    );
}