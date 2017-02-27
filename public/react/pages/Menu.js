import {Menu, Icon} from 'antd';
import {Link} from 'react-router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MenuList extends React.Component{
    render(){
        const {loginState, loginReducer} =this.props;
        return(
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
                        <Menu.Item style={{float: 'right'}}>
                            <Icon type="user"/>我的主页
                        </Menu.Item>
                    </Menu>
                    }
                    {loginState &&
                    <Menu.Item style={{float: 'right'}}>
                        <Icon type="user"/>{loginReducer.userName}
                    </Menu.Item>
                    }
                </Menu>
            </div>
        )
    }
}
export {
    MenuList as default
}