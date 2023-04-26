import React from 'react'

export default function Question(props) {
  return (
    <div className='container card mt-2'>
      <form onSubmit={props.submit}>
        <div className='form-group'>
            <label><b>3.</b> What are you currently doing</label>
            <br/>
            <input type="radio" name='q1' id='teacher' value='teacher'></input>
            <label>Teacher</label>
            {" "}
            <input type="radio" name='q1' id='student' value='student'></input>
            <label>Student</label>
            {" "}
            <input type="radio" name='q1' id='programmer' value='programmer'></input>
            <label>Programmer</label>
        </div>
        <div  className='form-group'>
            <label><b>4.</b> Please rate our Courses</label>
            <br/>
            <input type="radio" name='q2' id='poor' value="poor"></input>
            <label>Poor</label>
            {" "}
            <input type="radio" name='q2' id='good' value="good"></input>
            <label>Good</label>
            {" "}
            <input type="radio" name='q2' id='excellent' value="excellent"></input>
            <label>Excellent</label>
        </div>
        <div className='form-group'>
            <label><b>5.</b> Write Your review here</label>
            <br/>
            <textarea type='text' name='q3' className='form-control'></textarea>
        </div>
        <div className='form-group'>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  )
}
