import "./HelpBox.css";

// add comment
// add 2nd comment
function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
