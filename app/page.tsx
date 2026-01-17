"use client";
import Image from "next/image";
import { publications } from "./types"

export default function Home() {
  const sortedPublications = [...publications].sort((a, b) => b.date.getTime() - a.date.getTime());

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
            주로 [관심 연구 주제]에 관심을 가지고 있으며, 즐깁니다
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
          <li><strong>Keyword 1:</strong> Neural</li>
          <li><strong>Keyword 2:</strong> Interaction</li>
          <li><strong>Keyword 3:</strong> Localization</li>
        </ul>
      </section>

      {/* 3. Publications */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Publications</h2>
        <div className="space-y-6">
          {sortedPublications.map((pub, index) => (
            <div key={index} className="group">
              <span className="text-sm font-mono text-gray-500">[{pub.venue}]</span>
              <p className="text-md mt-1">
                <strong>{pub.title}</strong>
              </p>
              <p className="text-sm text-gray-600">
                {pub.authors.map((author, i) => (
                  <span key={i}>
                    {/* 본인 이름일 때만 <strong> 적용 */}
                    {author === "Sejun Ahn" ? <strong>{author}</strong> : author}
                    {i < pub.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <div className="mt-2 flex gap-2 text-xs">
                {pub.pdf && (
                  <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                    [PDF]
                  </a>
                )}
                {pub.code && (
                  <a href={pub.code} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                    [Code]
                  </a>
                )}
                {pub.project_page && (
                  <a href={pub.project_page} target="_blank" rel="noopener noreferrer" className="px-2 py-1 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                    [Project Page]
                  </a>
                )}
              </div>
            </div>
          ))}
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