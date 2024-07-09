export default function Form() {
  return (
    <form id="meme-form">
      <div className="form__row">
        <div className="form__group">
          <label htmlFor="top-text">Top text</label>
          <input type="text" id="top-text" placeholder="shut up" />
        </div>
        <div className="form__group">
          <label htmlFor="bottom-text">Bottom text</label>
          <input type="text" id="bottom-text" placeholder="take my money" />
        </div>
      </div>
      <div className="form__row">
        <button type="submit">
          <span>Get a new meme image 🖼</span>
        </button>
      </div>
    </form>
  );
}
