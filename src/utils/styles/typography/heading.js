// ----------------------------------------------------------------------------
//
// Description:
// Sets headings in global styles, and can be imported in styled components.
// ============================================================================
//
import { css } from 'styled-components'

// Token
import { fontWeight } from '../../tokens/tokenFontWeight'

// Config
import { space } from '../../configs/confSpace'
import { typeScale } from '../../configs/confTypeScale'

const Heading = css`
  /* margin-bottom: ${space[0]}; */
  font-weight: ${fontWeight.FONT_WEIGHT_5};
`

export const GlobalH1 = css`
  h1 {
    ${Heading};
    ${typeScale.TEXT_PRESET_7};

    font-weight: ${fontWeight.FONT_WEIGHT_3};
    margin-top: calc((1 - 2.6) * 0.5rem);
  }
`

export const GlobalH2 = css`
  h2 {
    ${Heading};
    ${typeScale.TEXT_PRESET_6};

    font-weight: ${fontWeight.FONT_WEIGHT_4};
    margin-top: calc((1 - 2.6) * 0.5rem);
  }
`

export const GlobalH3 = css`
  h3 {
    ${Heading};
    ${typeScale.TEXT_PRESET_5};

    font-weight: ${fontWeight.FONT_WEIGHT_3};
    margin-top: calc((1 - 2) * 0.5rem);
  }
`

export const GlobalH4 = css`
  h4 {
    ${Heading};
    ${typeScale.TEXT_PRESET_4};

    font-weight: ${fontWeight.FONT_WEIGHT_4};
    margin-top: calc((1 - 2) * 0.5rem);
  }
`

export const GlobalH5 = css`
  h5 {
    ${Heading};
    ${typeScale.TEXT_PRESET_3};

    font-weight: ${fontWeight.FONT_WEIGHT_4};
    margin-top: calc((1 - 1.7) * 0.5rem);
  }
`

export const GlobalH6 = css`
  h6 {
    ${Heading};
    ${typeScale.TEXT_PRESET_2}

    margin-top: calc((1 - 1.7) * 0.5rem);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`
