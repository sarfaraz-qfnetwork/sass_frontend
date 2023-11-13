import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme/chakra.js'
import axios from 'axios'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store'
import { Provider } from 'react-redux'

import './index.css'
import 'aos/dist/aos.css'

axios.defaults.baseURL = 'https://phpstack-820604-4052369.cloudwaysapps.com/api/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
)
