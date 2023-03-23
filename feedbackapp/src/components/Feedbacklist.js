import PropTypes from 'prop-types'
import Feedback from "./Feedback";
import Card from "./shared/Card";


function Feedbacklist({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <h1>No feedback yet</h1>;
  }
  return(
    <div className="feedback-list">
      {feedback.map((item) => 
        <Feedback key={item.id} item={item} handleDelete={handleDelete}/>
      )}
    </div>
  );
}

Feedbacklist.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }
    )
  )
}

export default Feedbacklist;
