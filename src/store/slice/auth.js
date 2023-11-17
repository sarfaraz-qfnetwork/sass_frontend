import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: null,
    token: null,
    status: 'loading',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (_, action) => {
            localStorage.setItem('auth_session', JSON.stringify(action.payload))
            return action.payload
        },
        signOut: (state) =>{
            localStorage.removeItem('auth_session')
            axios.post('/logout',null,{headers:{
                Authorization:`Bearer ${state.token}`
            }})
            return { user: null, token: null, status: 'unauthenticated' }

        },
        loadSession: () => {
            const session = localStorage.getItem('auth_session')
            if (session && session.token !== "") {
                const sessionData = JSON.parse(session)
                axios.defaults.headers.common['Authorization'] = `Bearer ${sessionData.token}`;
                return sessionData
            }
            return { user: null, token: null, status: 'unauthenticated' }
        }
    },
})

export const { signIn, signOut, loadSession } = authSlice.actions

export default authSlice.reducer