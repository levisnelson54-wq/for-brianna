import { useState } from "react";
import "./BirthdayWishes.css";

const wishes = [
{
icon: "🌷",
category: "A WISH FOR YOUR HEART",
title: "A beautiful year",
preview: "If I could wrap happiness into a little box...",
message:
"Happy birthday, Brianna. ❤️ I hope this new chapter of your life is filled with the kind of happiness that finds you even on ordinary days. May you wake up with peace in your heart, find reasons to laugh when you least expect them, and experience beautiful opportunities that remind you how much life has to offer. May the things you have been quietly wishing for begin to find their way to you. And when life gets difficult, I hope you always find the strength to keep going, the courage to keep believing, and the people who remind you that you never have to have everything figured out at once. You deserve a year that is gentle with your heart and generous with its beautiful surprises. 🌷",
},
{
icon: "🦋",
category: "A LITTLE REMINDER",
title: "Never dim your light",
preview: "For the days you forget how special you are...",
message:
"Brianna, one thing I hope you never forget is that you do not have to become someone else to be worthy of appreciation. There is something beautiful about being yourself, about the way you carry your personality, the way you express yourself, and the heart you bring into the world. Never let a difficult day convince you that you are not enough. Never let somebody else's opinion make you forget your own worth. Keep learning, keep growing, keep discovering new things about yourself, and keep becoming the woman you want to be. You are allowed to have imperfect days, change your mind, make mistakes, and start again. You do not have to be perfect to be wonderful. Keep your light, Brianna. The world has enough people trying to fit in. Be beautifully, unapologetically yourself. 🦋",
},
{
icon: "💗",
category: "THE LITTLE THINGS",
title: "All the little things",
preview: "Sometimes the smallest things mean the most...",
message:
"I hope this year brings you those little moments that somehow become your favourite memories. The unexpected messages that make you smile, the conversations that go on longer than planned, the jokes that make absolutely no sense but still leave you laughing, the songs that match your mood, and the peaceful moments when everything finally feels okay. I hope you have people around you who listen when you speak, celebrate when you win, encourage you when you doubt yourself, and appreciate you without needing a special occasion to do it. I hope you experience kindness that asks for nothing in return and happiness that does not need an explanation. And I hope that, every once in a while, you pause in the middle of an ordinary day and think, 'You know what? Life can actually be beautiful.' You deserve plenty of those moments. 💗",
},
{
icon: "🌟",
category: "FOR THE DREAMER IN YOU",
title: "Your biggest dreams",
preview: "Imagine everything that could go right...",
message:
"May this be the year you surprise yourself. May you discover strengths you did not know you had and find courage in places where you once felt afraid. I hope the dreams you speak about openly, and even the ones you keep quietly in your heart, receive a chance to grow. May opportunities meet your preparation, may your hard work bring meaningful rewards, and may you never feel that it is too late to start something wonderful. I hope you travel to places that inspire you, learn things that change the way you see the world, and meet people who open doors to possibilities you had not imagined. Celebrate your progress, even when it seems small. You are allowed to take your time. You are allowed to change direction. And you are absolutely allowed to dream big. Your story is still unfolding, Brianna. May the next chapters be beautiful. 🌟",
},
{
icon: "🫶",
category: "SOMETHING FROM THE HEART",
title: "Your beautiful heart",
preview: "A little appreciation, just because...",
message:
"One of the beautiful things about a person is not only what people see on the outside, but also the heart they carry within them. Brianna, your beautiful personality and the goodness in your heart are things worth appreciating. There is so much value in being someone who can bring warmth, laughter, or comfort into another person's day. I hope you never feel that you have to lose your kindness to become stronger, or hide your softness to be taken seriously. A good heart is not a weakness. It is something worth protecting and appreciating. Keep choosing the things that make you proud of the person you are becoming. And remember to give yourself some of the patience, understanding, and kindness that you give to other people. You deserve that too. ❤️",
},
{
icon: "🎀",
category: "A BIRTHDAY PERMISSION SLIP",
title: "Today, the rules are different",
preview: "Official birthday regulations have arrived...",
message:
"ATTENTION, BRIANNA! 📢 By the authority of the International Birthday Committee, you are hereby granted permission to eat the extra slice of cake, laugh at your own jokes, take approximately 847 pictures until you find the perfect one, ignore unnecessary stress, accept compliments without arguing, and behave like the main character because TODAY YOU ARE THE MAIN CHARACTER. Any person attempting to make your birthday boring must submit a written explanation to the committee, along with snacks and a sincere apology. Your responsibilities include smiling, enjoying yourself, receiving love, and remembering that getting older is simply your character levelling up. Happy birthday! Your new age comes with absolutely no warranty, but we do guarantee extra cake privileges. 🎂😂",
},
{
icon: "😂",
category: "A VERY SERIOUS INVESTIGATION",
title: "The Brianna effect",
preview: "Scientists are confused. We have questions...",
message:
"CASE NUMBER 001: THE BRIANNA EFFECT. 🕵️‍♂️ Our research department has identified a person who is beautiful, has an amazing personality, and possesses a suspicious amount of main-character energy. Witnesses report that she can be herself and still leave an impression. Experts have been called in, but they have made very little progress because every time they attempt to investigate, they get distracted by the subject's beauty. One scientist reportedly said, 'We need more data.' Another replied, 'Brother, just wish her a happy birthday.' The investigation remains open. Current conclusion: Brianna is guilty of being wonderfully herself. Recommended sentence: unlimited birthday happiness, extra cake, and a whole year of beautiful surprises. Case closed. 😂🔎",
},
{
icon: "💌",
category: "OPEN WHEN YOU NEED A SMILE",
title: "A little pocket of sunshine",
preview: "Imagine this card giving you a tiny hug...",
message:
"Hey, Brianna. If you are reading this on a day that feels a little heavy, take a breath for a moment. Unclench your shoulders. Drink some water. Give yourself permission to pause. You do not have to solve every problem today, and you do not have to pretend to be okay every second. One difficult moment does not define your whole life, and one bad day does not erase all the good things about you. You are a whole person, not a list of things you need to accomplish. I hope something small makes you smile today, even if it is a ridiculous video, a favourite song, a good meal, or the memory of somebody saying something completely unserious. And if nothing else works, remember that somewhere on the internet, a certain Levo put together an entire birthday website just to remind you that you are worth celebrating. Now please smile a little. I worked very hard on this card. 😭😂💗",
},
];

