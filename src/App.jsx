import FinalSurprise from "./FinalSurprise";
import { useState } from "react";
import "./App.css";
import MusicPlayer from "./MusicPlayer";
import BirthdayWishes from "./BirthdayWishes";
import MemoriesGallery from "./MemoriesGallery";

function App() {
const [started, setStarted] = useState(false);
const [buttonPosition, setButtonPosition] = useState({
top: "50%",
left: "50%",
});
const [escapeCount, setEscapeCount] = useState(0);

// Let the button dodge a few times before opening the surprise.
const moveButton = () => {
if (escapeCount >= 3) {
setStarted(true);
return;
}

setButtonPosition({
  top: `${20 + Math.random() * 60}%`,
  left: `${20 + Math.random() * 60}%`,
});

setEscapeCount((count) => count + 1);

};

const openSurprise = () => {
setStarted(true);
};

return ( <main className="birthday-page">
{/* Animated stars in the background */} <div className="stars" aria-hidden="true">
{Array.from({ length: 45 }, (_, index) => (
<span
className="star"
key={index}
style={{
left: `${(index * 37 + 11) % 100}%`,
top: `${(index * 61 + 7) % 100}%`,
animationDelay: `${(index % 8) * 0.4}s`,
}}
/>
))} </div>

```
  {/* Floating hearts */}
  <div className="floating-heart heart-one" aria-hidden="true">
    ♡
  </div>

  <div className="floating-heart heart-two" aria-hidden="true">
    ♥
  </div>

  <div className="floating-heart heart-three" aria-hidden="true">
    ♡
  </div>

  {/* Opening screen */}
  {!started ? (
    <section className="welcome-card">
      <p className="eyebrow">A LITTLE SOMETHING JUST FOR YOU</p>

      <h1>
        Happy Birthday,
        <span className="name">Brianna ❤️</span>
      </h1>

      <div className="divider" aria-hidden="true">
        <span>✧</span>
        <span>♡</span>
        <span>✧</span>
      </div>

      <p className="intro">
        Someone has been preparing a little surprise for you.
        <br />
        A little love, a little laughter, and a few things
        <br />
        that might make your heart smile.
      </p>

      <p className="playful-note">
        Psst... try catching the button below. 👀
      </p>

      {/* Fun Swahili message */}
      <p className="brianna-quote">
        😂 Mambo kidogo hii, mambo madogo madogo! 🤏🏽💃🏽
      </p>

      <div className="button-playground">
        <button
          className="start-button"
          style={{
            top: buttonPosition.top,
            left: buttonPosition.left,
          }}
          onMouseEnter={moveButton}
          onTouchStart={(event) => {
            event.preventDefault();
            moveButton();
          }}
          onClick={openSurprise}
        >
          Open your surprise ✨
        </button>
      </div>

      <p className="signature">Made with love, by Levo 💌</p>
    </section>
  ) : (
    /* Birthday greeting */
    <section className="welcome-card celebration">
      <div className="celebration-icon" aria-hidden="true">
        🎂
      </div>

      <p className="eyebrow">TODAY IS ALL ABOUT YOU</p>

      <h1>
        It's your day,
        <span className="name">Brianna! ❤️</span>
      </h1>

      <p className="intro">
        Happy birthday to a truly beautiful soul.
        <br />
        This little corner of the internet belongs to you today.
        <br />
        And trust me... there's more waiting for you. 🥹
      </p>

      <div className="birthday-balloons" aria-hidden="true">
        🎈 💗 🎈
      </div>

      <button
        className="celebrate-button"
        onClick={() =>
          document
            .getElementById("birthday-wishes")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore your birthday wishes ↓
      </button>

      <p className="signature">
        Your birthday surprise is just beginning.
      </p>
    </section>
  )}

  {/* Birthday wishes and interactive cards */}
  <BirthdayWishes />

  {/* Memories gallery */}
  <MemoriesGallery />

  {/* Final birthday surprise */}
<FinalSurprise />

  {/* Footer */}
  <footer className="page-footer">
    A little universe, created just for Brianna ✨
  </footer>

  {/* Persistent music player */}
  <MusicPlayer />
</main>

);
}

export default App;
