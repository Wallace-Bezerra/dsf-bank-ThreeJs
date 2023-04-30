import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

useGLTF.preload("/planet/scene.gltf");
const Earth = ({ scale }) => {
  const earth = useGLTF("/planet/scene.gltf");
  return <primitive object={earth.scene} scale={scale} />;
};

export const EarthComponent = () => {
  const [scale, setScale] = useState(3);
  useEffect(() => {
    const ResizeComponent = () => {
      console.log("Rezieeee");
      if (window.innerWidth <= 1024) {
        setScale(3);
      } else {
        setScale(3);
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
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={0.05} color="lightblue" />
        <pointLight color="white" intensity={1} position={[10, 10, 10]} />
        <spotLight
          intensity={0.5}
          position={[9, 6, 0]}
          penumbra={1}
          castShadow
        />
        <Earth scale={scale} />
      </Suspense>
    </Canvas>
  );
};
