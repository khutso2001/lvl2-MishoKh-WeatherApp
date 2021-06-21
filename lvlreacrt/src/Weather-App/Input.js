import React,{ useState, useEffect } from 'react'

const Input = ({onSubmit,value,handleChange}) => {

  return (
    <div className="input-conntent">
    <form onSubmit={onSubmit}>
      <input className="input" type="text" value={value} onChange={handleChange}></input>
      <button type='submit' className="button" variant="contained" color="primary">Search</button>
    </form>
  </div>
  )
}

export default Input;