import PropTypes from "prop-types";

export default function Meme(props) {
  return (
    <article className="meme-container">
      <img src={props.data.image} alt="Meme image" />
      <p className="meme-text meme-text--top" aria-label="Top meme text">
        {props.data.topText}
      </p>
      <p className="meme-text meme-text--bottom" aria-label="Bottom meme text">
        {props.data.bottomText}
      </p>
    </article>
  );
}

Meme.propTypes = {
  data: PropTypes.object,
};
