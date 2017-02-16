export const LOGIN = "LOGIN";
export const LOGINSTART = "LOGINSTART";
export const LOGINEND = "LOGINEND";

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

// 远程获取数据
function fetchRequest(name) {
    return dispatch=> {
        dispatch(startLogin(name));
        return fetch("http://localhost:3000/login", {
            method: "POST",
            mode: 'cors',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `userName=${name.userName}&passWord=${name.passWord}`
        }).then(function (res) {
            if (res.ok) {
                res.json().then(function (json) {
                    dispatch(endLogin(name, json));
                });
            }
        }).catch(function (e) {
            console.log("系统繁忙~~");
        });
    }
}
// 触发获取数据
export function requireRequset(name) {
    return (dispatch)=> {
        dispatch(fetchRequest(name))
    }
}