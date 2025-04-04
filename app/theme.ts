import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    handwriting: `'Indie Flower', cursive`,
  },
  styles: {
    global: {
      body: {
        bg: '#f7f7f7',
      },
    },
  },
})

export default theme 