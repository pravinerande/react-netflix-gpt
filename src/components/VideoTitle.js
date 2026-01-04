const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-full aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
      <p className="text-lg text-gray-300 max-w-2xl">{overview}</p>
      <div>
        <button className="mt-6 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition duration-300">
          <span className="mr-2">►</span>
          Play
        </button>
        <button className="mt-6 ml-4 px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-700 transition duration-300">
          <span className="mr-2 rounded-full">ℹ️</span>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
