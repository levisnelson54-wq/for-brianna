import { useRef, useState } from "react";
import "./MusicPlayer.css";

function MusicPlayer() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.65);
  const [message, setMessage] = useState("A little music, just for you ♡");

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      setMessage("Paused for a little moment ♡");
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
      setMessage("Now playing, just for you ♡");
    } catch {
      setPlaying(false);
      setMessage("Add your song to bring this moment to life 🎵");
    }
  };

  const changeVolume = (event) => {
    const newVolume = Number(event.target.value);

    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <aside className="music-player">
      <audio
        ref={audioRef}
        src="/assets/music/birthday-song.mp3"
        loop
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />

      <div className={`music-disc ${playing ? "music-playing" : ""}`}>
        <span>♫</span>
      </div>

      <div className="music-details">
        <p className="music-label">BRIANNA'S SOUNDTRACK</p>

        <p className="music-message">{message}</p>

        <div className="music-controls">
          <button
            className="music-button"
            onClick={toggleMusic}
            aria-label={playing ? "Pause music" : "Play music"}
          >
            {playing ? "Ⅱ Pause" : "▶ Play"}
          </button>

          <label className="volume-control">
            <span>♪</span>

            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={changeVolume}
              aria-label="Music volume"
            />
          </label>
        </div>
      </div>
    </aside>
  );
}

export default MusicPlayer;