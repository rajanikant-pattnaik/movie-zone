import React from "react";

type currProps = {
  array: string[];
  genre: String;
  setGenre: (value: String) => void;
};

const SideBar: React.FC<currProps> = ({ array, genre, setGenre }) => {
  return (
    <div className="flex">
      {array.map((item) => (
        <button
          key={item}
          className={`${
            genre === item ? "bg-red-800 text-white" : "text-white"
          } px-4 py-2 rounded-full m-1`}
          onClick={() => setGenre(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SideBar;
