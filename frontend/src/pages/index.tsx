import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TrackSection from "@/components/TrackSection";
import EpisodeSection from "@/components/EpisodesSection"; // تأكد أنك سويت هذا المكون

export default function Home() {
  const [tracks, setTracks] = useState([]);
  const [episodes, setEpisodes] = useState([]); // جديد
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (term: string) => {
    setSearchTerm(term);
    const res = await fetch(`http://localhost:3004/itunes/search?term=${term}`);
    const data = await res.json();
    setTracks(data);
  };

  const fetchEpisodes = async () => {
    const res = await fetch("http://localhost:3004/itunes/all");
    const data = await res.json();
    setEpisodes(data);
  };

  useEffect(() => {
    fetchEpisodes();
    handleSearch("فنجان") // تشغيل عند أول تحميل
  }, []);

  return (
    <div className="flex h-screen bg-[#1A1C2D]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar onSearch={handleSearch} />
  
        <div className="border-b border-[#28293D] bg-[#1A1C2D]">
          <p className="text-sm font-bold p-4 mb-2 text-white pt-12">
            {searchTerm ? `Top podcasts for ${searchTerm}` : "Popular new podcasts"}
          </p>
        </div>
  
        <main className="flex-1  py-6 overflow-y-auto">
          <div className="px-4">

          <TrackSection tracks={tracks} />
          </div>
  
          <div className="border-b border-[#28293D] bg-[#1A1C2D]">
  <p className="text-sm font-bold p-4 mb-2 text-white pt-12">
    Top episodes for فنجان
  </p>
</div>


  
          <EpisodeSection episodes={episodes} />
        </main>
      </div>
    </div>
  );
  
}
