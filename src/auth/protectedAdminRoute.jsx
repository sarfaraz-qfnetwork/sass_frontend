/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthSession } from '../hooks/authSession'

export default function ProtectedRoute({ children }) {
    const session = useAuthSession()
    const navigate = useNavigate()
    useEffect(() => {
        if (session.status === 'unauthenticated' || session.user.type !== 'ADMIN')
            navigate('/login')

    }, [navigate, session])
    return <>
        {children}
    </>
}
