import '../styles/globals.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { useStore } from '../redux/store'
import  useInterceptor  from '../utils/interceptor'

function MyApp({ Component, pageProps }) {
  const {store, persistor} = useStore()
  useInterceptor(store)
  return  <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
            </PersistGate>
          </Provider>
}

export default MyApp
