import {Row,Col} from "antd";
import CartItem from "../CartItem";
function LearnGrid (){
    return (
        <>
        <Row gutter={[10,20]}>
            <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
                <CartItem item = "Box 1"/>
            
            </Col>
            <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
                <CartItem item = "Box 2"/>
            </Col>
            <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
                <CartItem item = "Box 3"/>
            </Col>
            <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24}>
                <CartItem item = "Box 4"/>
            </Col>      
        </Row>
        <Row gutter={[10,20]} className="mt-20">
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <CartItem item = "Box 5" style={{height:"300px"}} />
            </Col>
            <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24}>
                <CartItem item = "Box 5" style={{height:"300px"}}/>
            </Col>
        </Row>
        </>
    )
}
export default LearnGrid;