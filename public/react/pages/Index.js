import React from 'react';
import {Link} from 'react-router';
class Index extends React.Component {
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
export {
    Index as default
}