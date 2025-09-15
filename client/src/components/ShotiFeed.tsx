import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw, AlertCircle } from 'lucide-react';
import VideoPlayer from './VideoPlayer';
import VideoMetadata from './VideoMetadata';
import DeveloperProfile from './DeveloperProfile';

interface VideoData {
  title: string;
  cover_image: string;
  shotiurl: string;
  username: string;
  nickname: string;
  duration: number;
  region: string;
  total_vids: number;
}

export default function ShotiFeed() {
  const [refreshKey, setRefreshKey] = useState(0);

  const { data: videoData, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ['shoti-video', refreshKey],
    queryFn: async (): Promise<VideoData> => {
      const response = await fetch('/api/shoti');
      if (!response.ok) {
        throw new Error('Failed to fetch video');
      }
      const raw = await response.json();
      
      if (raw.error) {
        throw new Error(raw.error);
      }
      
      if (!raw.title && !raw.cover_image && !raw.shotiurl) {
        throw new Error('Invalid video data received');
      }
      
      return {
        title: raw.title ?? "Untitled Video",
        cover_image: raw.cover_image ?? "",
        shotiurl: raw.shotiurl ?? raw.url ?? "",
        username: raw.username ?? raw.author ?? "unknown",
        nickname: raw.nickname ?? raw.author ?? raw.username ?? "Unknown Creator",
        duration: Number(raw.duration ?? 15),
        region: raw.region ?? "GL",
        total_vids: Number(raw.total_vids ?? 0),
      } as VideoData;
    },
    retry: 1,
  });

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
    refetch();
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="w-full max-w-sm mx-auto bg-card rounded-lg aspect-[9/16] animate-pulse"></div>
        <div className="w-full max-w-sm mx-auto h-24 bg-card rounded-lg animate-pulse"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4">
        <Card className="w-full max-w-sm">
          <CardContent className="p-6 text-center">
            <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
            <h3 className="font-medium mb-2">Failed to load video</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Unable to fetch video from Shoti API
            </p>
            <Button onClick={handleRefresh} data-testid="button-retry">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="flex items-center justify-between p-4 max-w-lg mx-auto">
          <h1 className="text-2xl font-display font-bold text-primary" data-testid="text-app-title">
            Shoti
          </h1>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleRefresh}
            disabled={isFetching}
            data-testid="button-refresh"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isFetching ? 'animate-spin' : ''}`} />
            {isFetching ? 'Loading...' : 'New Video'}
          </Button>
        </div>
      </header>

      <main className="p-4 space-y-6 max-w-lg mx-auto">
        {videoData && (
          <>
            <VideoPlayer
              videoUrl={videoData.shotiurl}
              coverImage={videoData.cover_image}
              title={videoData.title}
              duration={videoData.duration}
            />
            
            <VideoMetadata
              username={videoData.username}
              nickname={videoData.nickname}
              region={videoData.region}
              totalVids={videoData.total_vids}
            />
          </>
        )}
        
        <div className="pt-4 border-t">
          <h2 className="text-lg font-display font-semibold mb-4 text-center" data-testid="text-developer-section">
            About the Developer
          </h2>
          <DeveloperProfile />
        </div>
      </main>
    </div>
  );
}