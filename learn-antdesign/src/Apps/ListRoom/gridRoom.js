import {Row,Col,Card,Badge} from "antd";
function GridRoom (props){
    const {room} = props;
    return (
        <>
        <Row gutter={[20,20]}>
            {room.map(item=>(
                <Col xl={12} key={item.id}>
                    <Badge.Ribbon 
                        text = {item.typeRoom ? "VIP":"Thường"}
                        color = {item.typeRoom ? "red" : "green"}
                    >
                        <Card hoverable title = {item.name}> 
                            <p>Số lượng người: <strong>{item.qualityPeople}</strong></p>
                            <p>Số lượng giường: <strong>{item.qualityBed}</strong></p>
                            <p>
                                {item.status ? (
                                    <>
                                       
                                        <Badge status="success" text = "Còn phòng" />
                                    </>
                                    
                                ):(
                                    <Badge status="error"  text = "Hết phòng"/>
                                )}
                            </p>
                        </Card>
                    </Badge.Ribbon>
                    
                   
                </Col>
            ))}
            </Row>
        </>
    )
}
export default GridRoom;