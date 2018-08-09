import React from 'react'
import Header from './Header'
import Content from './Content'

function Container() {
    return (
        <div className='container'>
          <header  className='hero'>
            <Header />
          </header>
          <main>
            <Content />
          </main>
        </div>
    )
}

export default Container;
