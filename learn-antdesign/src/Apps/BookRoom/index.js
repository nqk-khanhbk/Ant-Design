import {Row,Col,Input, Button,Checkbox, Space,DatePicker,Radio,Select} from "antd";
import { useRef, useState } from "react";
import {UserOutlined} from '@ant-design/icons'
import { bookRoom } from "../services/bookRoomService";
const { RangePicker } = DatePicker;
function BookRoom (){
   const optionsTime = [];
   for(let i=7;i<=24;i++){
      optionsTime.push({
         value: i>9 ? `${i} giờ` : `0${i} giờ`,
         label: i>9 ? `${i} giờ` : `0${i} giờ`,
    })
   }
   const[data,setData] = useState({
      time:"14 giờ",
   });
   const inputRef = useRef();
   //hàm lấy giá trị input
   const handleSubmitInput = (e)=>{
      const result = {
         ...data,
         [e.target.name] : e.target.value
      };
      setData(result);
      
   }
   //lấy dữ liệu ckeckbox
   const handleChangCheckBox = (e) =>{
      const result = {
         ...data,
         sevice:e

      };
      setData(result);
   }
   //lấy dữ liệu date
   const handeChangeDate = (_,dateStrings)=>{
      const result = {
         ...data,
         date:dateStrings
      }
      setData(result);
     
   }
   //lấy dữ liệu thời gian
   const handleChangeTime =(e)=>{
      const result = {
         ...data,
         time:e
      }
      setData(result);
   }
   console.log(data);
   
   const handleClick = async () =>{
     const response = await bookRoom(data);
     console.log(response);
   }
   return (
    <>
    <h2>Đặt phòng</h2>
    <Row gutter={[20,20]}>
      <Col xxl={16} xl={16} lg={16} md={24} sm={24}>
         <span>Họ và tên:</span>
         <Input ref={inputRef} size="large" name="fullName" placeholder="Họ và tên" onChange={handleSubmitInput} prefix={<UserOutlined />}/>
      </Col>
      <Col xxl={12} xl={12} lg={12} md={24} sm={24}>
         <span>Số điện thoại:</span>
         <Input ref={inputRef} name="phone" placeholder="Số điện thoại" onChange={handleSubmitInput}/>
      </Col>
      <Col xxl={12} xl={12} lg={12} md={24} sm={24}>
         <span>Email:</span>
         <Input ref={inputRef} name="email" placeholder="Email" onChange={handleSubmitInput}/>
      </Col>
      
      <Col xxl={12} xl={12} lg={12} md={24} sm={24}>
         <h4>Thêm dịch vụ</h4>
         <Checkbox.Group onChange={handleChangCheckBox}>
            <Space direction="vertical">
               <Checkbox value="Thuê xe máy">Thuê xe máy</Checkbox>
               <Checkbox value="Thuê xe ô tô 4 chỗ">Thuê xe ô tô 4 chỗ</Checkbox>
               <Checkbox value="Thuê xe ô tô 7 chỗ">Thuê xe ô tô 7 chỗ</Checkbox>
               <Checkbox value="Thuê xe ô tô 16 chỗ">Thuê xe ô tô 16 chỗ</Checkbox>
            </Space>
            
         </Checkbox.Group>
      </Col>
      <Col xxl={12} xl={12} lg={12} md={24} sm={24}>
         <h4>Chọn quà</h4>
         <Radio.Group name = "gilf" onChange={handleSubmitInput} >
            <Space direction="vertical">
               <Radio value="Quần áo">Quần áo</Radio>
               <Radio value="Mũ">Mũ</Radio>
               <Radio value="Móc khóa">Móc khóa</Radio>
            </Space>
            
         </Radio.Group>
      </Col>
      <Col xxl={12} xl={12} lg={12} md={24} sm={24}>
         <h4>Chọn ngày đặt phòng</h4>
         <RangePicker format = "DD/MM/YYYY" autoFocus={true} placeholder = {["Ngày nhận phòng","Ngày trả phòng"]} onChange={handeChangeDate}/>
      </Col>
      <Col xxl={12} xl={12} lg={12} md={24} sm={24}>
         <h4>Chọn giờ đặt phòng</h4>
         <Select onChange={handleChangeTime}
            style={{
               width: "300px",
             }}
             options ={optionsTime}
              defaultValue={data.time}
         />
      </Col>

      <Col>
         <Button type="primary" onClick={handleClick}>Đặt phòng</Button>
      </Col>
    </Row>
    </>
   )
}
export default BookRoom;