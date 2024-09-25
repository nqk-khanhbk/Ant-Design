import { useEffect, useState } from "react";
import { getListRoom } from "../services/roomService";
import { Button} from "antd";
import {UnorderedListOutlined,AppstoreOutlined } from "@ant-design/icons";
import GridRoom from "./gridRoom";
import ListtRoom from "./listRoom";
function ListRoom (){
    const [room,setRoom] = useState([]);
    const [isGrid,setIsGrid] = useState(false);

    const fetchApi = async ()=>{
        const respon = await getListRoom();
        setRoom(respon);
    };
    useEffect(()=>{
        fetchApi();
    },[]);
    const handleReload = ()=>{
        fetchApi();
    }
    return (
        <>
        <Button onClick={()=>setIsGrid(false)}>
             <UnorderedListOutlined />
        </Button>
        <Button onClick={()=>setIsGrid(true)}>
            <AppstoreOutlined />
        </Button>
        {isGrid ? (
            <GridRoom room = {room}/>
        ):(
            <ListtRoom room = {room} onReload = {handleReload}/>
        )}
        
        </>
    )
}
export default ListRoom;