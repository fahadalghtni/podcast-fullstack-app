import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Navbar({ onSearch }: { onSearch: (term: string) => void }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term); // نرسل الكلمة للبارنت
    }
  };

  return (
    <div className=" bg-[#1A1C2D] text-white">
      <form onSubmit={handleSubmit} className="flex items-center justify-between px-6 py-3">
        <div className="flex gap-2">
          <button type="button" className="p-2 rounded hover:bg-[#3A3C4F]">
            <ArrowLeft size={16} />
          </button>
          <button type="button" className="p-2 rounded hover:bg-[#3A3C4F]">
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex-1 mx-6 max-w-6xl">
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search through over 70 million podcasts and episodes..."
            className="w-full border border-[#50515d] text-sm text-center text-white placeholder-gray-400 px-4 py-1 rounded focus:outline-none"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="text-sm bg-[#3b6287] px-3 py-1 rounded hover:border-white flex items-center gap-1"
          >
            Search
          </button>
          <button className="text-sm bg-[#3b6287] px-4 py-1 rounded hover:bg-gray-300 flex items-center gap-1">
            Sign up
          </button>
        </div>
        
      </form>
      
    </div>
  );
}
