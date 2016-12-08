import React from 'react';
class Login extends React.Component {
    loginSubmit(e){
        e.preventDefault();
        console.log(this.refs.userName.value)
        console.log(this.refs.userPwd.value)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.loginSubmit.bind(this)}>
                    <input ref="userName" type="text" placeholder="用户名"/>
                    <input ref="userPwd" type="text" placeholder="密码"/>
                    <button type="submit">登录</button>
                </form>
            </div>
        )
    }
}
export {
    Login as default
}