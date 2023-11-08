import { useSelector } from "react-redux"
export function useAuthSession() {
  const session = useSelector((state) => state.auth)
  return session
}


