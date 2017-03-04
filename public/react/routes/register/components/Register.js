import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Form, Icon, Input, Button} from 'antd';
import * as registerAction from '../../../redux/actions/register'
const FormItem = Form.Item;
class Login extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
       this.props.form.validateFields((err, values) => {
            if (!err) {
               const {registerRequest} =this.props;
                registerRequest.registerFetch(values);
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
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
function registerDisProps(dispatch) {
    return {
        registerRequest: bindActionCreators(registerAction,dispatch)
    }
}
module.exports = connect(mapStateToProps, registerDisProps)(NormalLoginForm);
