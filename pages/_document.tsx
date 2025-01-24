import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Starknet Agent Kit" />
        <meta property="og:description" content="Documentation for the Starknet Agent Kit" />
        <link rel="stylesheet" href="/styles/custom.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}