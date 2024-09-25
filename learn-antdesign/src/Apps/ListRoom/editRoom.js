import { Button,Modal, Form,Input, InputNumber,Select, Switch,notification,Spin } from "antd";
import {EditOutlined} from "@ant-design/icons";
import { useState } from "react";
import { editRoom } from "../services/roomService";
const {Option} = Select;
const { TextArea } = Input;
function EditRoom(props){
    const [api, contextHolder] = notification.useNotification();
    const {record,onReload} =props;
    const [showModal,setShowModal] =useState(false);
    const [form] = Form.useForm();
    const [spinning,setSpinning] = useState(false);
    const handleSubmit = async (values)=>{
        setSpinning(true);
        const responsive = await editRoom(record.id,values);
        setTimeout(()=>{
            if(responsive){
                
                api.success({
                    message:"Cập nhật thành công",
                    description:`Cập nhật phòng ${record.name} thành công`
                });
                onReload();
                setShowModal(false);
               
            }
            else{
                api.error({
                    message:"Cập nhật không thành công",
                    description:`Cập nhật phòng ${record.name} thất bại`
                });
            }
            setSpinning(false);
        },3000);
        
    }
    const handleShowModal =()=>{
        setShowModal(true);
        setSpinning(false);
    }
    const handleCancel = ()=>{
        setShowModal(false);
        form.resetFields();
    }
    return (
        <>
         {contextHolder}
        <Button  icon={<EditOutlined />} type="primary" onClick={handleShowModal} />
        
        <Modal open={showModal} title="Chỉnh sửa lại phòng" onCancel={handleCancel} footer={null}>
         <Spin tip="Đang cập nhật..." spinning={spinning}>
        <Form onFinish={handleSubmit} layout="vertical" form={form} initialValues={record}>               
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
                        maxWidth:"700px",
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
                    <Button type="primary" htmlType="submit">Cập nhật</Button>
                </Form.Item>
            
        </Form>
        </Spin>
        </Modal>
        
        </>
    )
}
export default EditRoom;