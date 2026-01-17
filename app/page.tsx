// "use client";

// import { Canvas, useLoader } from "@react-three/fiber"; // useLoader 추가
// import { OrbitControls, Stage } from "@react-three/drei";
// import { Suspense } from "react";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"; // 직접 로더 가져오기

// function RobotModel() {
//   // useOBJ 대신 useLoader를 사용합니다.
//   const obj = useLoader(OBJLoader, "/models/000.obj"); 
  
//   return <primitive object={obj} scale={0.5} />;
// }

// export default function Home() {
//   return (
//     <main style={{ width: "100vw", height: "100vh", backgroundColor: "#050505" }}>
//       <div style={{ position: "absolute", top: "40px", left: "40px", zIndex: 1, color: "#fff" }}>
//         <h1 style={{ fontSize: "2rem", letterSpacing: "-1px" }}>Sejun-ahn's Page</h1>
//         <p style={{ color: "#0070f3" }}>Good to see you</p>
//       </div>

//       <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
//         <Suspense fallback={null}>
//           <Stage environment="city" intensity={0.6}>
//             <RobotModel />
//           </Stage>
//         </Suspense>
//         <OrbitControls makeDefault />
//       </Canvas>

//       <div style={{ position: "absolute", bottom: "40px", width: "100%", textAlign: "center", color: "#444" }}>
//         USE MOUSE TO ROTATE AND ZOOM
//       </div>
//     </main>
//   );
// }

"use client";
import Image from "next/image";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-8 py-16 max-w-4xl mx-auto font-sans">
      {/* 1. Introduction */}
      <section className="mb-16 flex flex-col md:flex-row-reverse gap-8 items-start justify-between">
        {/* 프로필 사진: 오른쪽 배치 */}
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
          <Image
            src="/profile.jpg" // public 폴더에 본인 사진을 넣으세요
            alt="Sejun Ahn"
            width={200}
            height={200}
            className="rounded-lg grayscale hover:grayscale-0 transition-all duration-300 object-cover shadow-md"
          />
        </div>

        {/* 자기소개 텍스트: 왼쪽 배치 */}
        <div className="flex-grow">
          <h1 className="text-4xl font-bold mb-4 tracking-tight">안세준 (Sejun Ahn)</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-2xl">
            안녕하세요, 저는 **[현재 소속]**에서 **[전공 분야]**를 연구하고 있는 안세준입니다. 
            주로 [관심 연구 주제]에 관심을 가지고 있으며, 데이터 기반의 의사결정과 기술적 해결책을 찾는 과정을 즐깁니다.
          </p>
          <div className="flex flex-wrap gap-4 text-blue-600 font-medium">
            <a href="mailto:your-email@example.com" className="hover:underline">Email</a>
            <a href="https://github.com/your-id" className="hover:underline">GitHub</a>
            <a href="https://scholar.google.com/..." className="hover:underline">Scholar</a>
            <a href="/cv.pdf" className="hover:underline text-gray-500 italic">[CV Download]</a>
          </div>
        </div>
      </section>

      {/* 2. Research Interests */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Research Interests</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li><strong>Keyword 1:</strong> 구체적인 연구 분야 설명 (예: Medical Imaging Analysis)</li>
          <li><strong>Keyword 2:</strong> 구체적인 연구 분야 설명 (예: Robustness in Deep Learning)</li>
          <li><strong>Keyword 3:</strong> 구체적인 연구 분야 설명</li>
        </ul>
      </section>

      {/* 3. Publications */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Publications</h2>
        <div className="space-y-6">
          <div className="group">
            <span className="text-sm font-mono text-gray-500">[Conference Name 2024]</span>
            <p className="text-md mt-1">
              <strong>Paper Title: Your Amazing Research Result</strong>
            </p>
            <p className="text-sm text-gray-600">
              <strong>Sejun Ahn</strong>, Co-author 1, Co-author 2
            </p>
            <div className="mt-2 flex gap-2 text-xs">
              <span className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">[PDF]</span>
              <span className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">[Code]</span>
            </div>
          </div>
          {/* 추가 논문은 위 구조 반복 */}
        </div>
      </section>

      {/* 4. Projects */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Projects</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold underline decoration-blue-500 underline-offset-4 mb-2">Project Name</h3>
            <p className="text-sm text-gray-500 mb-2">2023.01 - 2023.12 | [지원 기관명 또는 수업명]</p>
            <p className="text-gray-700">
              해당 프로젝트의 목적과 사용한 주요 방법론을 간략하게 설명합니다. 
              본인이 맡았던 구체적인 역할(Role)과 기여도를 명시하세요.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Activities and Services */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Activities and Services</h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Graduate Teaching Assistant, OO Course</span>
            <span className="text-gray-500">2023 - Present</span>
          </div>
          <div className="flex justify-between">
            <span>Research Intern at [Company/Lab Name]</span>
            <span className="text-gray-500">2022.06 - 2022.08</span>
          </div>
          <div className="flex justify-between">
            <span>Student Volunteer, [Conference Name]</span>
            <span className="text-gray-500">2022</span>
          </div>
        </div>
      </section>

      <footer className="mt-32 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Sejun Ahn. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}