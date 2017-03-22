import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;
import {Link} from 'react-router';

class SliderWrap extends React.Component{
    render(){
        return(
           <div>
               <h1>Hello</h1>
               <Menu theme="dark" mode={this.props.mode} defaultSelectedKeys={['6']}>
                   <SubMenu
                       key="sub1"
                       title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
                   >
                       <Menu.Item key="1"> <Link to="/user"/>用户列表</Menu.Item>
                       <Menu.Item key="2">Bill</Menu.Item>
                       <Menu.Item key="3">Alex</Menu.Item>
                   </SubMenu>
                   <SubMenu
                       key="sub2"
                       title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
                   >
                       <Menu.Item key="4">Team 1</Menu.Item>
                       <Menu.Item key="5">Team 2</Menu.Item>
                   </SubMenu>
                   <Menu.Item key="6">
              <span>
                <Icon type="file" />
                <span className="nav-text">File</span>
              </span>
                   </Menu.Item>
               </Menu>
           </div>
        )
    }
}
export {
    SliderWrap as default
}