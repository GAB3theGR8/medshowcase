import React, { useState } from 'react';
import "./Comments.css";
import axios from "axios";

function Comments() {
    const commentDate = Date.now();
    const formatDate = (commentDate) => {
        const options = { day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"}
        return new Date(commentDate).toLocaleDateString(undefined, options)
      }
    

    const [input, setInput] = useState({
        timeStamp: formatDate(commentDate),
        comment: '',
    })

    function handleChange(event) {
        const {name, value} = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newComment = {
            timeStamp: input.timeStamp,
            comment: input.comment
        }

        axios.post("http://localhost:3001/create")
        
        
    }

  return (
    <div className="container comments">
      <h4>Comments</h4>
      <form>
        <div className="form-group">
            <textarea onChange={handleChange} name="comment" value={input.comment} autoComplete='off' className='form-control' placeholder="Add your comment"></textarea>
        </div>
        <div className='buttonSection'>
        <button onClick={handleClick} className='commentbtn btn btn-lg btn-info'>Comment</button>
        </div>
      </form>
    </div>
  )
}

export default Comments
