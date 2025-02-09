"use client";

import React, { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  useEffect(() => {
    console.error("Error caught:", error);
  }, [error]);

  return (
    <div className="">
      <h1 className="text-3xl font-bold text-red-600">Something went wrong!</h1>
      <p className="text-gray-700 mt-2">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorPage;
