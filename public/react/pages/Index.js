import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {requireRequset} from '../redux/actions/login';
import {Menu, Icon,Carousel } from 'antd';
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
        const {loginState, postBy} =this.props;
        console.log(loginState);
       /* setInterval(() => {
            document.getElementsByClassName("gorgeous")[0].style.transform = "scaleX(." + Math.ceil(Math.random() * 10) + ")"
        }, 120);*/
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
                    {!loginState &&
                    <Menu>
                        <Menu.Item style={{float: 'right'}}>
                            <Link to="/register">注册</Link>
                        </Menu.Item>
                        <Menu.Item style={{float: 'right'}}>
                            <Link to="/login">登录</Link>
                        </Menu.Item>

                    </Menu>
                    }
                    {loginState &&
                    <Menu.Item style={{float: 'right'}}>
                        <Icon type="user"/>{postBy.userName}
                    </Menu.Item>
                    }
                </Menu>
                <section className="section-navbar">
                    <h1>Welcome to SuperIndex</h1>
                    <div className="gorgeous"></div>

                </section>
                <Carousel   >
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {loginRequest, postBy} =state;
    const {loginState, isFetching, items: posts}=postBy[loginRequest] || {
        loginState: postBy.loginState,
        isFetching: true,
        items: []
    };
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