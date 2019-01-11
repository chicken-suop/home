import { css } from 'styled-components';

export const theme = {
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
  color: 'rgba(0, 0, 0, 0.87)',
  whiteColor: 'rgba(255, 255, 255, 0.87)',
};

export const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `

  return acc
}, {})
