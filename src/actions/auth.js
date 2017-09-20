export const LOGIN_ACTION = 'LOGIN' 
export const login = (username, password) => {
    return {
        type: LOGIN_ACTION,
        data: {username,password}
    }
}
export const logout = ({
    type: 'LOGOUT'
})