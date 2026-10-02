// @ts-nocheck
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

function Model() {
  const { scene } = useGLTF('/character.glb');
  return <primitive object={scene} scale={2} position={[0, -1.5, 0]} />;
}

export default function App() {
  return (
    <div className="relative bg-slate-950 text-white min-h-screen font-sans selection:bg-blue-500 selection:text-white">
      {/* Fixed 3D Canvas Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Suspense fallback={null}>
            <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
              <Model />
            </Float>
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        </Canvas>
      </div>

      {/* Scrollable Story Overlay */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500"
          >
            Vinay
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-light max-w-lg"
          >
            Data & Talent Sourcing Specialist
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 text-sm"
          >
            <span>Scroll to explore</span>
            <div className="w-5 h-9 border-2 border-slate-400 rounded-full flex justify-center pt-1">
              <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="min-h-screen flex items-center justify-start px-6 md:px-16 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">About Me</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              I specialize in talent acquisition intelligence, pipeline optimization, and data-driven sourcing strategies to discover top-tier talent.
            </p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section className="min-h-screen flex items-center justify-end px-6 md:px-16 max-w-2xl ml-auto">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/80 backdrop-blur-md p-8 rounded-2xl border border-slate-800 shadow-2xl"
          >
            <h2 className="text-3xl font-bold mb-4 text-purple-400">Core Capabilities</h2>
            <ul className="space-y-3 text-slate-300 text-lg">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Talent Sourcing & Intelligence
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                Data Analytics & Metrics
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                Technical Candidate Screening
              </li>
            </ul>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-xs text-slate-500 relative z-20">
          Rigged Astronaut model by J-Toastie via Poly Pizza (CC-BY)
        </footer>
      </div>
    </div>
  );
}
