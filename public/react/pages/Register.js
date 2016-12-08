import React from 'react';
class Login extends React.Component {
    loginSubmit(){

    }
    render() {
        return (
            <div>
                <form onSubmit={this.loginSubmit}>
                    <input type="text" placeholder="用户名"/>
                    <input type="text" placeholder="密码"/>
                    <button type="submit">注册</button>
                </form>
            </div>
        )
    }
}
export {
    Login as default
}