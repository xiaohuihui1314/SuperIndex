import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {requireRequset} from '../redux/actions/login';
import {Menu, Icon,Button} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Index extends React.Component {
    //初始化渲染后触发
    componentDidMount() {
        const {loginRequest} = this.props;
        // this.props.requireRequset(loginRequest);

    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Link to="/"><Icon type="home"/>主页</Link>
                    </Menu.Item>
                    <Menu.Item key="user">
                        <Icon type="user"/>我的主页
                    </Menu.Item>
                    <SubMenu title={<span><Icon type="setting"/>产品</span>}>
                        <MenuItemGroup>
                            <Menu.Item key="setting:1">产品 1</Menu.Item>
                            <Menu.Item key="setting:2">产品 2</Menu.Item>
                            <Menu.Item key="setting:3">产品 3</Menu.Item>
                            <Menu.Item key="setting:4">产品 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    <Menu.Item style={{float:'right'}}>
                        <Button type="primary">登录</Button>
                    </Menu.Item>
                </Menu>
                <section className="section-navbar">
                    <h1>Welcome to SuperIndex</h1>
                    <div className="gorgeous"></div>
                </section>
                <section className="section-content">
                    <p>
                        <Link to="/login" type="button" className="btn-a login-btn">登录</Link>
                    </p>
                    <p>
                        <Link to="/register" className="btn-a register-btn">注册</Link>
                    </p>
                </section>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {loginRequest, postBy} =state;
    const {loginState,isFetching, items: posts}=postBy[loginRequest] || {loginState:false,isFetching: true, items: []};
    return {
        loginRequest,
        loginState,
        isFetching,
        postBy
    }
}
function select(dispatch) {
    return {
        requireRequset: (e) => {
            dispatch(requireRequset(e))
        }
    }

}
export default connect(mapStateToProps, select)(Index);