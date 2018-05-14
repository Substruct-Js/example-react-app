import React from 'react'
import Substruct from 'substruct-js'
import { SPACE_ID } from 'utils/constants'

import Container from 'components/Container'

import WelcomeText from './styles/welcome'

class AboutPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      content: false
    }
  }

  componentDidMount () {
    const substruct = new Substruct(SPACE_ID)
    substruct.collectPage('about', (err, response) => {
      this.setState({ content: response.data.content })
    })
  }

  render() {
    return !this.state.content ? (<div>Loading...</div>) : (
      <Container>
        <img src={this.state.content.images['logo'].url} width={100} alt={'LOGO'} />
      </Container>
    )
  }
}

export default AboutPage