export default function Meme() {
  return (
    <article className="meme-container">
      <img src="/images/meme.png" alt="Meme image" />
      <p className="meme-text meme-text--top" aria-label="Top meme text">
        SHUT UP
      </p>
      <p className="meme-text meme-text--bottom" aria-label="Bottom meme text">
        TAKE MY MONEY
      </p>
    </article>
  );
}
