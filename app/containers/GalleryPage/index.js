import React from 'react'
import Substruct from 'substruct-js'
import { Link } from 'react-router-dom'
import { SPACE_ID } from 'utils/constants'

import Container from 'components/Container'
import WelcomeText from './styles/welcome'

class GalleryPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: false,
      tags: []
    }
  }

  componentDidMount () {
    const substruct = new Substruct(SPACE_ID)
    substruct.collectPage('gallery', (err, response) => {
      this.setState({ content: response.data.content })

      {Object.keys(response.data.content.images).forEach((image, index) => {
        if (response.data.content.images[image].tags) {
          response.data.content.images[image].tags.forEach(tag => {
            if (this.state.tags.indexOf(tag) === -1) {
              this.setState({ tags: this.state.tags.concat([tag]) })
            }
          })
        }
      })}
    })
  }

  render() {
    return !this.state.content ? (<div>Loading...</div>) : (
      <Container>
        <WelcomeText dangerouslySetInnerHTML={{ __html: this.state.content.text['welcome'].content}} />
        <p>Here are some images I've collected.</p>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag.id}><Link to={`/gallery/${tag.id}`}>{tag.text}</Link></li>
          ))}
        </ul>
        {Object.keys(this.state.content.images).map((image, index) => (
          <img key={index} width={300} src={this.state.content.images[image].url} />
        ))}
      </Container>
    )
  }
}

export default GalleryPage