import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { useSpring, animated } from 'react-spring'

const CollapseWrapper = styled(animated.div)`
  background: #2d3436;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
`

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`

const CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}>
        <NavLinks>
          <li>
            <Link href="/">link n1</Link>
          </li>
          <li>
            <Link href="/">link n2</Link>
          </li>
          <li>
            <Link href="/">link n3</Link>
          </li>
          <li>
            <Link href="/">link n4</Link>
          </li>
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu
