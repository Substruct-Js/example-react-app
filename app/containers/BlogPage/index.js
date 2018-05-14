import React from 'react'
import Substruct from 'substruct-js'
import { SPACE_ID } from 'utils/constants'
import { Link } from 'react-router-dom'

import Container from 'components/Container'

import WelcomeText from './styles/welcome'

class BlogPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: false,
      blogPages: []
    }
  }

  componentDidMount () {
    const substruct = new Substruct(SPACE_ID)
    substruct.collectPage('blog', (err, response) => {
      this.setState({ content: response.data.content })
    })

    substruct.collectPages((err, response) => {
      this.setState({ blogPages: response.data.pages })
    }, ['blog'])
  }

  render() {
    return !this.state.content ? (<div>Loading...</div>) : (
      <Container>
        <WelcomeText dangerouslySetInnerHTML={{ __html: this.state.content.text['welcome'].content}} />
        {this.state.blogPages.length === 0 ? (
          <div>You need to add some pages with the tag of blog</div>
        ) : this.state.blogPages.map((page) => (
          <div>
            <Link key={page._id} to={`/blog/${page.identifier ? page.identifier : page._id}`}>{page.name}</Link>
          </div>
        ))}
      </Container>
    )
  }
}

export default BlogPage