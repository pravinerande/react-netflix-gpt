const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-lg text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;