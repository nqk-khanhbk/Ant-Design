import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined, SettingOutlined,CodeSandboxOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";
function MenuSider (){
    const items = [
        {
            key : "Menu-1",
            label: <Link to="/">Menu-1</Link>,
            icon:<MailOutlined />,
            children : [
                {
                    key:"Menu-1-1",
                    label:<Link to="/">Menu-1-1</Link>
                },
                {
                    key:"Chart",
                    label:<Link to = "/chart">Chart</Link>
                },
                {
                    key:"Menu-1-3",
                    label:"Menu-1-3"
                },
            ]
        },
        {
            key:"Menu-2",
            label:"Menu-2",
            icon:<AppstoreOutlined />,
            children : [
                {
                    key:"Menu-2-1",
                    label:"Menu-2-1"
                },
                {
                    key:"Menu-2-2",
                    label:"Menu-2-2"
                },
                {
                    key:"Menu-2-3",
                    label:"Menu-2-3"
                },
            ]
        },
        {
            key :"Menu-3",
            label:"Menu-3",
            icon:<SettingOutlined />,
            children : [
                {
                    key:"Menu-3-1",
                    label:"Menu-3-1"
                },
                {
                    key:"Menu-3-2",
                    label:"Menu-3-2"
                },
                {
                    key:"Menu-3-3",
                    label:"Menu-3-3"
                },
            ]
        },
        {
            key:"book-room",
            label:<Link to="/bookroom">Book Room</Link>,
            icon:<AppstoreOutlined />,
        },
        {
            key:"create-room",
            label:<Link to="/create-room">Create Room</Link>,
            icon:<CodeSandboxOutlined />,
        },
        {
            key:"list-room",
            label:<Link to="/list-room">List Room</Link>,
            icon:<AppstoreOutlined />,
        }
    ]

    
    return (
        <>
        <Menu
            mode="inline"
            items={items}
            defaultSelectedKeys={['Menu-1-1']}
            defaultOpenKeys = {["Menu-1"]}
           
        />
        </>
    )
}
export default MenuSider;