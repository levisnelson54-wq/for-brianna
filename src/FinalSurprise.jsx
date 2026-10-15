import { useState } from "react";
import "./FinalSurprise.css";

function FinalSurprise() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="final-surprise" id="final-surprise">
      <div className="final-surprise-card">
        <div className="final-sparkles" aria-hidden="true">
          ✨ 💗 ✨
        </div>

        <p className="final-eyebrow">ONE LAST LITTLE THING</p>

        <h2>
          Before you go,
          <span> Brianna... ❤️</span>
        </h2>

        <p className="final-intro">
          Every birthday deserves a little magic.
          But this last part isn't about cake, presents, or getting older.
          It's about you.
        </p>

        {!opened ? (
          <div className="final-locked">
            <div className="final-envelope" aria-hidden="true">
              💌
            </div>

            <p>
              There's one last message waiting for you.
              <br />
              And yes, you have to open it. 😂
            </p>

            <button
              type="button"
              className="final-button"
              onClick={() => setOpened(true)}
            >
              Open your final surprise 💗
            </button>
          </div>
        ) : (
          <div className="final-letter">
            <div className="letter-decoration" aria-hidden="true">
              🌷
            </div>

            <h3>A little message for you</h3>

            <p>
              Happy Birthday, Brianna! ❤️
            </p>

            <p>
              I hope this new chapter of your life brings you beautiful
              memories, genuine happiness, unexpected blessings, and
              countless reasons to smile.
            </p>

            <p>
              Never forget that you are special in your own way.
              Keep being yourself, keep laughing, keep dreaming, and
              never stop becoming the person you're meant to be.
            </p>

            <p>
              I made this little corner of the internet just for you
              because I wanted your birthday to have something a little
              different. Something you could open, explore, and hopefully
              smile about.
            </p>

            <p>
              So today, enjoy your moment. Eat that cake, take those
              pictures, laugh as much as you want, and make beautiful
              memories.
            </p>

            <p className="final-love">
              You deserve a beautiful birthday and an even more
              beautiful year ahead. 🥹💗
            </p>

            <div className="final-signature">
              Made with love, just for you.
              <span>— Levo 💌</span>
            </div>

            <div className="final-hearts" aria-hidden="true">
              ♡ ♥ ♡
            </div>
          </div>
        )}

        <p className="final-footer">
          Your little birthday universe will always have a special ending. ✨
        </p>
      </div>
    </section>
  );
}

export default FinalSurprise;