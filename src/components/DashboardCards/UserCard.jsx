import React from "react";

const UserCard = ({
  rank,
  name,
  streams,
  playtime,
  followers,
  likes,
  imageUrl,
  isLiked,
}) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-[95%] md:w-[12rem] h-[300px] relative border-4 border-orange-400">
      {/* Rank */}
      <div className="absolute -top-1 -left-1 bg-orange-400 text-white w-7 h-7 flex items-center justify-center rounded-tl-md rounded-br-md font-bold">
        {rank}
      </div>

      {/* User Image */}
      <div className="w-16 h-16 mx-auto mb-4">
        <img
          src={imageUrl}
          alt={`${name}`}
          className="rounded-full w-full h-full object-cover"
        />
      </div>

      {/* User Info */}
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-lg font-semibold">{name}</h3>

        <div className="flex gap-1 justify-center items-center">
          <p className="opacity-60">Streams:</p>
          <span className="font-semibold">{streams}</span>
        </div>

        <div className="flex gap-1 justify-center items-center">
          <p className="opacity-60">Playtime:</p>
          <span className="font-semibold">{playtime}</span>
        </div>

        <div className="flex gap-1 justify-center items-center">
          <p className="opacity-60">Followers:</p>
          <span className="font-semibold">{followers}k</span>
        </div>
      </div>

      {/* Like Button */}
      <div className="mt-4 flex items-center justify-center">
        <button className="flex items-center justify-center space-x-1 px-4 py-1 rounded-full bg-orange-500">
          <span>{`${likes}k`}</span>
          <span className="material-icons">Likes</span>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
