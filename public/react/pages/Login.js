import React from 'react';
import {connect} from 'react-redux';

import {requireRequset} from '../redux/actions/login';
class Login extends React.Component {
    //初始化渲染后触发
    componentDidMount() {
        console.log('22222222');
        const {loginRequest} = this.props;
        console.log(this.props)
        // this.props.requireRequset(loginRequest);

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
        this.props.requireRequset(a);   
    }
    render() {
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%");
        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.loginSubmit.bind(this)}>
                    <input ref="userName" type="text" placeholder="用户名"/>
                    <input ref="userPwd" type="password" placeholder="密码"/>
                    <button type="submit">登录</button>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("statestatestatestatestatestatestatestatestatestatestatestatestate2");
    console.log(state);
    const {postBy} =state;
    console.log(postBy);
    const {isFetching,user: posts}=postBy||{isFetching: true, user: []};
    return {
        isFetching,
        posts,

    }
}
function select(dispatch) {
    return {
        requireRequset:(e)=>{
            dispatch(requireRequset(e))
        }
    }

}
export default connect(mapStateToProps,select)(Login);