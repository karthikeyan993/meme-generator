import Form from "./components/Form";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
  return (
    <>
      <Header />
      <section className="container">
        <Form />
        <Meme />
      </section>
    </>
  );
}
