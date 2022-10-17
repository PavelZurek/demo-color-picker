import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../src/theme';
import Head from 'next/head';
import {CssBaseline} from '@mui/material';
import Layout from '../src/components/layout/Layout';

export default function MyApp(props: AppProps) {
    const {Component, pageProps} = props;

    return (
        <>
            <Head>
                <title>Color picker app</title>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )
}
