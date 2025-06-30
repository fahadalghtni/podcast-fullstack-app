import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TrackSection from "@/components/TrackSection";
import EpisodeSection from "@/components/EpisodesSection"; 

const API_URL = typeof window !== 'undefined' && window.location.hostname === 'localhost'
  ? 'http://localhost:3001'  // محلياً
  : 'https://podcast-fullstack-app-backend.onrender.com';  // Render
export default function Home() {
  const [tracks, setTracks] = useState([]);
  const [episodes, setEpisodes] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");
  const [contentLoading, setContentLoading] = useState(true);


  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    setContentLoading(true);
    const res = await fetch(`${API_URL}/itunes/search?term=${term}`);
    const data = await res.json();
    setTracks(data);
  };

  
const fetchEpisodes = async () => {
  const res = await fetch(`${API_URL}/itunes/all`);
  const data = await res.json();
  const limitedData = data.slice(0, 18); 
  setEpisodes(limitedData);
};

  useEffect(() => {
    const loadContent = async () => {
      await Promise.all([

        fetchEpisodes(),
        handleSearch("فنجان")
      ]);
      setContentLoading(false);
    };
    loadContent();
  }, []);

  return (
    <div className="  flex lg:grid grid-cols-6  min-h-screen w-full bg-[#1A1C2D]">
      <Sidebar />
      <div className=" col-span-5 flex-1 flex flex-col bg-[#1A1C2D]">
        <Navbar onSearch={handleSearch} />
  
        <div className=" hidden border-b border-[#28293D] bg-[#1A1C2D]">
          <p className="text-sm font-bold p-4 mb-2 text-white pt-12">
            {searchTerm ? `Top podcasts for ${searchTerm}` : "Popular new podcasts"}
          </p>
        </div>
  
        <main className="flex-1 py-6 bg-[#1A1C2D]">
  {contentLoading ? (
    <div className="flex justify-center items-center py-32">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 w-full h-full rounded-full border-1 border-purple-400 animate-ping"></div>
        <div className="absolute inset-[2px] w-[85%] h-[85%] left-[7.5%] top-[7.5%] rounded-full border-1 border-purple-500 animate-ping" style={{animationDelay: '120ms'}}></div>
        <div className="absolute inset-[4px] w-[70%] h-[70%] left-[15%] top-[15%] rounded-full border-1 border-pink-500 animate-ping" style={{animationDelay: '240ms'}}></div>
      </div>
    </div>
  ) : (
    <>
      <div className="px-4">
        <TrackSection tracks={tracks} />
      </div>
      <EpisodeSection episodes={episodes} />
    </>
  )}
</main>

      </div>
    </div>
  );
  
}
