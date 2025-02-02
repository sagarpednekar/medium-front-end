
export default function useAuth() {
    const token = localStorage.getItem("token")
    console.log("isAuthenticated",!!token)
    return { isAuthenticated: !!token, token }
}
