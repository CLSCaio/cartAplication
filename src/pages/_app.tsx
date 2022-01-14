import { Provider } from 'react-redux'

import '../styles/globals.css'
import '../styles/global_fonts.css'
import '../styles/scrollBar.css'

import store from '../store'

import Header from '../modules/Header/'
import Footer from '../modules/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </Provider>
    
  )
}

export default MyApp