const secretSurprises = [
{
icon: "🤫",
title: "A tiny secret",
message:
"Psst, Brianna... here is a little secret: you do not need a birthday, a special outfit, a perfect picture, or a reason to deserve appreciation. You deserve kindness on ordinary Tuesdays too. Consider this your reminder to treat yourself like somebody worth celebrating. Because you are. 💗",
},
{
icon: "😂",
title: "Your official diagnosis",
message:
"After careful examination, we have diagnosed you with Birthday Main Character Syndrome. Symptoms include excessive smiling, receiving compliments, looking suspiciously good in pictures, and expecting cake whenever you enter a room. There is no known cure. Doctors recommend treating the condition with laughter, good company, and chocolate cake. 🎂",
},
{
icon: "🎁",
title: "Your invisible gift",
message:
"Imagine I handed you a beautifully wrapped box. Inside it are peaceful mornings, genuine friendships, exciting opportunities, confidence on difficult days, laughter that makes your stomach hurt, and the courage to go after what you want. Unfortunately, delivery services cannot transport all those things in one package. So this message will have to be your little reminder to keep making room for them. 🎁✨",
},
{
icon: "👑",
title: "A royal announcement",
message:
"Hear ye, hear ye! By royal decree, Brianna shall not be permitted to speak badly about herself without first hearing three compliments, drinking a glass of water, and remembering that she is a human being who deserves patience. The royal court also demands that she enjoy her birthday and stop acting like cake has a daily limit. Long live the birthday queen! 👑😂",
},
{
icon: "💗",
title: "One thing I want you to know",
message:
"I may not always find the perfect words to explain appreciation, but I hope this little surprise helps you understand that you are worth the time it takes to make something thoughtful. Your personality, your beauty, and the goodness in your heart are all reasons to celebrate you. I hope today reminds you that you matter, that your presence can mean something to people, and that you deserve happiness that feels genuine. Happy birthday, Brianna. ❤️",
},
];

