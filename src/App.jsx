import Landing from './pages/landing'
import Contact from './pages/contact'
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/dashboard'

import AdminDashboard from './pages/admin/dashboard'
import Users from './pages/admin/users'
import Tickets from './pages/admin/tickets'
import Profile from './pages/profile'
import Plane from './pages/plane'
import Subscribers from './pages/subscribers'
import Protected from './auth/protectedRoute'
import Aos from 'aos'
import { Route, Routes as Switch } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadSession } from './store/slice/auth'
import { useAuthSession } from './hooks/authSession'

export default function App() {

  const dispatch = useDispatch()
  const session = useAuthSession()

  useEffect(() => {
    dispatch(loadSession())
    Aos.init({ once: true })
    Aos.refreshHard()

    // google auth
    // eslint-disable-next-line no-undef

  }, [])

  useEffect(() => {
    console.log(session);
  }, [session])
  return <>
    <Switch>
      <Route path='/' Component={Landing} />
      <Route path='/contact' Component={Contact} />
      <Route path='/register' Component={Register} />
      <Route path='/login' Component={Login} />
      <Route path='/dashboard' element={<Protected><AdminDashboard /></Protected>} />
      <Route path='/profile' element={<Protected><Profile /></Protected>} />
      <Route path='/plane' element={<Protected><Plane /></Protected>} />
      {/* admin routes */}
      <Route path='/users' element={<Protected><Users /></Protected>} />
      <Route path='/tickets' element={<Protected><Tickets /></Protected>} />
      {/* admin routes */}
      <Route path='/subscribers' Component={Subscribers} />
    </Switch>
  </>
}
