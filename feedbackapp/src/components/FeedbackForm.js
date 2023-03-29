import { useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd, edit, currentFeedback, updatedFeedback }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setText(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Putanginaka kulang ang nilagay mo! dapat higit sa sampo!");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  //Submit Feedback
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (edit.edit === true) {
        updateFeedBack(edit.item.id, newFeedback);
      } else {
        handleAdd(newFeedback);
      }
      setText("");
    }
  };

  //Update Feedback
  const updateFeedBack = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updItem)
    })
    const data = await response.json()
    updatedFeedback(
      currentFeedback.map((item) =>
        item.id === id ? { ...item, ...data } : item
      )
    );
  };

  useEffect(() => {
    if (edit.edit === true) {
      setBtnDisabled(false);
      setText(edit.item.text);
    }
  }, [edit]);

  return (
    <Card>
      <form onSubmit={handleFormSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect
          select={(rating) => setRating(rating)}
          editRating={edit}
        />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
