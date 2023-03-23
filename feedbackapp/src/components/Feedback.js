import Card from "./shared/Card";
function Feedback({ item }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text display">{item.text}</div>
    </Card>
  );
}

export default Feedback;
