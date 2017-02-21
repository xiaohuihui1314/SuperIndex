import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import CarouselList from "./Carousel"
import {Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.fetchBtn = this.fetchBtn.bind(this);
    }
    //初始化渲染后触发
    componentDidMount() {
    }
    fetchBtn(){
        let token =localStorage.getItem("token");
        this.props.testRequst(token)
    }
    render() {
        const {loginState, loginReducer} =this.props;
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
                        <Icon type="user"/>{loginReducer.userName}
                    </Menu.Item>
                    }
                </Menu>
                <CarouselList/>
                <div>
                    <button type="button" onClick={this.fetchBtn}>点击获取</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {loginRequest, loginReducer} =state;
    const {loginState, isFetching, items: posts}=loginReducer[loginRequest] || {
        loginState: loginReducer.loginState,
        isFetching: true,
        items: []
    };
    return {

        loginState,
        isFetching,
        loginReducer
    }
}

export default connect(mapStateToProps)(Index);