import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Row from './Row'

function MainComponent() {
  return (
    <div  className='col-span-8 p-3'>
      <Header />
      <Banner />
      <Row />
    </div>
  )
}

export default MainComponent