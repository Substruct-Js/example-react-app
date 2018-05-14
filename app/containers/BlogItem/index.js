import React from 'react'
import Substruct from 'substruct-js'
import { SPACE_ID } from 'utils/constants'
import { Link } from 'react-router-dom'

import Container from 'components/Container'

import WelcomeText from './styles/welcome'

class BlogItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: false,
      content: false,
      blogPages: []
    }
  }

  componentDidMount () {
    const substruct = new Substruct(SPACE_ID)
    const blogPageId = this.props.match.params.id
    substruct.collectPage(blogPageId, (err, response) => {
      this.setState({ page: response.data.page, content: response.data.content })
    })
  }

  render() {
    return !this.state.page ? (<div>Loading...</div>) : (
      <Container>
        <WelcomeText dangerouslySetInnerHTML={{ __html: this.state.content.text['intro-text'].content}} />
        {Object.keys(this.state.content.images).length > 0 && Object.keys(this.state.content.images).map((image, index) => (
          <img key={index} width={'100%'} src={this.state.content.images['intro-image'].url} alt='Intro Image' />
        ))}
      </Container>
    )
  }
}

export default BlogItem