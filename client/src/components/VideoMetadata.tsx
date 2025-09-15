import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Video } from 'lucide-react';

interface VideoMetadataProps {
  username: string;
  nickname: string;
  region: string;
  totalVids: number;
}

export default function VideoMetadata({ username, nickname, region, totalVids }: VideoMetadataProps) {
  const getRegionFlag = (region: string) => {
    const flags: { [key: string]: string } = {
      'PH': '🇵🇭',
      'US': '🇺🇸',
      'JP': '🇯🇵',
      'KR': '🇰🇷',
      'TH': '🇹🇭',
    };
    return flags[region] || '🌍';
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <Avatar className="w-12 h-12">
            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username || 'user'}`} />
            <AvatarFallback data-testid="text-avatar-fallback">
              {(nickname?.charAt(0) ?? "?").toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-medium text-foreground truncate" data-testid="text-nickname">
                {nickname || "Unknown Creator"}
              </h4>
              {region && (
                <Badge variant="outline" className="text-xs">
                  <MapPin className="w-3 h-3 mr-1" />
                  {getRegionFlag(region)} {region}
                </Badge>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-2" data-testid="text-username">
              @{username || "unknown"}
            </p>
            
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Video className="w-3 h-3" />
              <span data-testid="text-total-videos">{formatNumber(totalVids)} videos</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}