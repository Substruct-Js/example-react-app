import styled from 'styled-components'

const logo = styled.div`
  a {
    position: relative;
    display: block;
    text-decoration: none;
    font-weight: 800;
    font-size: 14px;
    color: #000000;
    letter-spacing: 2px;
    text-transform: uppercase;
    z-index: 3;
    transition: color .2s ease-in-out;

    &:before {
      content: 'Example App';
      position: absolute;
      z-index: -1;
      color: #DEDEDE;
      transform: translate3d(-3px, 4px, 0);
      transition: transform .2s ease-in-out, color .2s ease-in-out;
    }

    &:hover {
      color: #4851FF;
      &:before {
        color: #DEDFFF;
        transform: translate3d(-5px, 6px, 0);
      }
    }
  }
`

export default logo
