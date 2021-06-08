import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  // some comment
  return <div className={classes}>{props.children}</div>;
}
export default Card;
