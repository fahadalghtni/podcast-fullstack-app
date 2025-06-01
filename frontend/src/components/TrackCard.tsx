interface TrackCardProps {
    image: string;
    trackName: string;
    artistName: string;
  }
  
  export default function TrackCard({ image, trackName, artistName }: TrackCardProps) {
    return (
      <div className="w-[230px] flex-shrink-0 py-4">
        <img src={image} alt={trackName} className=" w-full max-h-[220px] object-cover mb-2" />
        <p className="text-sm font-semibold truncate text-white">{trackName}</p>
        <p className="text-sm text-[#cc68b2] truncate">{artistName}</p>
      </div>
    );
  }
  