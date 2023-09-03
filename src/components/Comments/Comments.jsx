import React, { useEffect, useState } from 'react';
import "./Comments.css";
import axios from "axios";

function Comments() {
    const commentDate = Date.now();
    const formatDate = (commentDate) => {
        const options = { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"}
        return new Date(commentDate).toLocaleDateString(undefined, options)
      }
    

    const [input, setInput] = useState({
        timestamp: formatDate(commentDate),
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
            timestamp: input.timestamp,
            comment: input.comment
        }

        axios.post("http://localhost:3001/create", newComment)               
    }

    const [patients, setPatients] = useState([{
      timestamp:'',
      comment: '',
    }])

    useEffect(() => {
      fetch("/patients").then(res => {
        if(res.ok) {
          return res.json()
        }
      }).then(jsonRes => setPatients(jsonRes));
    })


  return (
    <div className="container comments">
      <h4>Comment</h4>
      <form>
        <div className="form-group">
            <textarea onChange={handleChange} name="comment" value={input.comment} autoComplete='off' className='form-control' placeholder="Add your comment"></textarea>
        </div>
        <div className='buttonSection'>
        <button onClick={handleClick} className='commentbtn btn btn-lg btn-info'>Comment</button>
        </div>
      </form>
      <div className="commentHistory">
      <h4>Comment History</h4>
      {patients.map(patients =>
        <div className='commentHistoryRow'>
          <p><b>{patients.timestamp}</b></p>
          <p>{patients.comment}</p>
        </div>
      )}
    </div>
    </div>
    
  )
}

export default Comments
