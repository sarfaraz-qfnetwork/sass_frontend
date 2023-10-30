import Landing from './pages/landing'
import Contact from './pages/contact'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'
import Plane from './pages/plane'
import Subscribers from './pages/subscribers'
import Aos from 'aos'
import {Route, Routes as Switch} from 'react-router-dom'
import { useEffect } from 'react'


export default function App() {

  useEffect(()=>{
    Aos.init({once:true})
    Aos.refreshHard()
  },[])
  return <>
    <Switch>
      <Route path='/' Component={Landing}/>
      <Route path='/contact' Component={Contact}/>
      <Route path='/register' Component={Register}/>
      <Route path='/login' Component={Login}/>
      <Route path='/dashboard' Component={Dashboard}/>
      <Route path='/plane' Component={Plane}/>
      <Route path='/subscribers' Component={Subscribers}/>
    </Switch>  
  </>
}
