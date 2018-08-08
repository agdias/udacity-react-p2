import React from 'react'
import Header from './Header'

function Container(props) {
    return (
        <div className='container'>
          <header  className='hero'>
            <Header />
          </header>
        </div>
    )
}

export default Container;
