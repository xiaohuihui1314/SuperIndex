import { Row,Col,Card } from 'antd';
class CardList extends React.Component{
    render(){
        return(
         <Row style={{width:"1200px",margin:"0 auto"}}>
             <Col span={6}>
                 <Card>
                     <div className="custom-image">
                         <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                     </div>
                     <div className="custom-card">
                         <h3>Europe Street beat</h3>
                         <p>www.instagram.com</p>
                     </div>
                 </Card>
             </Col>




         </Row>
        )
    }
}
export {
    CardList as default
}