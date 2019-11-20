import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// Tokens
import { colorNeutral } from '../../utils/tokens/tokenColorNeutral'
import { breakpoints } from '../../utils/tokens/tokenBreakpoints'

// Components
import ContactInformation from '../contact-information/ContactInformation'
import LinkList from '../link-list/LinkList'

// Styles
const StyledFooter = styled.footer`
  background-color: ${colorNeutral.NEUTRAL_TINT_0};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;

    li {
      line-height: 2;
    }
  }

  a {
    text-decoration: none;
    color: inherit;

    :hover {
      text-decoration: underline;
    }
  }
`

const MainSection = styled.section`
  display: flex;
  padding: 1.25rem 1.875rem;
  flex-wrap: wrap;
  justify-content: space-evenly;

  @media screen and (max-width: ${breakpoints.BREAKPOINT_2}) {
    justify-content: space-around;
  }
`

const MainCol = styled.div`
  padding: 1.25rem;
  min-width: 12.5rem;

  h6 {
    padding-bottom: 1rem;
  }
  p {
    margin-bottom: 0;
  }

  @media screen and (max-width: ${breakpoints.BREAKPOINT_2}) {
    margin-right: auto;
  }
`

const LegalSection = styled.section`
  display: flex;
  justify-content: center;
  padding-bottom: 1.25rem;
  height: 8rem;

  small {
    align-self: end;
  }
`

const Footer = props => {
  const {
    siteTitle,
    relatedLinkList,
    socialLinkList,
    contactInformation,
  } = props

  return (
    <StyledFooter>
      <MainSection>
        <MainCol>
          {relatedLinkList && <LinkList invert linkList={relatedLinkList} />}
        </MainCol>
        <MainCol>
          {contactInformation && (
            <ContactInformation
              invert
              contactInformation={contactInformation}
            />
          )}
        </MainCol>
        <MainCol>
          {socialLinkList && (
            <LinkList invert inline linkList={socialLinkList} />
          )}
          <LegalSection>
            <small>
              © {siteTitle} {new Date().getFullYear()}
            </small>
          </LegalSection>
        </MainCol>
      </MainSection>
    </StyledFooter>
  )
}

export default Footer

Footer.propTypes = {
  siteTitle: PropTypes.string.isRequired,
  contactInformation: PropTypes.objectOf(PropTypes.string),
  relatedLinkList: PropTypes.object,
  socialLinkList: PropTypes.object,
}
