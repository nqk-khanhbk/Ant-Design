import { Table,Badge,Tag,Tooltip } from "antd";
import DeleteRoom from "./deleteRoom";
import EditRoom from "./editRoom";
function ListtRoom (props){
    const {room,onReload} = props;
    console.log(room)
    const columns = [
        {
            title: 'Tên phòng',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Số người',
            dataIndex: 'qualityPeople',
            key: 'qualityPeople',
        },
        {
            title: 'Số giường',
            dataIndex: 'qualityBed',
            key: 'qualityBed',
        },
        {
            title: 'Loại Phòng',
            dataIndex: 'typeRoom',
            key: 'typeRoom',
            render:(_,record)=>{
                return (
                    <>
                    {record.typeRoom ? (
                        <Badge status="success" text = "VIP" />
                    ):(
                        <Badge status="error"  text = "Thường"/>
                    )}
                    </>
                )

                 
            }
        },
        {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
            render:(_,record)=>{
                return (
                    <>
                    {record.status ? (
                        <Tooltip title="Phòng này hiện vẫn còn"  color ="green" >
                            <Tag color="orange">Còn phòng</Tag>
                        </Tooltip>
                         
                    ):(
                        <Tooltip title="Phòng này hiện đã hết,vui lòng quay lại sau"  color ="#2db7f5" >
                            <Tag color="red">Hết phòng</Tag>
                        </Tooltip>
                        
                    )}
                    </>
                )

                 
            }
        },
        {
            title: 'Hoạt động',
            
            key: 'active',
            render:(_,record)=>{
                return (
                    <>
                    <DeleteRoom record = {record} onReload={onReload}/>
                    <EditRoom record = {record} onReload={onReload}/>
                    </>
                )

                 
            }
        }
    ]
    return (
        <>
        <Table dataSource={room} columns={columns} rowKey="id" />;
        </>
    )
}
export default ListtRoom;