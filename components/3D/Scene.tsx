import { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { animated, useSpring } from 'react-spring';
import { OrbitControls } from '@react-three/drei';

const Scene: React.FC = () => {
  const sceneRef = useRef<THREE.Scene | null>(null);
  const [hovered, setHovered] = useSpring(() => ({ scale: 1 }));

  useEffect(() => {
    if (sceneRef.current) {
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      sceneRef.current.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      const scene = new THREE.Scene();
      const light = new THREE.AmbientLight(0xffffff, 1);
      scene.add(light);

      // Add a luxury product representation (e.g., a cosmetic bottle)
      const geometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
      const material = new THREE.MeshStandardMaterial({ color: 'orange', metalness: 0.8, roughness: 0.2 });
      const cylinder = new THREE.Mesh(geometry, material);
      scene.add(cylinder);

      const animate = () => {
        requestAnimationFrame(animate);
        cylinder.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    }
  }, []);

  return (
    <div ref={sceneRef} className="w-full h-full">
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <animated.mesh
          scale={hovered.scale}
          onPointerOver={() => setHovered({ scale: 1.1 })}
          onPointerOut={() => setHovered({ scale: 1 })}
        >
          <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
          <meshStandardMaterial color="orange" />
        </animated.mesh>
      </Canvas>
    </div>
  );
};

const LuxuryLRPCosmetics: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold text-orange-600 mb-6">Welcome to luxury LRP cosmetics</h1>
      <p className="text-xl text-gray-700 mb-4">Experience the elegance of high-end cosmetics.</p>
      <p className="text-md text-gray-500 mb-8">Our products are designed for the discerning customer who values quality and luxury.</p>
      <Scene />
      <footer className="mt-12">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} luxury LRP cosmetics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LuxuryLRPCosmetics;