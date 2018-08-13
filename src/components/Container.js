import React from 'react'
import Header from './Header'
import Posts from './Posts'


class  Container extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props

  }
  render() {
      return (
        <div className='container'>
          <header  className='hero'>
            <Header />
          </header>
          <main>
            <div className="content-wrapper">
              <Posts />
            <div className="ads">

            </div>
            </div>

          </main>
        </div>
    )
  }
}

const mapStateToProps = () => {

}

export default Container;