const openWhenCards = [
{
title: "Open when you need courage",
icon: "🦁",
message:
"You have made it through every difficult day you have faced so far. That counts for something. You do not have to feel fearless to take the next step. Take it while nervous, take it slowly, and ask for help when you need it. Progress is still progress, even when nobody else sees it. Believe in the person you are becoming. 🌻",
},
{
title: "Open when you need a laugh",
icon: "🤣",
message:
"Breaking news: A beautiful birthday girl has been spotted trying to act normal despite being the centre of today's celebrations. Sources confirm she is still accepting compliments, cake, and gifts. When asked for a statement, she reportedly said, 'As she should.' We respect her honesty. 😂🎂",
},
{
title: "Open when you forget your worth",
icon: "🪞",
message:
"Please do not measure your worth by one person's opinion, one difficult day, or one thing that did not go according to plan. You are allowed to be a work in progress and still be wonderful. You deserve respect, honesty, kindness, and room to grow. Take a moment to remember the things you like about yourself, including the ones that have nothing to do with appearance. You are more than enough as a person. 💗",
},
{
title: "Open when you need some magic",
icon: "✨",
message:
"Here is your reminder that not every beautiful thing arrives with fireworks. Sometimes magic is a conversation that comes at the right time, a door that finally opens, a friend who remembers a small detail, or a morning when you feel hopeful again. Keep your heart open to the good things you cannot predict yet. There are still wonderful memories waiting to be made. 🦋",
},
];

