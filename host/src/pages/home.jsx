import { Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <section className="h-full w-full flex justify-center items-center flex-col px-4">
      <h1 className="text-2xl font-bold text-black mb-4 border-l-4 border-l-blue-500 ps-4">React Micro Frontend - Vite Plugin Module Federation</h1>
      <div className="flex flex-wrap gap-4">
        <button className="bg-blue-500 rounded-md">
          <Link
            to="/chat"
            className="text-white text-md font-medium flex gap-2 p-4"
          >
            <MessageSquare size={24} /> Chat Application
          </Link>
        </button>
        <button className="bg-blue-500 rounded-md">
          <Link
            to="/email"
            className="text-white text-md font-medium flex gap-2 p-4"
          >
            <Mail size={24} /> Email Application
          </Link>
        </button>
      </div>
    </section>
  );
};

export default home;
