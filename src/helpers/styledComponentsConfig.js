import { css } from 'styled-components';

export const theme = {
  colours: {
    red: '#E1605F',
    grey: '#DFDFDF',
    blue: '#020B3C',
  },
};

const sizes = {
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
