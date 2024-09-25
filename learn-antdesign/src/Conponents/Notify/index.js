import { Button, Dropdown,Badge} from "antd";
import {BellOutlined } from "@ant-design/icons";
import "./notify.css";
function Notify (){
    const items = [
        {
          label: 
          <div className="notify__item">
            <div className="notify__item-icon">
                  <BellOutlined />
            </div>
            <div className="notify__item-content">
                <div className="notify__item-title">
                    1st menu item
                </div>
                <div className="notify__item-time">
                    8h before
                </div>
            </div>
          </div>,
          key: '1',
        },
        {
            label: "2st menu item",
            key: '2',
          },
        {
            label: "3st menu item",
            key: '3',
        },
        {
            label: "4st menu item",
            key: '4',
          },
          {
            label: "5st menu item",
            key: '5',
          },
          {
            label: "6st menu item",
            key: '6',
          },
          {
            label: "7st menu item",
            key: '7',
          },
          {
            label: "8st menu item",
            key: '8',
          },
       
      ];
    return (
        <>     
        <Dropdown
            menu={{
            items,
            }}
            trigger={['click']}
            dropdownRender = {(menu) =>(
                <div className="notify">
                    <div className="notify__header">
                        <div className="notify_header-title">
                             <BellOutlined /> Notification
                        </div>
                        <Button type="link"> View All</Button>
                    </div>
                    <div className="notify__body">
                        {menu}
                    </div>
                </div>
            )}
        >
          <Badge dot>
            <Button type="text" icon = {<BellOutlined />}></Button>
          </Badge>
         
        </Dropdown>
       
        </> 
    )
}
export default Notify;