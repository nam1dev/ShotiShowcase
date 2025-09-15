import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface VideoPlayerProps {
  videoUrl: string;
  coverImage: string;
  title: string;
  duration: number;
}

export default function VideoPlayer({ videoUrl, coverImage, title, duration }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showCover, setShowCover] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
      setShowCover(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const formatDuration = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative w-full max-w-sm mx-auto bg-card rounded-lg overflow-hidden aspect-[9/16]">
      {showCover && (
        <div 
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{ backgroundImage: `url(${coverImage})` }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}
      
      <video
        ref={videoRef}
        src={videoUrl}
        className="w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        onEnded={() => setIsPlaying(false)}
        data-testid="video-player"
      />

      <div className="absolute top-4 right-4 z-20">
        <Badge variant="secondary" className="bg-black/60 text-white border-0">
          {formatDuration(duration)}
        </Badge>
      </div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <Button
          size="icon"
          onClick={togglePlay}
          className="bg-black/60 hover:bg-black/80 border-0 h-16 w-16"
          data-testid="button-play-pause"
        >
          {isPlaying ? (
            <Pause className="h-8 w-8 text-white" />
          ) : (
            <Play className="h-8 w-8 text-white ml-1" />
          )}
        </Button>
      </div>

      <div className="absolute bottom-4 right-4 z-20">
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleMute}
          className="bg-black/60 hover:bg-black/80 border-0"
          data-testid="button-mute"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4 text-white" />
          ) : (
            <Volume2 className="h-4 w-4 text-white" />
          )}
        </Button>
      </div>

      <div className="absolute bottom-4 left-4 right-16 z-20">
        <h3 className="text-white font-medium text-lg leading-tight drop-shadow-lg" data-testid="text-video-title">
          {title}
        </h3>
      </div>
    </div>
  );
}