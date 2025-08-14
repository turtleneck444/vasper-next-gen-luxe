"use client";
 
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { useLoader, useFrame, extend } from '@react-three/fiber';
import { ShaderMaterial } from 'three';
import { Boxes } from "@/components/blocks/background-boxes";
 
// Custom shader for day/night blending
const EarthDayNightMaterial = ({ dayMap, nightMap, rotationY }) => {
  const materialRef = useRef<ShaderMaterial | null>(null);
  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uRotationY.value = rotationY;
    }
  });
  const uniforms = useMemo(() => ({
    dayTexture: { value: dayMap },
    nightTexture: { value: nightMap },
    uRotationY: { value: 0 },
  }), [dayMap, nightMap]);
  return (
    <shaderMaterial
      ref={materialRef}
      uniforms={uniforms}
      vertexShader={`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `}
      fragmentShader={`
        uniform sampler2D dayTexture;
        uniform sampler2D nightTexture;
        uniform float uRotationY;
        varying vec2 vUv;
        void main() {
          // Calculate longitude from UV
          float longitude = (vUv.x - 0.5) * 2.0 * 3.1415926;
          float dayAmount = smoothstep(-0.2, 0.2, cos(longitude + uRotationY));
          vec3 dayColor = texture2D(dayTexture, vUv).rgb;
          vec3 nightColor = texture2D(nightTexture, vUv).rgb;
          gl_FragColor = vec4(mix(nightColor, dayColor, dayAmount), 1.0);
        }
      `}
      attach="material"
    />
  );
};
 
function Globe() {
  const earthRef = useRef<THREE.Mesh | null>(null);
  const dayMap = useLoader(THREE.TextureLoader, '/8k_earth_daymap.jpg');
  const nightMap = useLoader(THREE.TextureLoader, '/8k_earth_nightmap.jpg');
  const rotationY = useRef(0);
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
      rotationY.current = earthRef.current.rotation.y;
    }
  });
  // High-quality, animated neural pathways
  const neuralPaths = useMemo(() => {
    // Generate smooth bezier curves between random points on the globe
    const points: [number, number][] = [
      [40, -74], [35, 139], [51, 0], [37, -122], [-33, 151], [1, 103], [48, 2], [-23, -43], [28, 77], [34, -118]
    ];
    const toVec3 = (lat, lng, r = 1.01) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lng + 180) * (Math.PI / 180);
      return [
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      ];
    };
    let paths = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const start = toVec3(...points[i]);
        const end = toVec3(...points[j]);
        const mid = [
          (start[0] + end[0]) / 2,
          (start[1] + end[1]) / 2 + 0.5,
          (start[2] + end[2]) / 2,
        ];
        paths.push([start, mid, end]);
      }
    }
    return paths;
  }, []);
  // Animate pulse
  const pulse = Math.abs(Math.sin(Date.now() * 0.001));
  return (
    <>
      <ambientLight intensity={2.2} />
      <pointLight position={[10, 10, 10]} intensity={3.5} />
      {/* Glowing Aura */}
      <mesh position={[0, -2.2, 0]} scale={[2.2, 2.2, 2.2]}>
        <sphereGeometry args={[1.13, 64, 64]} />
        <meshBasicMaterial color="#50ffa3" transparent opacity={0.03} />
      </mesh>
      {/* Earth with day/night shader */}
      <mesh ref={earthRef} position={[0, -2.2, 0]} scale={[2.2, 2.2, 2.2]}>
        <sphereGeometry args={[1, 64, 64]} />
        <EarthDayNightMaterial dayMap={dayMap} nightMap={nightMap} rotationY={rotationY.current} />
      </mesh>
      {/* Animated neural pathways */}
      {neuralPaths.map((curve, i) => (
        <Line
          key={i}
          points={curve}
          color={i % 2 === 0 ? '#50ffa3' : '#00e0ff'}
          lineWidth={1.5 + 1.5 * pulse}
          transparent
          opacity={0.7 + 0.3 * pulse}
          dashed={false}
        />
      ))}
      <Stars radius={10} depth={50} count={2000} factor={0.1} saturation={0.5} fade speed={1} />
      <OrbitControls target={[0, 0, 0]} enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6} />
    </>
  );
}
 
export default function Globe3D() {
  return (
    <section
      className="relative min-h-[60vh] w-full overflow-hidden pb-10 pt-24 font-light text-white antialiased md:pb-16 md:pt-16"
      style={{
        background: "linear-gradient(135deg, #06194a 0%, #0a1f3d 60%, #133a7c 100%)",
      }}
    >
      {/* Animated background */}
      <Boxes />
      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center md:px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-6 mt-10 md:mt-16 inline-block rounded-full border border-[#1976d2]/40 px-4 py-2 text-xs md:text-base text-[#1976d2] bg-white/5">
            ENTERPRISE-GRADE IT SOLUTIONS
          </span>
          <h1 className="mx-auto mb-8 max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white">
            Everything you need in<br className="block sm:hidden" /> <span className="text-[#1976d2]">Cybersecurity & IT</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-base md:text-xl text-white/80">
            Empowering enterprises with comprehensive technology solutions. Trusted by industry leaders for reliability, security, and innovation.
          </p>
          <div className="mb-12 sm:mb-0 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link
              to="/contact"
              className="pointer-events-auto neumorphic-button hover:shadow-[0_0_20px_rgba(25,118,210,0.3)] relative w-full overflow-hidden rounded-full border border-[#1976d2]/30 bg-gradient-to-r from-[#1976d2] to-[#1565c0] px-10 py-5 text-base md:text-lg text-white shadow-lg transition-all duration-300 hover:border-[#1565c0]/50 sm:w-auto"
            >
              Schedule Consultation
            </Link>
            <a
              href="#services"
              className="pointer-events-auto flex w-full items-center justify-center gap-2 text-[#1976d2] transition-colors hover:text-[#1565c0] sm:w-auto text-base md:text-lg"
            >
              <span>View Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1976d2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
              <span className="text-sm">Fortune 500 Trusted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
              <span className="text-sm">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
              <span className="text-sm">24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/></svg>
              <span className="text-sm">99.9% Uptime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 