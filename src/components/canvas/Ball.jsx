import { Suspense, useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float 
      speed={isMobile ? 1 : 1.75} 
      rotationIntensity={isMobile ? 0.5 : 1} 
      floatIntensity={isMobile ? 1 : 2}
    >
      <ambientLight intensity={isMobile ? 0.6 : 0.9} />
      <directionalLight position={[0, 0, 1]} intensity={isMobile ? 0.5 : 1} />
      <mesh 
        castShadow={!isMobile} 
        receiveShadow={!isMobile} 
        scale={isMobile ? 2 : 2.75} 
        rotation={[0, Math.PI / 2 - 0.2, 0]}
      >
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={1}
          flatShading
        />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={[1.25, 1.25, 1.25]}
            map={decal}
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

// Fallback 2D component for mobile
const MobileTechIcon = ({ icon, alt }) => (
  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
    <img 
      src={icon} 
      alt={alt || 'Tech icon'} 
      className="w-12 h-12 object-contain"
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.parentElement.innerHTML = '<div class="w-12 h-12 bg-gray-300 rounded"></div>';
      }}
    />
  </div>
);

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hasError, setHasError] = useState(false);

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

  // Use 2D fallback on mobile for better performance
  if (isMobile) {
    return <MobileTechIcon icon={icon} />;
  }

  if (hasError) {
    return <MobileTechIcon icon={icon} />;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows={!isMobile}
      dpr={isMobile ? [1, 1] : [1, 2]}
      camera={{ position: [20, 3, 5], fov: 23 }}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? "low-power" : "high-performance"
      }}
      onError={() => setHasError(true)}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate={!isMobile} />
        <Ball imgUrl={icon} isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;