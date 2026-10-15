import { useState } from "react";
import "./MusicPlayer.css";

function MusicPlayer() {
const [showMusicMessage, setShowMusicMessage] = useState(false);

const songUrl = "https://www.youtube.com/results?search_query=Bruno+Mars+Risk+It+All+official";

const openSong = () => {
window.open(songUrl, "_blank", "noopener,noreferrer");
setShowMusicMessage(true);
};

return ( <aside className="music-player"> <div className="music-disc">
♫ </div>

```
  <div className="music-details">
    <p className="music-title">Your Birthday Song 🎵</p>

    <p className="music-status">
      Risk It All — Bruno Mars ❤️
    </p>

    <div className="music-controls">
      <button
        type="button"
        className="music-toggle"
        onClick={openSong}
        aria-label="Listen to Risk It All by Bruno Mars"
      >
        ▶
      </button>

      <span className="music-caption">
        A little song for Brianna 💗
      </span>
    </div>

    {showMusicMessage && (
      <p className="music-open-message">
        Enjoy your song, Brianna! ❤️🎶
      </p>
    )}
  </div>
</aside>

);
}

export default MusicPlayer;
