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
        type:LOGINEND,
        loginData
    }
}
// 远程获取数据
function fetchRequest(name) {
    return dispatch=> {
        dispatch(startLogin(name));
        return fetch(`https://www.reddit.com/r/${name}.json`)
            .then(response => response.json())
            .then(json => dispatch(endLogin(name, json)));
    }
}

// 触发获取数据
export  function requireRequset(name){
    return (dispatch)=>{
        dispatch(fetchRequest(name))
    }
}