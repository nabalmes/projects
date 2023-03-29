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
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
  }

  //ADD Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
      })
    
    const data = await response.json()
    setFeedback([data, ...feedback])
  }
  //Delete feedback
  const deleteFeedback = async (id) => {
    if(window.confirm("Are you sure you want to delete?")){
      await fetch(`/feedback/${id}`, {method: 'DELETE'})
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
