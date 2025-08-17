import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook to create 3D interactions for luxury LRP cosmetics
 * This hook sets up a 3D scene using three.js that can be used for showcasing products
 * with elegant and luxurious designs, appropriate to the cosmetics industry.
 * 
 * @returns {Object} - Contains the Three.js scene, camera, and renderer setup.
 */
const use3D = () => {
    const sceneRef = useRef<THREE.Scene | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const animationFrameRef = useRef<number | null>(null);

    useEffect(() => {
        // Set up the scene
        sceneRef.current = new THREE.Scene();
        sceneRef.current.background = new THREE.Color(0xffffff); // White background

        // Set up camera
        cameraRef.current = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        cameraRef.current.position.z = 5;

        // Set up renderer
        rendererRef.current = new THREE.WebGLRenderer({ alpha: true });
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(rendererRef.current.domElement);

        // Create a luxurious 3D object (e.g., a cosmetic bottle)
        const geometry = new THREE.BoxGeometry(1, 2, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xffa500, metalness: 0.8, roughness: 0.2 }); // Luxurious orange color
        const cube = new THREE.Mesh(geometry, material);
        sceneRef.current.add(cube);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        sceneRef.current.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        sceneRef.current.add(pointLight);

        // Animation loop
        const animate = () => {
            if (cube) {
                cube.rotation.x += 0.01;
                cube.rotation.y += 0.01;
            }
            rendererRef.current?.render(sceneRef.current!, cameraRef.current!);
            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            if (cameraRef.current) {
                cameraRef.current.aspect = window.innerWidth / window.innerHeight;
                cameraRef.current.updateProjectionMatrix();
            }
            rendererRef.current?.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', handleResize);
            if (rendererRef.current) {
                document.body.removeChild(rendererRef.current.domElement);
            }
        };
    }, []);

    return {
        scene: sceneRef.current,
        camera: cameraRef.current,
        renderer: rendererRef.current,
    };
};

export default use3D;