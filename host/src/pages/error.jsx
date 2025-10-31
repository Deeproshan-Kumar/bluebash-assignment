import { Link } from "react-router-dom";

const error = () => {
  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-black text-7xl font-bold mb-4">404 !!</h1>
        <p className="text-gray-500 mb-3">Oops, Page Not Found!</p>
        <button>
          <Link to="/" className="text-blue-500 underline-offset-2 hover:underline">Go back to home page</Link>
        </button>
      </div>
    </section>
  );
};

export default error;
