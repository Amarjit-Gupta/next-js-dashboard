const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-green-500"></div>

        {/* Text */}
        <p className="text-gray-600 font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Loading;
