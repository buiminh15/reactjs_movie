import React from 'react'
import Row from './Row'

function Rows() {
  return (
    <ul className='flex flex-col gap-10 mt-6'>
        {
            Array(3).fill(0).map((_, index) => (
                <li>
                    <Row key={index}/>
                </li>
            ))
        }
    </ul>
  )
}

export default Rows