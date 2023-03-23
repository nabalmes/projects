import Feedback from "./Feedback";
import Card from "./shared/Card";


function Feedbacklist({ feedback }) {
  if (!feedback || feedback.lenght === 0) {
    return <h1>No feedback yet</h1>;
  }
  return(
    <div className="feedback-list">
      {feedback.map((item) => 
        <Feedback key={item.id} item={item} />
      )}
      <Card>Hello</Card>
    </div>
  );
}

export default Feedbacklist;
