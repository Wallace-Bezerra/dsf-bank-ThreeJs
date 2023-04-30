import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { color } from "framer-motion";
import { Suspense } from "react";

const CreditCard = () => {
  const creditCard = useGLTF("/credit_card_white/scene.gltf");
  return (
    <primitive
      object={creditCard.scene}
      scale={1.8}
      position={[0, -1.5, 0]}
      rotation={[0, 2.8, 0]}
    />
  );
};

useGLTF.preload("/credit_card_white/scene.gltf");

export const CreditCardComponent = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <spotLight position={[-3, 2, 1]} intensity={0.5} penumbra={1} />
        <CreditCard />
      </Suspense>
    </Canvas>
  );
};
