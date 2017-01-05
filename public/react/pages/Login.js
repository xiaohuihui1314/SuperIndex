import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import  {Button,DatePicker } from 'antd';

import * as loginAction from '../redux/actions/login';
class Login extends React.Component {
    loginSubmit(e){
        e.preventDefault();
        var a ={
            userName:this.refs.userName.value,
            passWord:this.refs.userPwd.value
        }
        this.props.requireRequset(a);
    }
    render() {
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.loginSubmit.bind(this)}>
                    <input ref="userName" type="text" placeholder="用户名" defaultValue="111"/>
                    <input ref="userPwd" type="password" placeholder="密码" defaultValue="111" />
                    <button type="submit">登录</button>
                </form>
                <Button type="primary">Primary</Button>

                <DatePicker />
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("statestatestatestatestatestatestatestatestatestatestatestatestate2");
    console.log(state);
    const {postBy} =state;

    // const {isFetching,login: posts}=postBy["user"];
    return {
        postBy,
        // posts,

    }
}
function select(dispatch) {
    return bindActionCreators(loginAction,dispatch)

}
export default connect(mapStateToProps,select)(Login);