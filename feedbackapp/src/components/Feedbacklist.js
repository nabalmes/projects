import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import Feedback from "./Feedback";

function Feedbacklist({ feedback, handleDelete, handleEdit}) {
  if (!feedback || feedback.length === 0) {
    return <h1>No feedback yet</h1>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedback key={item.id} item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

Feedbacklist.propTypes = {
  feedback: PropTypes.array,
};

export default Feedbacklist;
