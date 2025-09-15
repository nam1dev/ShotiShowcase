import VideoPlayer from '../VideoPlayer';

export default function VideoPlayerExample() {
  return (
    <VideoPlayer
      videoUrl="https://www.tikwm.com/video/media/hdplay/7460829747124145416.mp4"
      coverImage="https://www.tikwm.com/video/cover/7460829747124145416.webp"
      title="Shake shake shake"
      duration={15}
    />
  );
}