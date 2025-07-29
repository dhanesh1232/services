"use client";
import { useEffect, useState, useMemo } from "react";

const CodeTypingAnimation = () => {
  const [typedCode, setTypedCode] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Properly structured code segments with correct syntax
  const fullCode = useMemo(
    () => [
      { text: "const ", className: "text-purple-400" },
      { text: "developer", className: "text-blue-400" },
      { text: " = {", className: "" },
      { text: "\n  ", className: "" },
      { text: "name: ", className: "text-green-400" },
      { text: "'ECODrIx'", className: "text-yellow-300" },
      { text: ",", className: "" },
      { text: "\n  ", className: "" },
      { text: "specialty: ", className: "text-green-400" },
      { text: "'React & Next.js'", className: "text-yellow-300" },
      { text: ",", className: "" },
      { text: "\n  ", className: "" },
      { text: "experience: ", className: "text-green-400" },
      { text: "5+", className: "text-amber-500" },
      { text: " years", className: "text-gray-500" },
      { text: "\n", className: "" },
      { text: "};", className: "" },
      { text: "\n\n", className: "" },
      { text: "function ", className: "text-purple-400" },
      { text: "buildProject", className: "text-blue-400" },
      { text: "() {", className: "" },
      { text: "\n  ", className: "" },
      { text: "return ", className: "text-purple-400" },
      { text: "'Your Amazing Website'", className: "text-yellow-300" },
      { text: ";", className: "" },
      { text: "\n", className: "" },
      { text: "}", className: "" },
    ],
    []
  );

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (currentIndex < fullCode.length) {
      const currentSegment = fullCode[currentIndex];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        if (charIndex < currentSegment.text.length) {
          setTypedCode((prev) => {
            const newCode = [...prev];
            if (!newCode[currentIndex]) {
              newCode[currentIndex] = {
                text: "",
                className: currentSegment.className,
              };
            }
            newCode[currentIndex].text += currentSegment.text[charIndex];
            return newCode;
          });
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setCurrentIndex((prev) => prev + 1);
        }
      }, 30);

      return () => clearInterval(typeInterval);
    }
  }, [currentIndex, fullCode]);

  return (
    <div className="block ml-4 md:ml-0">
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-indigo-300 dark:border-indigo-600 rounded-xl"></div>
        <div className="relative bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="flex gap-1 p-3 bg-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-4 text-gray-300 font-mono text-sm">
              {typedCode.map((segment, index) => (
                <span key={index} className={segment.className}>
                  {segment.text}
                  {currentIndex === index && showCursor && (
                    <span className="inline-block w-2 h-5 bg-blue-400 align-middle ml-1 animate-pulse"></span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeTypingAnimation;
