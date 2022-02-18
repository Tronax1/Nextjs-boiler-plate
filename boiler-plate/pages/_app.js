import '../styles/globals.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from '../redux/store'

function MyApp({ Component, pageProps }) {
  const {store, persistor} = useStore()
  return  <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
            </PersistGate>
          </Provider>
}

export default MyApp
