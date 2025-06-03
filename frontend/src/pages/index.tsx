import { GetStaticProps } from "next";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TrackSection from "@/components/TrackSection";
import EpisodeSection from "@/components/EpisodesSection";
import { useState } from "react";

export default function Home({ initialTracks, initialEpisodes, initialSearchTerm }) {
  const [tracks, setTracks] = useState(initialTracks);
  const [episodes] = useState(initialEpisodes);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    const res = await fetch(`https://podcast-fullstack-app-backend.onrender.com/itunes/search?term=${term}`);
    const data = await res.json();
    setTracks(data);
  };

  return (
    <div className="flex h-screen bg-[#1A1C2D]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar onSearch={handleSearch} />

        <main className="flex-1 py-6 overflow-y-auto">
          <div className="px-4">
            <TrackSection tracks={tracks} />
          </div>

          <div className="border-b border-[#28293D] bg-[#1A1C2D]">
            <p className="text-sm font-bold p-4 mb-2 text-white pt-12">
              Top episodes for {searchTerm}
            </p>
          </div>

          <EpisodeSection episodes={episodes} />
        </main>
      </div>
    </div>
  );
}


export const getStaticProps: GetStaticProps = async () => {
  const term = "فنجان";

  const [resTracks, resEpisodes] = await Promise.all([
    fetch(`https://podcast-fullstack-app-backend.onrender.com/itunes/search?term=${term}`),
    fetch(`https://podcast-fullstack-app-backend.onrender.com/itunes/all`),
  ]);

  const tracks = await resTracks.json();
  let episodes = await resEpisodes.json();
  episodes = episodes.slice(0, 18);

  return {
    props: {
      initialTracks: tracks,
      initialEpisodes: episodes,
      initialSearchTerm: term,
    },
    revalidate: 3600, 
  };
};
