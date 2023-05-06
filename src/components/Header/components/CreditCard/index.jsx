import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Card } from "./Card";

export const CreditCardComponent = () => {
  return (
    <Canvas resize={{ scroll: false }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <spotLight position={[-3, 2, 1]} intensity={0.5} penumbra={1} />
        <Card />
      </Suspense>
    </Canvas>
  );
};
