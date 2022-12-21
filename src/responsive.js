import { css } from 'styled-components'

export const mobile = (props) => {
    return css`
        @media all and (max-width:1024px){
           ${props}
        }
    `
}

export const tablet = (props) => {
    return css`
        @media screen and (max-width:380px){
            display: none;
        }
    `
}