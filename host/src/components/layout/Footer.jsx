const Footer = () => {
  return (
    <footer className="bg-blue-600">
      <div className="h-[4rem] flex justify-center items-center px-4">
        <p className="text-white opacity-90">
          &copy; All righs reserved React MF (React Micro Frontend - Vite Module
          Federation) {new Date().getFullYear().toString()}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
