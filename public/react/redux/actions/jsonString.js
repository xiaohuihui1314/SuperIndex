const jsonString = function jsonString(o) {
    if (typeof  o != "object" || o instanceof Array) {
        return console.log("不是对象类型！");
    }
    const params = [];
    let k, hasOp = Object.hasOwnProperty;
    for (k in o) {
        if (hasOp.call(o, k)) {
            const v = o[k] === undefined ? '' : o[k];
            params.push(`${k}=${v}`);
        }
    }
    return params.join('&');
};
const fetchSup = (fetchObj)=> {
    if (typeof  fetchObj != "object" || fetchObj instanceof Array) {
        return console.log("不是对象类型！");
    }
    const body = fetchObj.body == undefined ? {} : jsonString(fetchObj.body);
    let token =localStorage.getItem("token");
    return fetch(fetchObj.url, {
        method: fetchObj.method,
        mode: fetchObj.cors,
        body: body,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": token
        },
    }).then(function (res) {
        if (res.ok) {
            res.json().then(function (json) {
                fetchObj.success(json);
            });
        }
    }).catch(function (e) {
        console.log("系统繁忙~~");
    });
};
export{
    fetchSup as default
}
