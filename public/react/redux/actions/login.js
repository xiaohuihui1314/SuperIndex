export const LOGIN = "LOGIN";
export const LOGINSTART = "LOGINSTART";
export const LOGINEND = "LOGINEND";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
import fetchSup from './jsonString';
const jwtCode =require("jwt-decode");
function startLogin(login) {
    return {
        type: LOGINSTART,
        login
    }

}
function endLogin(login,json) {
    return {
        type: LOGINEND,
        login: login,
        loginData: json
    }
}
export function loginUserSuccess(token) {
    localStorage.setItem('token', token);
    return {
        type: LOGIN_USER_SUCCESS,
        payload: {
            token: token
        }
    }
}


// 远程获取数据
function fetchRequest(name) {
    return dispatch=> {
        dispatch(startLogin(name));
        return fetchSup({
            url:"http://localhost:3000/login",
            method: 'POST',
            mode: 'cors',
            body: name,
            success:function (json) {
                console.log(json);
                console.log(jwtCode(json.token));

                dispatch(loginUserSuccess(json.token));
                dispatch(endLogin(name, json));
            }
        });

    }
}
// 触发获取数据
export function requireRequset(name) {
    return (dispatch)=> {
        dispatch(fetchRequest(name))
    }
}