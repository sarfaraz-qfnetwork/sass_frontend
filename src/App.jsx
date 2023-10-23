import Landing from './pages/landing'
import Contact from './pages/contact'
import Login from './pages/login'
import Register from './pages/register'
import {Route, Routes as Switch} from 'react-router-dom'


export default function App() {
  return <>
    <Switch>
      <Route path='/' Component={Landing}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/register' Component={Register}/>
      <Route path='/login' Component={Login}/>
    </Switch>  
  </>
}
