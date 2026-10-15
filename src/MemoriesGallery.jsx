
import { useState } from "react";
import "./MemoriesGallery.css";

const memories = [
  {
    id: 1,
    title: "A Little Memory 📸",
    caption: "Some moments deserve a special place.",
    image: "/assets/images/memory-1.jpg",
    fallback: "💗",
  },
  {
    id: 2,
    title: "The Funny Side 😂",
    caption: "Because making you smile is always a good idea.",
    image: "/assets/images/funny-picture.jpg",
    fallback: "🤣",
  },
  {
    id: 3,
    title: "A Beautiful Soul ✨",
    caption: "Your heart makes you special in your own way.",
    image: null,
    fallback: "🌷",
  },
];

const videos = [
  {
    id: 1,
    title: "A Special Little Moment 💗",
    caption: "A little memory to make your birthday even more special.",
    src: "/assets/images/WhatsAppVideo%202026-10-14%20at%2023.56.11.mp4",
  },
  {
    id: 2,
    title: "Another Memory 😂",
    caption: "Because the best moments deserve to be watched again.",
    src: "/assets/images/WhatsAppVideo%202026-10-14%20at%2023.56.16.mp4",
  },
];

function MemoriesGallery() {
  const [revealed, setRevealed] = useState(false);
  const [failedImages, setFailedImages] = useState({});

  return (
    <section className="memories-section" id="memories">
      <div className="memories-heading">
        <p className="memories-eyebrow">LITTLE MOMENTS, BIG SMILES</p>

        <h2>
          A little corner of <span>memories</span> 💗
        </h2>

        <p className="memories-intro">
          A few little things to make your birthday even more special.
          Because today, we celebrate the wonderful person you are.
        </p>
      </div>

      {/* Photo memories */}
      <div className="memories-grid">
        {memories.map((memory) => (
          <article className="memory-card" key={memory.id}>
            <div className="memory-image">
              {memory.image && !failedImages[memory.id] ? (
                <img
                  src={memory.image}
                  alt={memory.title}
                  loading="lazy"
                  onError={() =>
                    setFailedImages((previous) => ({
                      ...previous,
                      [memory.id]: true,
                    }))
                  }
                />
              ) : (
                <div className="memory-placeholder" aria-hidden="true">
                  {memory.fallback}
                </div>
              )}

              <span className="memory-sparkle" aria-hidden="true">
                ✨
              </span>
            </div>

            <div className="memory-copy">
              <h3>{memory.title}</h3>
              <p>{memory.caption}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Video memories */}
      <div className="video-memories">
        <div className="video-heading">
          <p className="memories-eyebrow">PRESS PLAY AND SMILE 🎬</p>

          <h3>
            Little moments, <span>moving memories</span> 💕
          </h3>

          <p>
            Some memories are even more special when you can watch them
            again. These little videos are here just for you, Brianna.
          </p>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <article className="video-card" key={video.id}>
              <div className="video-frame">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.title}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="memory-copy">
                <h3>{video.title}</h3>
                <p>{video.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Birthday surprise */}
      <div className="funny-surprise">
        <span className="surprise-emoji" aria-hidden="true">
          🎁
        </span>

        <h3>Okay, Brianna... ready for a little surprise?</h3>

        <p>
          This one comes with a warning: possible smiling, laughing,
          and asking who came up with this idea. 😂
        </p>

        {!revealed ? (
          <button
            type="button"
            className="reveal-button"
            onClick={() => setRevealed(true)}
          >
            Open the surprise 👀
          </button>
        ) : (
          <div className="revealed-message">
            <span aria-hidden="true">🤣💗🎉</span>

            <p>
              Birthday rule number one: you're officially allowed to be
              extra today. Eat the cake, enjoy the attention, and keep
              being your wonderfully unpredictable self!
            </p>

            <p className="surprise-signature">— Levo 😌</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default MemoriesGallery;