function BirthdayWishes() {
const [revealed, setRevealed] = useState([]);
const [openSecrets, setOpenSecrets] = useState([]);
const [openLetters, setOpenLetters] = useState([]);
const [showFinalLetter, setShowFinalLetter] = useState(false);
const [celebrating, setCelebrating] = useState(false);

const toggleItem = (setter, index) => {
setter((current) =>
current.includes(index)
? current.filter((item) => item !== index)
: [...current, index]
);
};

const celebrate = () => {
setCelebrating(true);
window.setTimeout(() => setCelebrating(false), 2400);
};

return ( <section className="wishes-section" id="birthday-wishes">
{celebrating && ( <div className="celebration-overlay" aria-live="polite"> <span>🎉</span> <span>🎂</span> <span>💗</span> <span>✨</span> <span>🥳</span> <p>Today, we celebrate YOU, Brianna!</p> </div>
)}

```
  <div className="wishes-heading">
    <p className="wishes-eyebrow">A LITTLE UNIVERSE MADE FOR YOU</p>
    <h2>
      Dear Brianna,
      <span> this little world is yours. ✨</span>
    </h2>
    <p className="wishes-intro">
      There are birthday wishes, a few ridiculous jokes, little surprises,
      and some words I hope will make you smile. Take your time, open the
      cards, and enjoy every little piece. This was made just for you. 💌
    </p>
  </div>

  <div className="wish-grid">
    {wishes.map((wish, index) => {
      const isRevealed = revealed.includes(index);

      return (
        <button
          type="button"
          className={`wish-card ${isRevealed ? "wish-open" : ""}`}
          key={wish.title}
          onClick={() => toggleItem(setRevealed, index)}
          aria-expanded={isRevealed}
        >
          <span className="wish-icon">{wish.icon}</span>
          <span className="wish-category">{wish.category}</span>
          <span className="wish-title">{wish.title}</span>
          <span className="wish-preview">
            {isRevealed ? wish.message : wish.preview}
          </span>
          <span className="wish-action">
            {isRevealed ? "Fold this letter ↑" : "Open this letter ↓"}
          </span>
        </button>
      );
    })}
  </div>

  <section className="surprises-section" aria-labelledby="surprises-title">
    <div className="subsection-heading">
      <p className="wishes-eyebrow">PSSST... THERE ARE SECRETS HERE</p>
      <h3 id="surprises-title">
        Little surprises, <span>just for you. 🎁</span>
      </h3>
      <p>Some are sweet. Some are silly. All are waiting to be opened.</p>
    </div>

    <div className="surprise-grid">
      {secretSurprises.map((surprise, index) => {
        const isOpen = openSecrets.includes(index);

        return (
          <button
            type="button"
            className={`surprise-card ${isOpen ? "surprise-open" : ""}`}
            key={surprise.title}
            onClick={() => toggleItem(setOpenSecrets, index)}
            aria-expanded={isOpen}
          >
            <span className="surprise-icon">{surprise.icon}</span>
            <span className="surprise-title">{surprise.title}</span>
            <span className="surprise-message">
              {isOpen
                ? surprise.message
                : "This little secret has your name on it. Tap to reveal ✨"}
            </span>
            <span className="surprise-action">
              {isOpen ? "Hide secret ↑" : "Reveal secret ↓"}
            </span>
          </button>
        );
      })}
    </div>
  </section>

  <section className="open-when-section" aria-labelledby="open-when-title">
    <div className="subsection-heading">
      <p className="wishes-eyebrow">A LITTLE SOMETHING FOR LATER</p>
      <h3 id="open-when-title">
        Open when... <span>💌</span>
      </h3>
      <p>
        Save these little reminders for whenever you need a smile, some
        encouragement, or a little birthday magic.
      </p>
    </div>

    <div className="open-when-grid">
      {openWhenCards.map((card, index) => {
        const isOpen = openLetters.includes(index);

        return (
          <button
            type="button"
            className={`open-when-card ${isOpen ? "open-when-revealed" : ""}`}
            key={card.title}
            onClick={() => toggleItem(setOpenLetters, index)}
            aria-expanded={isOpen}
          >
            <span className="open-when-icon">{card.icon}</span>
            <span className="open-when-title">{card.title}</span>
            <span className="open-when-message">
              {isOpen
                ? card.message
                : "A small message is waiting for you inside..."}
            </span>
            <span className="open-when-action">
              {isOpen ? "Close letter ↑" : "Open letter ↓"}
            </span>
          </button>
        );
      })}
    </div>
  </section>

  <div className="birthday-celebration">
    <span className="celebration-sparkle">✦</span>
    <p className="celebration-small">BEFORE YOU GO...</p>
    <h3>You deserve to be celebrated. 💗</h3>
    <p>
      If birthdays came with a happiness button, I would press it for you
      more than once. Ready for a little birthday magic?
    </p>
    <button type="button" className="celebrate-button" onClick={celebrate}>
      Make a little birthday magic ✨
    </button>
  </div>

  <section className="final-letter-section">
    <div className="final-letter-card">
      <span className="final-letter-icon">💌</span>
      <p className="wishes-eyebrow">ONE LAST LITTLE THING</p>
      <h3>A letter from Levo, <span>to Brianna. ❤️</span></h3>
      <p className="final-letter-intro">
        I saved one more message for you. Open it whenever you're ready.
      </p>

      {!showFinalLetter ? (
        <button
          type="button"
          className="final-letter-button"
          onClick={() => setShowFinalLetter(true)}
        >
          Open your final letter 💗
        </button>
      ) : (
        <div className="final-letter-message">
          <p>Dear Brianna,</p>
          <p>
            Happy birthday! ❤️ I wanted to make you something little i know its not much buh am sure it's something you could explore rather than
            just read and close. So here you are, wandering through this
            little corner of the internet that I put together with you in
            mind.
          </p>
          <p>
            I hope you know that the beautiful things about you are not
            limited to what someone can see in a photograph. Your
            personality, your heart, your sense of humour, and the person
            you are all deserve appreciation. I hope this new chapter
            brings you peace when you need it, courage when things feel
            uncertain, laughter that makes your cheeks hurt, and people
            who make life feel a little lighter.
          </p>
          <p>
            I hope you keep chasing the things that make you excited about
            the future. I hope you celebrate your little wins as much as
            your big ones. I hope you give yourself grace on the days
            when everything does not go to plan. And I hope you never
            forget that you deserve good things, not because you have to
            earn every bit of kindness, but because you are a human being
            with a heart that deserves care and respect.
          </p>
          <p>
            I cannot promise that every day ahead will be perfect, but I
            can wish you a year filled with moments worth remembering.
            More laughter. More growth. More opportunities. More reasons
            to smile at absolutely nothing. More memories that make you
            think, 'I'm glad I got to experience that.'
          </p>
          <p>
            Thank you for being the person you are. I hope today makes
            you feel appreciated, celebrated, and genuinely happy. And
            yes, I hope you get plenty of cake. This entire website
            supports unlimited cake privileges. 😂🎂
          </p>
          <p>
            Wherever this new year takes you, I hope it takes you toward
            the things that bring you peace, joy, and a sense of purpose.
            Keep being yourself, Brianna. There is something lovely about
            that.
          </p>
          <p className="final-letter-signoff">
            Happy birthday, beautiful soul. ❤️
            <br />
            With lots of love and birthday wishes,
            <br />
            <strong>Levo 💌</strong>
          </p>
        </div>
      )}
    </div>
  </section>
</section>

);
}

export default BirthdayWishes;
