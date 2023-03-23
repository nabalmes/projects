import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/Feedbacklist";
import FeedbackData from "./data/feedBackData";

export const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
          </div>
    </>
  );
};
