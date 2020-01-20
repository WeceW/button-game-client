import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      winning: string
      gameover: string
    }

    device: {
      phoneOrSmaller: string
      tabletPortraitOrSmaller: string
      tabletLandscapeOrSmaller: string
      laptopOrSmaller: string
    }
  }
}
