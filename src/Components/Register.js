import React from 'react'

export default function Register(props) {
  return (
    <div className='container card mt-2'>
        <form onSubmit={props.submit}>
            <div className='form-group'>
                <label htmlFor='name'>1. Name :</label>
                <br/>
                <input required autoComplete='off' className='form-control' type="text" name='name' placeholder='Enter your name'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>2. Email :</label>
                <br/>
                <input required autoComplete='off' className='form-control' type="email" name='email' placeholder='Enter your email'></input>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>3. Password :</label>
                <br/>
                <input required autoComplete='off' className='form-control' type="password" name='password' placeholder='Enter your Password'></input>
            </div>
            <div className='form-group'>
                <button type="submit" className='btn btn-primary'>Next</button>
            </div>
        </form>
    </div>
  )
}
