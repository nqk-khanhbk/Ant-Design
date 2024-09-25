import {Button, Form,Input, InputNumber,Select, Switch,message} from "antd";
import { createRoom } from "../services/roomService";
const {Option} = Select;
const { TextArea } = Input;
function CreateRoom (){
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const handleSubmit = async (values)=>{
        const responsive = await createRoom(values);
        if(responsive){
            form.resetFields();
            messageApi.open({
                type: 'success',
                content: 'Bạn đã thêm một phòng mới!',
                duration: 5,
         });
        }
        else{
            messageApi.open({
                type: 'warning',
                content: 'Vui lòng tạo  lại!',
                duration: 4,
              });
        }
    }
    return (
        <>
          {contextHolder}
        <h2>Thêm một phòng mới</h2>
        <Form onFinish={handleSubmit} layout="vertical" form={form}>               
                <Form.Item
                    label="Tên phòng"
                    name="name"
                    rules={[
                        {
                        required: true,
                        message: 'Bắt buộc',
                        },
                    ]}
                    style={{
                        width:"700px",
                      }}
                    >
                    <Input />
                 </Form.Item>         
                <Form.Item
                    label="Số lượng người"
                    name="qualityPeople"
                    rules={[
                        {
                        required: true,
                        message: 'Bắt buộc',
                        },
                    ]}
                    style={{
                        width:"400px",
                      }}
                    >
                    <InputNumber min ={1} />
                 </Form.Item>
              
              
                <Form.Item
                    label="Số lượng giường"
                    name="qualityBed"
                    rules={[
                        {
                        required: true,
                        message: 'Bắt buộc',
                        },
                    ]}
                    style={{
                        width:"400px",
                      }}
                    >
                    <InputNumber min ={1} />
                 </Form.Item>
                
                 <Form.Item
                     label="Mô tả"
                     name="description"
                >
                     <TextArea rows={4} />
                </Form.Item>


                <Form.Item
                    name="utils"
                    label="Lựa chọn"
                >
                    <Select 
                        mode="multiple" 
                         allowClear 
                         style={{ width: '50%' }}
                         defaultValue={['Điều hòa']}
                    >
                        <Option value="wifi">Wifi</Option>
                        <Option value="điều hòa"> Điều hòa</Option>
                        <Option value="nóng lạnh">Nóng lạnh</Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Trạng thái" name = "status" valuePropName="checked">
                    <Switch checkedChildren="Còn phòng" unCheckedChildren="Hết Phòng" />
                </Form.Item>

                <Form.Item label="Loại phòng" name = "typeRoom" valuePropName="checked">
                    <Switch checkedChildren="VIP" unCheckedChildren="Thường"  />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Tạo phòng</Button>
                </Form.Item>
            
        </Form>
        </>
    )
}
export default CreateRoom;