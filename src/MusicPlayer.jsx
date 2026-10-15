import { useRef, useState } from "react";
import "./MusicPlayer.css";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
      alert("The song could not play. Please check the MP3 file.");
    }
  };

  return (
    <aside className="music-player">
      <audio
        ref={audioRef}
        src="/assets/music/birthday-song.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="music-disc">♫</div>

      <div className="music-details">
        <p className="music-title">For Brianna 💗</p>
        <p className="music-status">Your reggae soundtrack 🇯🇲</p>
      </div>

      <button
        type="button"
        className="music-toggle"
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "Ⅱ" : "▶"}
      </button>
    </aside>
  );
}

export default MusicPlayer;
