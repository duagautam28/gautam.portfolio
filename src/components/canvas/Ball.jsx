import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[0, 0, 1]} />
      <mesh castShadow receiveShadow scale={2.75} rotation={[0, Math.PI / 2 - 0.2, 0]}>
        <icosahedronGeometry args={[1, 1]} />
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

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 23 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;