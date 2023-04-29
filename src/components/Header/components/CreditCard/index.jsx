import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

const CreditCard = ({ scale }) => {
  const creditCard = useGLTF("/credit_card_white/scene.gltf");
  return (
    <primitive
      object={creditCard.scene}
      scale={scale}
      position={[0, -1.5, 0]}
      rotation={[0, 2.8, 0]}
    />
  );
};

useGLTF.preload("/credit_card_white/scene.gltf");

export const CreditCardComponent = () => {
  const [scale, setScale] = useState(1.5);
  useEffect(() => {
    const ResizeComponent = () => {
      console.log("Rezieeee");
      if (window.innerWidth <= 1024) {
        setScale(0.8);
      } else {
        setScale(1.5);
      }
    };
    window.addEventListener("resize", ResizeComponent);

    console.log("useEffect");

    return () => {
      window.removeEventListener("resize", ResizeComponent);
    };
  }, []);
  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.8} />
        <spotLight position={[-3, 2, 1]} intensity={0.5} penumbra={1} />
        <CreditCard scale={scale} />
      </Suspense>
    </Canvas>
  );
};
