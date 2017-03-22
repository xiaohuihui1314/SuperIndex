import {Layout} from 'antd';
import MenuList  from './NavPage/Menu';
import SliderWrap  from './SliderPage/Sider';
const {Header, Footer, Sider, Content} = Layout;

class App extends React.Component {
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
        console.log(this.state);
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
                           id="leftSide"
                    >
                        <SliderWrap mode={this.state.mode}/>
                    </Sider>
                    <Layout>
                        <Header>
                            <MenuList/>
                        </Header>
                        <Content>
                            {  this.props.children || <h1>hello world!</h1>}
                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
export {
    App as default
}