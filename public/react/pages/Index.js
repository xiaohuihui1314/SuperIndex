import {connect} from 'react-redux';
import CarouselList from "./Carousel"
import CardList from "./Card"
import Modal from "./Modal"
import LayoutList from "./LayoutList"


class Index extends React.Component {
    //初始化渲染后触发
    componentDidMount() {
    }

    render() {

        /* setInterval(() => {
         document.getElementsByClassName("gorgeous")[0].style.transform = "scaleX(." + Math.ceil(Math.random() * 10) + ")"
         }, 120);*/
        return (
            <div>

                <Modal/>
                <CarouselList/>
                <CardList/>
                <LayoutList/>
            </div>
        )
    }
}
function mapStateToProps(state) {
    const {loginRequest, loginReducer} =state;
    const {loginState, isFetching, items: posts}=loginReducer[loginRequest] || {
        loginState: loginReducer.loginState,
        isFetching: true,
        items: []
    };
    return {
        loginState,
        isFetching,
        loginReducer
    }
}

export default connect(mapStateToProps)(Index);