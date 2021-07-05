import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from "@chakra-ui/react"

export default class MyDocument extends NextDocument {
    render() {
        return (
            <Html lang="en">
                <meta name="theme-color" content="black" />
                <Head />
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}