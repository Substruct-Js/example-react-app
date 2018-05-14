import React from 'react'
import Substruct from 'substruct-js'
import { Link } from 'react-router-dom'
import { SPACE_ID } from 'utils/constants'

import Container from 'components/Container'

class GalleryItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      images: false,
      tags: []
    }
  }

  componentDidMount () {
    const substruct = new Substruct(SPACE_ID)
    substruct.collectPageContent('gallery', 'image', (err, response) => {
      this.setState({ images: response.data.images })
    }, [this.props.match.params.tag])
  }

  render() {
    return !this.state.images ? (<div>Loading...</div>) : (
      <Container>
        {Object.keys(this.state.images).map((image, index) => (
          <img key={index} width={300} src={this.state.images[image].url} />
        ))}
      </Container>
    )
  }
}

export default GalleryItem