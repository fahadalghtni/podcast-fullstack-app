import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TrackSection from "@/components/TrackSection";
import EpisodeSection from "@/components/EpisodesSection"; 

export default function Home() {
  const [tracks, setTracks] = useState([]);
  const [episodes, setEpisodes] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    const res = await fetch(`https://podcast-fullstack-app-backend.onrender.com/itunes/search?term=${term}`);
    const data = await res.json();
    setTracks(data);
  };

  
const fetchEpisodes = async () => {
  const res = await fetch("https://podcast-fullstack-app-backend.onrender.com/itunes/all");
  const data = await res.json();
  const limitedData = data.slice(0, 18); 
  setEpisodes(limitedData);
};

  useEffect(() => {
    fetchEpisodes();
    handleSearch("فنجان")
  }, []);

  return (
    <div className="  flex lg:grid grid-cols-6  h-full w-full bg-[#1A1C2D]">
      <Sidebar />
      <div className=" col-span-5 flex-1 flex flex-col">
        <Navbar onSearch={handleSearch} />
  
        <div className=" hidden border-b border-[#28293D] bg-[#1A1C2D]">
          <p className="text-sm font-bold p-4 mb-2 text-white pt-12">
            {searchTerm ? `Top podcasts for ${searchTerm}` : "Popular new podcasts"}
          </p>
        </div>
  
        <main className="flex-1  py-6  bg-[#1A1C2D]">
          <div className="px-4 ">

          <TrackSection tracks={tracks} />
          </div>
  
   


  
          <EpisodeSection episodes={episodes} />
        </main>
      </div>
    </div>
  );
  
}
