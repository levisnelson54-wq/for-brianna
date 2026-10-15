import { useState } from "react";
import "./LoveLetter.css";

function LoveLetter() {
  const [opened, setOpened] = useState(false);
  const [lastSurprise, setLastSurprise] = useState(false);

  return (
    <section className="love-letter-section" id="something-special">
      <div className="love-letter-stars" aria-hidden="true">
        ✦　♡　✧　♡　✦
      </div>

      <p className="love-letter-eyebrow">A LITTLE PIECE OF MY HEART</p>

      <h2 className="love-letter-heading">
        If You Could See Yourself
        <span> Through My Eyes ❤️</span>
      </h2>

      <p className="love-letter-intro">
        Brianna, there's something I made just for you.
        <br />
        No big occasion needed. Just something from my heart to yours.
      </p>

      {!opened ? (
        <div className="love-letter-envelope">
          <div className="envelope-heart" aria-hidden="true">
            💌
          </div>

          <p>
            A little letter, a few honest feelings,
            <br />
            and something I wanted you to know.
          </p>

          <button
            className="love-letter-button"
            onClick={() => setOpened(true)}
          >
            Open your little surprise 💗
          </button>

          <span className="envelope-note">Made especially for Brianna</span>
        </div>
      ) : (
        <article className="love-letter-paper">
          <div className="letter-top-heart" aria-hidden="true">
            ♡
          </div>

          <p className="letter-dear">Hey, Brianna, ❤️</p>

          <p>
            If you could see yourself through my eyes, even for a little
            moment, maybe you'd understand why you make me smile the way
            you do.
          </p>

          <p>
            It's the little things. The moments. The way you can cross my
            mind unexpectedly and somehow make an ordinary day feel a
            little different.
          </p>

          <p>
            I like having you in my world. And honestly, I'd love to know
            you more deeply, hear about your day, laugh with you over the
            most random things, and make memories that we can look back
            on and smile about.
          </p>

          <p>
            I'd love the chance to spend more time with you, understand
            you better, and see where this connection between us could
            go. Not because everything needs to be figured out today,
            but because I think some connections deserve the chance to
            become something beautiful, one moment at a time.
          </p>

          <div className="letter-highlight">
            I don't want to rush anything or put pressure on you.
            I just want to be honest about how I feel.
          </div>

          <p>
            I want to share more laughs with you, create little memories,
            be someone who makes your days brighter, and discover all
            those little things that make you the person you are.
          </p>

          <p>
            I don't know exactly what the future holds, and that's okay.
            For now, I'm just glad you're in my world, and I'd love the
            opportunity to keep getting closer to you.
          </p>

          <p className="letter-emphasis">
            You're special to me, Brianna. And I'm really glad you're you. ❤️
          </p>

          <p>
            So today, let yourself be celebrated. Laugh a little louder,
            smile a little longer, and enjoy every bit of your special day.
            You deserve beautiful moments and so many reasons to smile.
          </p>

          <p>
            And if this little letter gives you even one extra reason to
            smile, then I'm glad I wrote it.
          </p>

          <div className="letter-signoff">
            <p>Happy birthday, beautiful. 🌷</p>
            <span>With a smile that you probably caused,</span>
            <strong>Levo ❤️</strong>
          </div>

          {!lastSurprise ? (
            <button
              className="love-letter-button last-surprise-button"
              onClick={() => setLastSurprise(true)}
            >
              One last thing… ✨
            </button>
          ) : (
            <div className="last-love-surprise">
              <span className="surprise-heart" aria-hidden="true">
                💗
              </span>

              <p>
                If life gives us the chance to make more memories together,
                I hope we fill them with laughter, kindness, little adventures,
                and moments that make us both happy.
              </p>

              <strong>
                No pressure. No rush. Just a little hope for something beautiful. ❤️
              </strong>

              <span className="surprise-sparkles" aria-hidden="true">
                ✨ ♡ ✨
              </span>
            </div>
          )}
        </article>
      )}

      <p className="love-letter-footer">
        Some people make ordinary moments feel special. You're one of those
        people to me. ♡
      </p>
    </section>
  );
}

export default LoveLetter;
