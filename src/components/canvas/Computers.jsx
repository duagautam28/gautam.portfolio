import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Use the original path - the difference was minimal
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Much lower intensity for mobile */}
      <hemisphereLight 
        intensity={isMobile ? 0.8 : 2} 
        groundColor='black' 
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 2 : 7}  // Reduced from 7 to 2 on mobile
        castShadow={!isMobile}  // Disable shadows on mobile
        shadow-mapSize={isMobile ? 256 : 1024}  // Much smaller shadow maps
      />
      <pointLight 
        intensity={isMobile ? 2 : 8}  // Reduced from 8 to 2 on mobile
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows={!isMobile}  // Disable shadows completely on mobile
      dpr={isMobile ? [1, 1] : [1, 2]}  // Force 1x DPR on mobile - CRITICAL!
      camera={{ 
        position: [20, 3, 5], 
        fov: isMobile ? 35 : 25  // Wider FOV on mobile = less rendering
      }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: false,  // Disable antialiasing - big performance gain
        alpha: true,       // Enable alpha channel for transparency
        powerPreference: isMobile ? "low-power" : "high-performance"
      }}
      style={{ 
        width: '100%', 
        height: '100%',
        touchAction: 'none'
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={!isMobile}  // Disable damping on mobile
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;