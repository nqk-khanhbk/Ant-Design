import { post } from "../../utils/request";
export const bookRoom = async(posion) =>{
    const result = await post("book-room",posion);
    return result;
}