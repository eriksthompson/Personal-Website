import React from "react";
import {
  
  SiPython,
  SiAnaconda,
  SiPytorch,
  SiTensorflow,
  SiNumpy,
  SiPandas,
  SiVercel,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRubyonrails
} from "react-icons/si";

export default function TechStack() {
  const technologies = [
   
    { icon: <SiPython className="w-8 h-8" />, name: "Python" },
    { icon: <SiAnaconda className="w-8 h-8" />, name: "Anaconda" },
    { icon: <SiPytorch className="w-8 h-8" />, name: "Pytorch" },
    { icon: <SiTensorflow className="w-8 h-8" />, name: "Tensorflow" },
    { icon: <SiNumpy className="w-8 h-8" />, name: "Numpy" },
    { icon: <SiPandas className="w-8 h-8" />, name: "Pandas" },
    { icon: <SiJavascript className="w-8 h-8" />, name: "Javascript" }, 
    { icon: <SiReact className="w-8 h-8" />, name: "React" },
    { icon: <SiVercel className="w-8 h-8" />, name: "Vercel" },
    { icon: <SiNextdotjs className="w-8 h-8" />, name: "Next.js" },
    { icon: <SiRubyonrails className="w-8 h-8" />, name: "Ruby on Rails" }
  ];

  // Create three sets of icons for seamless infinite scroll
  const scrollingIcons = [...technologies, ...technologies, ...technologies];

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Gradient overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10" />

      <div className="animate-scroll flex">
        {scrollingIcons.map((item, index) => (
          <div
            key={index}
            className="flex-none inline-flex flex-col items-center justify-center mx-8"
          >
            <span className="mb-2 text-sm text-gray-400">{item.name}</span>
            <div className="w-16 h-16 rounded-xl bg-gray-800 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-200">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: fit-content;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.33% - 2px));
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
