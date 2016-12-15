import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {Login,requireRequset} from '../redux/actions/index';
class Index extends React.Component {
    //初始化渲染后触发
    componentDidMount() {
        console.log('执行componentDidMount');
        const {loginRequest} = this.props;
        console.log(this.props)
        this.props.requireRequset(loginRequest);

    }
    render() {
        return (
            <div>
                <section className="section-navbar">
                    <h1>Welcome to SuperIndex</h1>
                    <div className="gorgeous"></div>
                </section>
                <section className="section-content">
                    <p>
                        <Link to="/login" type="button" className="btn-a login-btn">登录</Link>
                    </p>
                    <p>
                        <Link  to="/register" className="btn-a register-btn">注册</Link>
                    </p>
                </section>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log("SSSSSSSSSSSSSSSSs");
    console.log(state);
    const {loginRequest,postBy} =state;
    const {isFetching,items: posts}=postBy[loginRequest]||{isFetching: true, items: []};
    return {
        loginRequest,
        isFetching,
        posts
    }
}
function select(dispatch) {
    return {
        requireRequset:(e)=>{
            dispatch(requireRequset(e))
        }
    }

}
export default connect(mapStateToProps, select)(Index);