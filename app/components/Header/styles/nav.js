import styled from 'styled-components'

const nav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  li {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }

    a {
      text-decoration: none;
      font-size: 16px;
      font-size: 16px;
      color: #959595;
      letter-spacing: 0;
      transition: color .2s ease-in-out;

      &:hover {
        color: #000;
      }
    }

    &.active {
      a {
        color: #000;
      }
    }

    &.primary {
      a {
        color: #4851FF;
        font-weight: 500;
      }
    }
  }
`

export default nav
