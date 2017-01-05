import React from 'react';
import { Form, Icon, Input, Button, Checkbox,DatePicker,Select} from 'antd';
const FormItem = Form.Item;
class Login extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log(this)
       this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '+86',
        })(
            <Select className="icp-selector">
                <Option value="86">+86</Option>
            </Select>
        );
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
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                    })(
                        <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                    )}
                </FormItem>
               {/* <FormItem
                label="create date"
                labelCol={{span:8}}
                wrapperCol={{span:16}}
                >
                    {getFieldDecorator('date', {
                        rules: [{ required: true, message: '请选择生日!' }],
                    })(
                        <DatePicker   type="text" placeholder="生日" />
                    )}
                </FormItem>*/}
                <FormItem>
                    {getFieldDecorator('phone', {
                        rules: [{ required: true, message: 'Please input your phone number!' }],
                    })(
                        <Input addonBefore={prefixSelector} />
                    )}
                </FormItem>
                <FormItem>
                 {/*   {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot">Forgot password</a>*/}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
 const NormalLoginForm = Form.create()(Login);

export {
    NormalLoginForm as default
}
