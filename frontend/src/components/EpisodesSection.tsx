type Episode = {
  id: string;
  artistName: string;
  artworkUrl100: string;
  collectionName: string;
  previewUrl: string;
  trackName: string;
};

export default function EpisodeSection({ episodes }: { episodes: Episode[] }) {
 
  const col1 = episodes.filter((_, i) => i % 3 === 0);
  const col2 = episodes.filter((_, i) => i % 3 === 1);
  const col3 = episodes.filter((_, i) => i % 3 === 2);

  const truncateText = (text: string, max: number) =>
    text.length > max ? text.slice(0, max) + ".." : text;

  const renderEpisode = (ep: Episode) => (
    
    <div key={ep.id} className="flex items-center justify-between hover:bg-black border-b border-[#22232a]">

      <div className="flex items-center gap-4  p-1 rounded transition ">
        <img src={ep.artworkUrl100} alt={ep.trackName}
          className="w-14 h-14 rounded object-cover "
          loading="lazy"
        />
        <div className="flex flex-col">
          <span className="font-medium text-sm">{ep.trackName}</span>
          <span className="font-bold text-xs text-[#d0ae6a]">
            {truncateText(ep.collectionName, 40)}
          </span>
        </div>
      </div>
      <div>
        <svg className="fill-[#8a8b93] hover:fill-white transition-colors duration-100" strokeWidth="0" viewBox="0 0 24 24"  height="22"  width="22" xmlns="http://www.w3.org/2000/svg" >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
        </svg>
      </div>
    </div>
  );

  return (
    <div className="mt-5 px-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>{col1.map(renderEpisode)}</div>
        <div>{col2.map(renderEpisode)}</div>
        <div>{col3.map(renderEpisode)}</div>
      </div>
    </div>
  );
}
