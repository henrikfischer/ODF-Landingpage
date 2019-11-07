import React from 'react'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

// Components
import Logo from '../logo/Logo'

const Header = ({ siteTitle, children }) => (
  <HeaderStyle>
    <Logo />
    {children}
  </HeaderStyle>
)

const HeaderStyle = styled.header`
  width: 100%;
  padding: 0 ${space[4]};
  display: flex;
  align-items: stretch;
  position: fixed;
  top: 0;
  background-color: ${colorNeutral.NEUTRAL_TINT_0};

  ${mediaQuery.BREAKPOINT_1`
		padding: 0 ${space[6]};
  `};

  ${mediaQuery.BREAKPOINT_2`
		padding: 0 ${space[8]};
  `};
`

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
