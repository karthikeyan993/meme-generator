import trollImage from "/images/troll-face.png";

export default function Header() {
  return (
    <header>
      <div className="logo-title">
        <img src={trollImage} alt="Troll face black and white image logo" />
        <h1>Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </header>
  );
}
