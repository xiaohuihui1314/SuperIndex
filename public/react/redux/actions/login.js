export const LOGIN = "LOGIN";
export const LOGINSTART = "LOGINSTART";
export const LOGINEND = "LOGINEND";

export function userLogin(login) {
    return {
        type: LOGIN,
        what:"login",
        login
    }
}
function startLogin(login) {
    return {
        type: LOGINSTART,
        login
    }

}
function endLogin( json) {
    return {
        type: LOGINEND,
        // login: login,
        loginData: json
    }
}

// 远程获取数据
function fetchRequest(name) {
    return dispatch=> {
        dispatch(startLogin());
        console.log("ACTIONACTIONACTIONACTIONACTIONACTION");
        console.log(name);
        return fetch("http://localhost:3000/login", {
            method: "POST",
            mode: 'cors',
            cache: 'default',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `userName=${name.userName}&passWord=${name.passWord}`
        })
            .then(response => response.json())
            .then(json => dispatch(endLogin( json)));
    }
}

// 触发获取数据
export function requireRequset(name) {
    console.log(name);
    return (dispatch)=> {
        dispatch(fetchRequest(name))
    }
}