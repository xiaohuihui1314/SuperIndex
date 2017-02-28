import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class SliderWrap extends React.Component{
    render(){
        return(
            <Menu
                mode="inline"
                defaultSelectedKeys={['6']}
                style={{ height: '100%' }}
            >
                <h1>welcome to you!</h1>
                <SubMenu key="sub1" title={<span><Icon type="user" />用户管理</span>}>
                    <Menu.Item key="1">用户列表</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="laptop" />内容管理</span>}>
                    <Menu.Item key="5">公告内容</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" title={<span><Icon type="notification" />广告管理</span>}>
                    <Menu.Item key="9">广告列表</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}
export {
    SliderWrap as default
}