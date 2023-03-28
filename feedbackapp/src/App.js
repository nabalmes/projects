import {v4 as uuidv4} from 'uuid'
import { useEffect, useState } from "react"; 
import Header from "./components/Header";
import FeedbackList from "./components/Feedbacklist";
import Feedbackstats from "./components/Feedbackstats";
import FeedbackForm from "./components/FeedbackForm";

export const App = () => {
  const [feedback, setFeedback] = useState([]);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  })

  //fetch data from backend
  const fetchFeedback = async() => {
    const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
  }

  //ADD Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }
  //Delete feedback
  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete?")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const feedbackEdit = (item) => {
    setEditFeedback({
      item,
      edit: true
    })
  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} edit={editFeedback} updatedFeedback={setFeedback} currentFeedback={feedback}/>
        <Feedbackstats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} handleEdit={feedbackEdit} />
      </div>
    </>
  );
};
