import React from 'react'
import Substruct from 'substruct-js'
import { SPACE_ID } from 'utils/constants'

import Container from 'components/Container'

import WelcomeText from './styles/welcome'

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      page: false,
      content: false
    }
  }

  componentDidMount () {
    const substruct = new Substruct(SPACE_ID)
    substruct.collectPage('home', (err, response) => {
      this.setState({ page: response.data.page, content: response.data.content })
    })
  }

  render() {
    return !this.state.page ? (<div>Loading...</div>) : (
      <Container>
        <WelcomeText dangerouslySetInnerHTML={{ __html: this.state.content.text['welcome']}} />
      </Container>
    )
  }
}

export default HomePage