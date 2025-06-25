"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

export default function ProductViewer3D() {
  return (
    <div className="h-[80vh]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#E67E22" />
          </mesh>
          <OrbitControls enableZoom={true} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
