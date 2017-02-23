import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Form, Icon, Input, Button} from 'antd';
const FormItem = Form.Item;
import * as loginAction from '../redux/actions/login';
import {hashHistory,Link} from 'react-router';
class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.fetchBtn = this.fetchBtn.bind(this);
    }

    fetchBtn(){
        const {loginRequest} =this.props;
        loginRequest.testRequst()
    }

    loginSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {loginRequest} =this.props;
                loginRequest.loginFetch(values);
            }
        });
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.loginReducer.loginState&&nextProps.loginReducer.userName!=null&&nextProps.loginReducer.userName!=undefined){
            const path = "/";
             hashHistory.push(path);
        }
    }
    render() {
        const {getFieldDecorator} =this.props.form;
        return (
            <Form onSubmit={this.loginSubmit.bind(this)} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                    <Input   type="text" placeholder="用户名"  />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('passWord', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                    <Input   type="password" placeholder="密码"  />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary"  className="login-form-button" htmlType="submit">登录</Button>
                    <Link to="/">首页</Link>
                </FormItem>
                <div>
                    <button type="button" onClick={this.fetchBtn}>点击获取</button>
                </div>
            </Form>

        )
    }
}
const Login = Form.create()(LoginForm);
function mapStateToProps(state) {
    const {loginReducer } =state;
    return {
        loginReducer
    }
}
/*function loginDisProps(dispatch) {
    return {
        loginRequset: (e) => {
            dispatch(loginAction.requireRequset(e))
        }
    }
}*/
function loginDisProps(dispatch) {
    return {
        loginRequest: bindActionCreators(loginAction,dispatch)
    }
}
export default connect(mapStateToProps, loginDisProps)(Login);