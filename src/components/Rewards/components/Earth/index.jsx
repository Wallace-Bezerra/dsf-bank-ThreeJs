import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Planet } from "./planet";

export const EarthComponent = () => {
  const [scale, setScale] = useState(3);
  useEffect(() => {
    const ResizeComponent = () => {
      if (window.innerWidth <= 1024) {
        setScale(3);
      } else {
        setScale(3);
      }
    };
    window.addEventListener("resize", ResizeComponent);

    return () => {
      window.removeEventListener("resize", ResizeComponent);
    };
  }, []);
  return (
    <Canvas resize={{ scroll: false }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={0.05} color="lightblue" />
        <pointLight color="white" intensity={1} position={[10, 10, 10]} />
        <spotLight
          intensity={0.5}
          position={[9, 6, 0]}
          penumbra={1}
          castShadow
        />
        <Planet scale={scale} />
      </Suspense>
    </Canvas>
  );
};
