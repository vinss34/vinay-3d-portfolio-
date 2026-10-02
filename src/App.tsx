import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Database, Users, LineChart, Mail, Github, Linkedin } from 'lucide-react'
import * as THREE from 'three'

function FloatingCore() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.3
    meshRef.current.rotation.y += delta * 0.4
  })

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2.5, 0]} />
        <meshStandardMaterial 
          color="#38bdf8" 
          wireframe 
          emissive="#0284c7"
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

export default function App() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', color: '#f8fafc', backgroundColor: '#0f172a', minHeight: '100vh' }}>
      {/* 3D Background Canvas */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <FloatingCore />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <main style={{ relative: 'relative', zIndex: 1, padding: '2rem 1rem', maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Hero Section */}
        <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Vinay
          </motion.h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '2rem' }}>
            Data & Talent Sourcing Specialist
          </p>
        </section>

        {/* Experience / Skills */}
        <section style={{ padding: '4rem 0' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem', textAlign: 'center' }}>Core Expertise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            
            <div style={{ padding: '1.5rem', borderRadius: '12px', backgroundColor: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid #334155' }}>
              <Database color="#38bdf8" size={32} />
              <h3 style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Data Mining</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Extracting actionable talent insights using structured search & data analytics.</p>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '12px', backgroundColor: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid #334155' }}>
              <Users color="#818cf8" size={32} />
              <h3 style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Talent Sourcing</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Identifying and engaging high-caliber professionals across technical domains.</p>
            </div>

            <div style={{ padding: '1.5rem', borderRadius: '12px', backgroundColor: 'rgba(30, 41, 59, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid #334155' }}>
              <LineChart color="#34d399" size={32} />
              <h3 style={{ marginTop: '1rem', fontSize: '1.2rem' }}>Market Intelligence</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Analyzing compensation, skill availability, and talent landscape trends.</p>
            </div>

          </div>
        </section>

        {/* Contact */}
        <section style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Connect</h2>
          <p style={{ color: '#94a3b8', marginBottom: '1.5rem' }}>Open for talent acquisition & data sourcing opportunities.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <Mail color="#38bdf8" />
            <Linkedin color="#38bdf8" />
            <Github color="#38bdf8" />
          </div>
        </section>

      </main>
    </div>
  )
}
