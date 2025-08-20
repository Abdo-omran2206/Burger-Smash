"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { motion } from "motion/react";
export default function Burger() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      35,
      container.clientWidth / container.clientHeight,
      0.5,
      1000
    );
    camera.position.set(5, 2.5, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    let animationFrameId: number | null = null;

    const loader = new GLTFLoader();
    let model: THREE.Object3D | null = null;
    loader.load(
      "/cheeseburger_3d_model.glb",
      (gltf) => {
        model = gltf.scene;
        model.scale.set(1, 1, 1);
        scene.add(model);

        const animate = () => {
          animationFrameId = window.requestAnimationFrame(animate);
          if (model) {
            model.rotation.y += 0.01;
          }
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      controls.dispose();
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry?.dispose();
          const material = obj.material as THREE.Material | THREE.Material[] | undefined;
          if (Array.isArray(material)) {
            material.forEach((m) => m.dispose());
          } else {
            material?.dispose();
          }
        }
      });
      if (container && renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="flex justify-center items-center flex-row w-full h-full gap-5 px-5 max-sm:flex-col max-sm:gap-2">
      <motion.div
      initial={{opacity:0,x:-50}}
      animate={{opacity:1,x:0, transition:{duration:0.5}}}
      className="w-[50%] max-w-[640px] max-sm:w-[100%] max-sm:text-center">
        <h1 className="text-7xl text-left max-sm:text-4xl max-sm:text-center drop-shadow-[0_4px_24px_rgba(255,191,0,0.6)]">
          Burger Smash
        </h1>
        <p className="mt-4 text-white text-2xl max-sm:text-sm">
          Welcome to Burger Smash — your neighborhood spot for juicy, smashed-to-order burgers, buttery toasted buns, and hand-cut fries.
        </p>
        <ul className="mt-4 text-white space-y-1 list-disc pl-5 text-lg max-sm:hidden">
          <li>100% fresh beef, smashed hot on the griddle</li>
          <li>House-made sauces and daily-baked buns</li>
          <li>Shakes, fries, and vegan options</li>
        </ul>
        <div className="mt-6 flex gap-3 max-sm:hidden">
          <a href="#" className="px-5 py-2 bg-black text-white border-white border-1 rounded-4xl">View Menu</a>
          <a
            href="#"
            className="px-5 py-2 rounded-4xl border border-white text-white bg-[rgba(255,255,255,0.1)] hover:text-black hover:bg-white transition-colors duration-300">
            Order Now
          </a>
        </div>
      </motion.div>
      
      <motion.div
      initial={{scale:0}}
      animate={{scale:1, transition:{duration:0.5}}}
      ref={mountRef}className="w-[50%] h-[70vh] max-sm:w-[100%] max-sm:h-[50vh]"></motion.div>
    </div>
    
  );
}
