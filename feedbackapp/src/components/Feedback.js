import PropTypes from "prop-types";
import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";
function Feedback({ item, handleDelete }) {

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes />
      </button>
      <div className="text display">{item.text}</div>
    </Card>
  );
}

Feedback.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Feedback;
