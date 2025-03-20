import React from "react";
import ReplyGenerator from "./ReplyGenerator";
import { Github, Linkedin } from "lucide-react";
import "../styles/profile.css";
import "../styles/background-grid.css";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white grid-background flex flex-col items-center justify-center p-4 md:p-8">
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
          <p className="mb-8">
            Powered by Gemini AI • Create intelligent, context-aware responses
          </p>

          {/* Developer Profile Section */}
          <section className="mt-16 profile-container overflow-hidden max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row bg-white">
              {/* Left side with image */}
              <div className="p-8 flex flex-col items-center justify-center md:w-1/3" style={{ backgroundColor: "#f87315" }}>
                <div className="rounded-full border-4 border-white overflow-hidden w-40 h-40 mb-6">
                  <img
                    src="https://i.ibb.co/dJDNRSCD/148.jpg"
                    alt="Shravan Kondekar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="font-bold py-2 px-6 rounded-full" style={{ backgroundColor: "white", color: "#f87315" }}>
                  Lead Developer
                </div>
              </div>

              {/* Right side with info */}
              <div className="p-8 md:w-2/3">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  Shravan Kondekar
                </h2>
                <h3 className="text-xl text-orange-500 font-semibold mb-4">
                  Full Stack Developer
                </h3>

                <p className="text-gray-600 mb-8">
                  Passionate about creating secure and user-friendly
                  applications that make a difference. Leading the development
                  of Genify with a focus on security and accessibility.
                </p>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-orange-50 p-4 rounded-lg md:w-1/2">
                    <h4 className="text-orange-500 font-semibold mb-2">
                      Expertise
                    </h4>
                    <p className="text-gray-700">
                      React, Node.js, Tailwind CSS, TypeScript
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg md:w-1/2">
                    <h4 className="text-orange-500 font-semibold mb-2">
                      Experience
                    </h4>
                    <p className="text-gray-700">
                      Building Scalable Web & Mobile Solutions :)
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex gap-4">
                  <a
                    href="https://github.com/sxrvn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg"
                  >
                    <Github size={20} /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shravan-kondekar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition-colors py-2 px-4 rounded-lg"
                  >
                    <Linkedin size={20} /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
};

export default Home;
