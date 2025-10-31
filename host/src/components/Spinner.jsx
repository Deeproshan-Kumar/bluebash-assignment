const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-white flex justify-center items-center z-[999]">
      <div>
        <div className="spinner h-12 w-12 mx-auto mb-2 rounded-full border border-blue-600 border-t-transparent animate-spin"></div>
        <span className="text-black font-medium text-center">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
