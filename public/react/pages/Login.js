import React from 'react';
import {connect} from 'react-redux';

import {userLogin,requireRequset} from '../redux/actions/login';
class Login extends React.Component {
    //初始化渲染后触发
    componentWillReceiveProps(nextProps) {
        console.log('初始化渲染后触发');
        const {loginRequest}=nextProps;

        this.props.requireRequset(loginRequest);
    }
    loginSubmit(e){
        e.preventDefault();
        console.log(this.refs.userName.value)
        console.log(this.refs.userPwd.value)
        const { requireRequset } = this.props;
        var a ={
            userName:this.refs.userName.value,
            passWord:this.refs.userPwd.value
        }
        this.props.userLogin(a);
    }
    render() {
      /*  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(this.props);*/
        return (
            <div>
                <form onSubmit={this.loginSubmit.bind(this)}>
                    <input ref="userName" type="text" placeholder="用户名" defaultValue="111"/>
                    <input ref="userPwd" type="password" placeholder="密码" defaultValue="111" />
                    <button type="submit">登录</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("statestatestatestatestatestatestatestatestatestatestatestatestate2");
    console.log(state);
    const {loginRequest,postBy} =state;

    const {isFetching,login: posts}=postBy[loginRequest]||{isFetching: true, login: []};
    return {
        loginRequest,
        isFetching,
        posts,

    }
}
function select(dispatch) {
    return {
        userLogin:(e)=>{
            dispatch(userLogin(e))
        },
        requireRequset:(e)=>{
            dispatch(requireRequset(e))
        }
    }

}
export default connect(mapStateToProps,select)(Login);