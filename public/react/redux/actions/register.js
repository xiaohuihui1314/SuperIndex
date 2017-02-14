export const REGISTE = "REGISTE";
export const REGISTESTART = "REGISTESTART";
export const REGISTEEND = "REGISTEEND";

function startRegister(register) {
    return {
        type: REGISTESTART,
        register
    }

}
function endRegister(register,json) {
    return {
        type: REGISTEEND,
        login: register,
        loginData: json
    }
}

// 远程获取数据
function fetchRequest(name) {
    console.log(name);
    return dispatch=> {
        dispatch(startRegister(name));
        return fetch("http://localhost:3000/register", {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                name: 'abby',
                psd: 111
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(json => dispatch(endRegister(name,json)));
    }
}
// 触发获取数据
export function requireRequset(name) {
    return (dispatch)=> {
        dispatch(fetchRequest(name))
    }
}