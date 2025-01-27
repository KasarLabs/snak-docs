import { AppProps } from 'next/app'
import 'nextra-theme-docs/style.css' // Nextra styles first
import '../styles/globals.css'     // Global styles
import '../styles/custom.css'      // Custom styles last

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}