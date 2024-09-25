import { Button,Alert } from "antd";
import { DeleteOutlined  } from "@ant-design/icons";
import { deleteRoom } from "../services/roomService";
function DeleteRoom(props){
    const {record,onReload}  = props;
    const handleDelete = async () =>{
        const responsive = await deleteRoom(record.id);
        if(responsive){
             onReload();
             <Alert message="Đã xóa thành công" type="success" showIcon />
        }
        else{
            <Alert message="Warning" type="warning" showIcon closable />  
        }
    }
    return (
        <>      
        <Button  onClick={handleDelete} icon = {<DeleteOutlined />} danger />        
        </>
    )
}
export default DeleteRoom;