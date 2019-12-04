import styled from 'styled-components'

// Config
import { space } from '../../utils/configs/confSpace'

// Mixins
import { mediaQuery } from '../../utils/mixins/mixMediaQuery'

export const MasonryDiv = styled.div`
  margin-top: ${space[6]};
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap || `2rem`};
  grid-template-columns: ${props =>
    props.col === '3'
      ? `repeat(1, 1fr)`
      : props.col === '2'
      ? `repeat(1, 1fr)`
      : `repeat(1, 1fr)`};

  ${mediaQuery.BREAKPOINT_3`
    grid-template-columns: ${props =>
      props.col === '3'
        ? `repeat(3, 1fr)`
        : props.col === '2'
        ? `repeat(2, 1fr)`
        : `repeat(1, 1fr)`};
  `};
`

export const Col = styled.div`
  display: grid;
  grid-gap: ${props => props.gap || `2rem`};
  grid-auto-rows: max-content;
`
