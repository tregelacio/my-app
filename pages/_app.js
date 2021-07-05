import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react"
import customTheme from '../styles/theme'
import { Global, css } from '@emotion/react'
import { prismDarkTheme } from '../styles/prism'

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode()
  return (
    <>
    <Global
      styles={css`
          ${prismDarkTheme};
          ::selection {
            background-color: #90CDF4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171717'};
          }
          ::-webkit-scrollbar {
            width: 8px;
            background: #080808;
          }
          ::webkit-scrollbar-thumb {
            background: #111111;
            border-radius: 8px;
          }
      `}
      />
    {children}
    </>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "dark",
          useSystemColorMode: true
        }}
      >
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
