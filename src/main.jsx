import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import theme from './theme/chakra.js'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'aos/dist/aos.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
)
