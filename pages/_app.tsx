import { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import Layout from '../src/components/layout/Layout'
import { useColorStore } from '../src/hooks/useColorStore'
import { isColorLight } from '../src/color'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  const primaryColor = useColorStore((state) => state.primaryColor) || '#1976d2'
  const theme = createTheme({
    palette: {
      mode: isColorLight(primaryColor) ? 'light' : 'dark',
      primary: {
        main: primaryColor,
      },
    },
  })

  return (
    <>
      <Head>
        <title>Color picker app</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}
