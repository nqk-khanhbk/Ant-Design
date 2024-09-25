import { Layout } from "antd";

import "./layout.css";
import logo from "../images/logo.png";
import logo_fold from "../images/logo-fold.png";
import {MenuUnfoldOutlined,SearchOutlined} from '@ant-design/icons';
import { useState } from "react";
import Notify from "../Conponents/Notify";
import MenuSider from "../Conponents/MenuSider"
import { Outlet } from "react-router-dom";
const {Footer, Sider, Content } = Layout;
function Layoutt (){
    const [collaps,setCollaps] = useState(false);
    return (
        <>
        <Layout>
            <header className="header">
                <div className={"header__logo " + (collaps && "header__logo-collaps")}>
                    <img src = {collaps ? logo_fold : logo} alt="logo"/>
                </div>
                <div className="header__nav">
                    <div className="header__nav-left">
                        <div className="header-collaps" onClick={()=> setCollaps(!collaps)}>
                            <MenuUnfoldOutlined />
                        </div>
                        <div className="header-search">
                            <SearchOutlined />
                        </div>
                    </div>
                    <div className="header__nav-right">
                        <Notify />
                    </div>
                </div>
            </header>
            <Layout>
                <Sider className="sider" collapsed={collaps} theme="light">
                    <MenuSider />
                </Sider>
                <Content  className="content">
                    <Outlet />
                </Content>
            </Layout>
            <Footer className="footer">Footer</Footer>
        </Layout>
        
        </>
    )
}
export default Layoutt;