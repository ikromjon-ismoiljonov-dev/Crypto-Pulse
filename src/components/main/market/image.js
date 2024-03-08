import React, { useState } from 'react'

const Image = (props) => {
    console.log(props);


  return (
    <div className='div-img3'>
        <img className='img-fluid mt-3' src={props.images.link} alt="" />
    </div>
  )
}

export default Image