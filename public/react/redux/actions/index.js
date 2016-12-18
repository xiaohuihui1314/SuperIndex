import fetch from 'isomorphic-fetch';
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
function startLogin(login) {
    return{
        type:LOGINSTART,
        login
    }

}
function endLogin(login,json) {
    return{
        type:LOGINEND,
        login:login,
        loginData:json
    }
}
// 远程获取数据
function fetchRequest(login) {
    return dispatch=> {
        dispatch(startLogin(login));
        return fetch(`https://www.reddit.com/r/${login}.json`)
            .then(response => response.json())
            .then(json => dispatch(endLogin(login, json)));
    }
}

// 触发获取数据
export  function requireRequset(name){
    return (dispatch)=>{
        dispatch(fetchRequest(name))
    }
}