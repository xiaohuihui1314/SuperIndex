export const REGISTE = "REGISTE";
export const REGISTESTART = "REGISTESTART";
export const REGISTEEND = "REGISTEEND";
import fetchSup from './jsonString';
function startRegister(register) {
    return {
        type: REGISTESTART,
        register
    }

}
function endRegister(register, json) {
    return {
        type: REGISTEEND,
        register: register,
        registerData: json
    }
}

// 远程获取数据
function fetchRequest(name) {
    console.log(name);
    return dispatch => {
        dispatch(startRegister(name));
        return fetchSup({
            url:"http://localhost:3000/register",
            method: 'POST',
            mode: 'cors',
            body: name,
            success:function (json) {

                dispatch(endRegister(name, json));
            }
        });
    }
}
// 触发获取数据
export function registerFetch(name) {
    return (dispatch) => {
        dispatch(fetchRequest(name))
    }
}