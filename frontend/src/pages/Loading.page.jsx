
import { SparklesText } from "@/components/magicui/sparkles-text";
import React from "react";

const LoadingPage = () => {
  return (
    <div
      className="text-white flex items-center justify-center min-h-screen bg-[#1a1a1a]"
      style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}
    >
      <SparklesText>Loading...</SparklesText>
    </div>
  );
};

export default LoadingPage;
