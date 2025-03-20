import React from "react";
import ReplyGenerator from "./ReplyGenerator";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 flex flex-col items-center justify-center p-4 md:p-8 backdrop-blur-sm">
      <div className="w-full max-w-6xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Genify</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Made with love by Shravan ❤️
          </p>
        </header>

        <main>
          <ReplyGenerator />
        </main>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Powered by Gemini AI • Create intelligent, context-aware responses
            in seconds
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
