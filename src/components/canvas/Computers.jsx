import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const SimpleComputer = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  
  return (
    <primitive
      object={computer.scene}
      scale={0.3}
      position={[0, -1, 0]}
      rotation={[0, -0.3, 0]}
    />
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

  if (isMobile) {
    // Ultra-minimal mobile version
    return (
      <div className="absolute bottom-20 right-4 w-32 h-32 z-10">
        <Canvas
          dpr={[1, 1]}
          camera={{ position: [3, 1, 3], fov: 50 }}
          gl={{ 
            alpha: true,
            antialias: false,
            powerPreference: "low-power"
          }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <SimpleComputer />
          </Suspense>
        </Canvas>
      </div>
    );
  }

  // Desktop version (your original)
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ 
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <hemisphereLight intensity={2} groundColor='black' />
          <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            intensity={7}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight intensity={8} />
          <primitive
            object={useGLTF("./desktop_pc/scene.gltf").scene}
            scale={0.75}
            position={[0, -3.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;