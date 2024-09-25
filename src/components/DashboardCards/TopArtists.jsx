import React from "react";
import { CiStreamOn } from "react-icons/ci";
import UserCard from "./UserCard";
import { useFetchUsersData } from "../../hooks/useFetchUsersData";
import { FormatNum } from "../../utils/FormatNum";

const Leaderboard = () => {
  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "topArtist";
  const { data } = useFetchUsersData({ endpoint, enabled, onError });

  const users = data?.data.sort((a, b) => b.streams - a.streams);

  return (
    <div className="md:w-full md:min-h-[430px] flex flex-col gap-10 bg-gray-800 shadow-md rounded-lg p-5 ">
      <section className="md:ml-4">
        <div className="flex gap-2 items-center">
          <CiStreamOn size={20} />
          <h3 className="text-xl">Most Streamed Artists</h3>
        </div>
      </section>

      <div className="flex flex-wrap justify-center items-center space-x-4">
        {users?.map((user) => (
          <UserCard
            key={user.rank}
            rank={user.rank}
            name={user.name}
            streams={FormatNum(user.streams)}
            playtime={user.playtime}
            followers={user.followers}
            likes={user.likes}
            imageUrl={user.imageUrl}
            isLiked={user.isLiked}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
