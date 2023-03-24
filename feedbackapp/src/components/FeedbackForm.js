import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  
  const handleTextChange = (e) => {
    if(text === '') {
        setBtnDisabled(true)
        setText(null)
    }else if(text !== '' && text.trim().length <= 10) {
        setBtnDisabled(true)
        setMessage('Putanginaka ka kulang ang nilagay mo!')
    }else {
        setMessage(null)
        setBtnDisabled(false)
    }
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write review" value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
