import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { colorBrandGreen } from '../../utils/tokens/tokenColorBrand'

// Styles
import { Transition } from '../../utils/styles/utility-classes/transition'

const LinkNews = props => {
  const { children, to } = props

  return <LinkNewsStyle to={to}>{children}</LinkNewsStyle>
}

const LinkNewsStyle = styled(Link)`
  color: ${colorNeutral.NEUTRAL_TINT_15};
  text-decoration: none;

  h2 {
    ${Transition};
  }

  :hover,
  :focus {
    h2 {
      color: ${colorBrandGreen.GREEN_TINT_50};
    }
  }
`

LinkNewsStyle.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
}

export default LinkNews
