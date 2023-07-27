import Footer from '../app/partials/Footer'
import Navbar from '../app/partials/Navbar'
import SiteProvider, { useSite } from '../app/Context/Context'
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import '../styles/index.scss'
import '../app/globals.css'


import { AGCProvider } from '@/app/Context/AGCProvider'

export default function MyApp({ Component, pageProps }) {
  const { theme } = useSite()
  return (
    <>
      <AGCProvider>
        <SiteProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SiteProvider>
      </AGCProvider>
    </>
  )
}
