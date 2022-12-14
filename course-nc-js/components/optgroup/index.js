
import styled, { css } from 'styled-components'

// Fonts
import roboto from '@components/assets/fonts/fonts'

// Props base
import propsBase from '@components/assets/props/props-base'

// Colors
import colorsBG from '@components/assets/colors/colors-bg'
import colorsText from '@components/assets/colors/colors-text'


// ================== PROPS EXCLUSIVES ==================
// ==== TYPES ====
    const textBase = css ` font-size: .8rem; margin: 0px; padding: 0px;`
    const fontSize1 = css ` font-size: 2.4rem; `
    const fontSize2 = css ` font-size: 2.1rem; `
    const fontSize3 = css ` font-size: 1.9rem; `
    const fontSize4 = css ` font-size: 1.6rem; `
    const fontSize5 = css ` font-size: 1.3rem;`
    const fontSize6 = css ` font-size: 1rem; `
    const fontSize7 = css ` font-size: .7rem; `
    const fontSize8 = css ` font-size: .4rem; `

// ===== FONT WEIGHT ====
    const fontWeightLighter = css ` font-weight: lighter; `
    const fontWeightNormal = css ` font-weight: normal; `
    const fontWeightBold = css ` font-weight: bold; `

// ================== PROPS EXCLUSIVES ==================


const OptGroup = styled.optgroup `

    /* FONT */
    ${ roboto }

    /* TEXT BASE */
    ${ textBase }

    /* ================== PROPS EXCLUSIVES ================== */
    /* ==== TYPES ==== */
    ${ props => props.fontSize1 && css ` ${ fontSize1 } `}
    ${ props => props.fontSize2 && css ` ${ fontSize2 } `}
    ${ props => props.fontSize3 && css ` ${ fontSize3 } `}
    ${ props => props.fontSize4 && css ` ${ fontSize4 } `}
    ${ props => props.fontSize5 && css ` ${ fontSize5 } `}
    ${ props => props.fontSize6 && css ` ${ fontSize6 } `}
    ${ props => props.fontSize7 && css ` ${ fontSize7 } `}
    ${ props => props.fontSize8 && css ` ${ fontSize8 } `}

    /* WIDTH */
    ${ props => props.lighter && css ` ${ fontWeightLighter } `}
    ${ props => props.normal && css ` ${ fontWeightNormal } `}
    ${ props => props.bold && css ` ${ fontWeightBold } `}
    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }
    
`

export default OptGroup