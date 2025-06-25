"use client";

import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { Suspense } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";

const store = createXRStore();

function Parasol() {
  const { scene } = useGLTF("/models/parasol.glb");

  return <primitive object={scene} scale={0.5} position={[0, 0, -3]} />;
}

export default function ARViewer() {
  const handleEnterAR = () => {
    store.enterAR();
  };

  return (
    <div className="my-20">
      <button
        onClick={handleEnterAR}
        className="mx-auto block bg-black text-white px-6 py-3 rounded"
      >
        Enter AR Mode
      </button>

      <Canvas>
        <XR store={store}>
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Parasol />
          </Suspense>
          <OrbitControls />
        </XR>
      </Canvas>
    </div>
  );
}
