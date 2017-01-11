import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Form, Icon, Input, Button, Select} from 'antd';
const FormItem = Form.Item;
// this.props.requireRequset(a);
import * as loginAction from '../redux/actions/login';
import {hashHistory,Link} from 'react-router';
class LoginForm extends React.Component {
    loginSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.requireRequset(values);

            }
        });
    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps1");
        console.log(nextProps.postBy.loginState);
        if(nextProps.postBy.loginState){
             const path = "/";
             hashHistory.push(path);
        }
        console.log("componentWillReceiveProps2");
    }
    render() {
        console.log(this.props);
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
            </Form>

        )
    }
}
const Login = Form.create()(LoginForm);
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
    return bindActionCreators(loginAction, dispatch)

}
export default connect(mapStateToProps, select)(Login);