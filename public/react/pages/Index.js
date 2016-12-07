import React from 'react';
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
                        <button type="button" className="btn login-btn">登录</button>
                    </p>
                    <p>
                        <button type="button" className="btn register-btn">注册</button>
                    </p>
                </section>
            </div>
        )
    }
}
export {
    Index as default
}