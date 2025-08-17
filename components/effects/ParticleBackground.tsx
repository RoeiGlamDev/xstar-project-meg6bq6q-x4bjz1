import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        const particles: THREE.Points[] = [];
        const particleCount = 500;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            positions[i  3] = (Math.random() - 0.5)  10;
            positions[i  3 + 1] = (Math.random() - 0.5)  10;
            positions[i  3 + 2] = (Math.random() - 0.5)  10;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const material = new THREE.PointsMaterial({ color: 0xffa500, size: 0.05 });
        const particlesMesh = new THREE.Points(geometry, material);
        scene.add(particlesMesh);
        particles.push(particlesMesh);

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            particles.forEach(p => {
                p.rotation.y += 0.01;
            });
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            renderer.dispose();
            window.removeEventListener('resize', () => {});
        };
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
                className="text-center text-white text-5xl font-bold mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                Welcome to luxury LRP cosmetics
            </motion.h1>
            <motion.div
                className="text-center text-white text-lg mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Indulge in our exquisite range of luxury cosmetics designed for the modern beauty enthusiast.
            </motion.p>
        </div>
    );
};

export default ParticleBackground;