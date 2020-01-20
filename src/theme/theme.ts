import { DefaultTheme } from 'styled-components'

export const breakpoints: { phone: number, tabletPortrait: number, tabletLandscape: number, laptop: number } = {
  phone:            600, 
  tabletPortrait:   900, 
  tabletLandscape: 1200, 
  laptop:          1500,
}

export const theme: DefaultTheme = {
  colors: {
    primary:    "white",
    secondary:  "white",
    winning:    "yellow",
    gameover:   "magenta",
  },

  device: {
    phoneOrSmaller:           `max-width: ${breakpoints.phone}px`,
    tabletPortraitOrSmaller:  `max-width: ${breakpoints.tabletPortrait}px`,
    tabletLandscapeOrSmaller: `max-width: ${breakpoints.tabletLandscape}px`,
    laptopOrSmaller:          `max-width: ${breakpoints.laptop}px`,
  }
}

