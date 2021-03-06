import {Layout} from 'antd';
import MenuList  from './NavPage/Menu';
import SliderWrap  from './SliderPage/Sider';
const {Header, Footer, Sider, Content} = Layout;
class LayoutList extends React.Component {
    constructor(props) {
        super(props);
        this.onCollapse = this.onCollapse.bind(this);
        this.state = {
            collapsed: false,
            mode: 'inline'
        }
    }
    onCollapse(collapsed) {
        console.log(collapsed);
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }
    render() {
        console.log(this.props);
        console.log(this.props.routes);
        // routes.map((item, index) =>
        return (
            <div style={{height: '100%'}}>
                <Layout style={{height: '100%'}}>
                    <Sider collapsible
                           collapsed={this.state.collapsed}
                           onCollapse={this.onCollapse}
                    >
                        <SliderWrap/>
                    </Sider>
                    <Layout>
                        <Header>
                            <MenuList/>
                        </Header>
                        <Content>
                                {  this.props.children||<h1>22 asdasd22</h1>}
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export {
    LayoutList as default
}
