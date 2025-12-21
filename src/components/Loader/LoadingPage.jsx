import React from "react";

function LoadingPage() {
  return (
    <div className="fixed inset-0 bg-amber-300 flex items-center justify-center z-[9999] bg-base-100/80 backdrop-blur-3xl">
      <span className="loading loading-spinner text-primary"></span>
    </div>
  );
}

export default LoadingPage;
