
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
    const textBase = css ` font-size: 1rem; margin: 0px; padding: 0px;`
    const fontSize1 = css ` font-size: 2.4rem; `
    const fontSize2 = css ` font-size: 2.1rem; `
    const fontSize3 = css ` font-size: 1.9rem; `
    const fontSize4 = css ` font-size: 1.6rem; `
    const fontSize5 = css ` font-size: 1.3rem; `
    const fontSize6 = css ` font-size: 1rem; `
    const fontSize7 = css ` font-size: .9rem; `
    const fontSize8 = css ` font-size: .8rem; `
    const fontSize9 = css ` font-size: .7rem; `
    const fontSize10 = css ` font-size: .6rem; `

// ===== FONT WEIGHT ====
    const FontWeightLighter = css ` font-weight: lighter; `
    const FontWeightNormal = css ` font-weight: normal; `
    const FontWeightBold = css ` font-weight: bold; `

// ================== PROPS EXCLUSIVES ==================


const Caption = styled.caption `

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
    ${ props => props.fontSize9 && css ` ${ fontSize9 } `}
    ${ props => props.fontSize10 && css ` ${ fontSize10 } `}

    /* WIDTH */
    ${ props => props.fontWeightLighter && css ` ${ FontWeightLighter } `}
    ${ props => props.fontWeightNormal && css ` ${ FontWeightNormal } `}
    ${ props => props.fontWeightBold && css ` ${ FontWeightBold } `}
    /* ================== PROPS EXCLUSIVES ================== */


    /* PROPS BASE */
    ${propsBase}

    /* COLORS */
    ${ colorsBG }
    ${ colorsText }
    
`

export default Caption