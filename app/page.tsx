"use client";

import { Canvas, useLoader } from "@react-three/fiber"; // useLoader 추가
import { OrbitControls, Stage } from "@react-three/drei";
import { Suspense } from "react";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"; // 직접 로더 가져오기

function RobotModel() {
  // useOBJ 대신 useLoader를 사용합니다.
  const obj = useLoader(OBJLoader, "/models/000.obj"); 
  
  return <primitive object={obj} scale={0.5} />;
}

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh", backgroundColor: "#050505" }}>
      <div style={{ position: "absolute", top: "40px", left: "40px", zIndex: 1, color: "#fff" }}>
        <h1 style={{ fontSize: "2rem", letterSpacing: "-1px" }}>Sejun-ahn's Page</h1>
        <p style={{ color: "#0070f3" }}>Good to see you</p>
      </div>

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <RobotModel />
          </Stage>
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>

      <div style={{ position: "absolute", bottom: "40px", width: "100%", textAlign: "center", color: "#444" }}>
        USE MOUSE TO ROTATE AND ZOOM
      </div>
    </main>
  );
}