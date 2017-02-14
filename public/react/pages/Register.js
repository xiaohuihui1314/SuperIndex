import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Form, Icon, Input, Button,Select} from 'antd';
import * as registerAction from '../redux/actions/register'

const FormItem = Form.Item;
class Login extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log(this)
       this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.props.requireRequset(values);
                console.log(this.props)
            }
        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;
       /* const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+86',
        })(
            <Select className="icp-selector">
                <Option value="86">+86</Option>
            </Select>
        );*/
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <FormItem >
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                    })(
                        <Input addonBefore={<Icon type="user" />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('passWord', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                    )}
                </FormItem>

               {/* <FormItem>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        <Input addonBefore={prefixSelector} />
                    )}
                </FormItem>*/}
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>

                </FormItem>
            </Form>
        );
    }
}
const NormalLoginForm = Form.create()(Login);

function mapStateToProps(state) {
    const {registerReducer} =state;
    return {
        registerReducer
    }
}
function select(dispatch) {
    return bindActionCreators(registerAction, dispatch)

}
export default connect(mapStateToProps, select)(NormalLoginForm);
