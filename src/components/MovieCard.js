
import { useState } from "react";

const MovieCard = ({ movie }) => {
  // State to track hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative min-w-[320px] h-[180px] bg-gray-800 rounded-lg overflow-hidden transform transition duration-300 ${isHovered ? "scale-110 z-20 shadow-2xl" : "hover:scale-105"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
        className="w-full h-full object-cover"
      />
      {/* Overlay title on hover */}
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center transition-opacity duration-200">
          <h3 className="text-xl font-bold text-white text-center px-2 drop-shadow-lg">{movie.title}</h3>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
