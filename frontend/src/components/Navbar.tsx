import { useState } from "react";

export default function Navbar({ onSearch }: { onSearch: (term: string) => void }) {
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term); 
    }
    setSearchTerm(term)
  };

  return (
    <div className=" bg-[#1A1C2D] text-white">
      <form onSubmit={handleSubmit} className="flex items-center justify-between px-6 py-3">
        <div className="flex g">
          <button type="button" className="p-2 rounded ">
          <svg  className="fill-[#8a8b93] hover:fill-white transition-colors  duration-100" stroke-width="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
          </button>
          <button type="button" className="p-2 rounded">
  <svg
    className="fill-[#8a8b93] hover:fill-white transition-colors duration-100"strokeWidth="0"viewBox="0 0 512 512"height="1.4em"width="1.4em"xmlns="http://www.w3.org/2000/svg">
    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
  </svg>
</button>

        </div>

        <div className="flex-1 mx-6 max-w-6xl">
         <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search through over 70 million podcasts and episodes..." className="w-full border border-[#50515d] rounded-lg text-sm text-center text-white placeholder-gray-400 px-4 py-1 rounded focus:outline-none"   />
        </div>
        <div className=" flex items-center gap-2 ">
          <button
            type="submit"
            className="text-sm bg-[#3b6287] px-3 py-1 rounded hover:border-white flex items-center gap-1"
          >
            Search
          </button>
          <button className="text-sm bg-[#3b6287] px-4 py-1 rounded hover:bg-gray-300 flex items-center gap-1">
            Sign up
          </button>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="jsx-8dd1f9521a2787d1 jsx-1363621759" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

        </div>
        
      </form>
      <div className="flex  justify-between items-center p-4 pt-10 border-b border-[#28293D]">
          <p className="text-sm font-bold   text-white ">
            {searchTerm ? `Top podcasts for ${searchTerm}` : "Popular new podcasts"}
          </p>
          <div className="flex items-center gap-1">

            <svg  className="fill-[#8a8b93] hover:fill-white transition-colors  duration-100" stroke-width="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
          <svg
    className="fill-[#8a8b93] hover:fill-white transition-colors duration-100"strokeWidth="0"viewBox="0 0 512 512"height="1.4em"width="1.4em"xmlns="http://www.w3.org/2000/svg">
    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
  </svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="jsx-8dd1f9521a2787d1 jsx-1363621759" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

          </div>
        </div>
    </div>
  );
}
