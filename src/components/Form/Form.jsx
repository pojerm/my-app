import React from 'react'
import './form.css'

export const Form = () => {
  return (
    <div className='form-wrapper'>
        <form action="">
          <label>Email address</label>
          <input type="text" placeholder='email@company.com'/>
        </form>
    </div>
 )
}
