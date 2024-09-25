import { del, get, patch, post } from "../../utils/request";
export const createRoom = async (posion)=>{
    const result = await post("rooms",posion);
    return result;
}
export const getListRoom = async ()=>{
    const result = await get("rooms");
    return result;
}
export const deleteRoom = async (id)=>{
    const result = await del(`rooms/${id}`)
    return result;
}
export const editRoom = async (id,posion)=>{
    const result = await patch(`rooms/${id}`,posion);
    return result;
}