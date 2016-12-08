export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER";
export const LOGINSTART="LOGINSTART";
export const LOGINEND="LOGINEND";
export function Login(login) {
    return {
        type: LOGIN,
        login
    }
}
export function Register(register) {
    return {
        type: REGISTER,
        register
    }
}
function startLogin(loginData) {
    return{
        type:LOGINSTART,
        loginData
    }

}
function endLogin(loginData) {
    return{
        type:LOGINSTART,
        loginData
    }
}
