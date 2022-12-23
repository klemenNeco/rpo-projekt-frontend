// pages/_app.js
import { config } from '@fortawesome/fontawesome-svg-core'
import { Cabin } from '@next/font/google'
import '../styles/globals.css'
config.autoAddCss = false;

// If loading a variable font, you don't need to specify the font weight
const cabin = Cabin({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={cabin.className}>
      <Component {...pageProps} />
    </main>
  )
}
