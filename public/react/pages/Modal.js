import React from 'react';
import { Modal, Button } from 'antd';

class Test extends React.Component{
   /* getInitialState() {
        return {
            loading: false,
            visible: false,
        };
    }
    showModal() {
        this.setState({
            visible: true,
        });
    }
    handleOk() {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel() {
        this.setState({ visible: false });
    }*/
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open modal dialog
                </Button>
                <Modal
                    title="Title"
                    footer={[
                        <Button key="back" size="large" onClick={this.handleCancel}>Return</Button>,
                        <Button key="submit" type="primary" size="large" loading={this.state.loading} >
                            Submit
                        </Button>,
                    ]}
                >
                </Modal>
            </div>
        );
    }
}
