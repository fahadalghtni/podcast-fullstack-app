import TrackCard from './TrackCard';

interface Track {
  image?: string;
  trackName: string;
  artistName: string;
  artworkUrl100?: string;
}

export default function TrackSection({ tracks }: { tracks: Track[] }) {
 

  return (
    <div className="overflow-x-scroll lg:max-w-[1170px] w-screen  pb-6  custom-scroll bg-[#1A1C2D] ">
      <div className="whitespace-nowrap">
        {tracks.map((track, index) => (
          <div key={index} className="inline-block mr-4 align-top">
            <TrackCard
               image={(track.artworkUrl100 || track.image)!}
              trackName={track.trackName}
              artistName={track.artistName}
              
            />
          </div>
        ))}
      </div>
    </div>
    
  );
  
}
