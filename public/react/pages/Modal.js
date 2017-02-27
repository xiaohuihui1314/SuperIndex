import { Modal, Button } from 'antd';

class Test extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            loading: false,
            visible: false,
        };
        this.showModal=this.showModal.bind(this);
        this.handleOk=this.handleOk.bind(this);
        this.handleCancel=this.handleCancel.bind(this);
    }
    showModal() {
        console.log("2222")
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
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Open modal dialog
                </Button>
                <Modal visible={this.state.visible}
                    title="Title"
                       onOk={this.handleOk} onCancel={this.handleCancel}
                >
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </div>
        );
    }
}
export {
    Test as default
}