import React, { useState } from 'react'
import './market.css'
import Image from './image';

const Market = (props) => {
    console.log(props.data)


    let ch24 = props.data.priceChange1d > 0;
    let color1 = ch24 ? {
        color: '#0ecb81'
    } : {
        color: 'red'
    }

  return (


    <div id='hoverdiv' className='w-100 div-img5 d-flex align-items-center'>
        <div className='w-100 ms-1'>
            <div className='col-12 text-white d-flex'>
                <div className='col-3 d-flex'>
                    <p className='p-name1 mt-1'>{props.data.name}</p>
                </div>
                <div className='col-2 text-center'>
                    <p className='p-name2'>$ {props.data.price.toLocaleString()}</p>
                </div>
                <div className="col-2 text-center">
                    <p style={color1} className='p-name2'>{props.data.priceChange1d.toLocaleString()} %</p>
                </div>
                <div className="col-5 text-center">
                    <p className='p-name2'>$ {props.data.marketCap.toLocaleString()}</p>
                </div>
            </div>
        </div>
    </div>
  )

}

export default Market