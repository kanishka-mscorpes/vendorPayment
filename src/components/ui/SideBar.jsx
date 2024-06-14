import React from "react";
import {
  FormOutlined,
  LoginOutlined,
  ProfileOutlined,
  SolutionOutlined,
  ProductOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Flex,
  Input,
  Layout,
  Menu,
  Row,
  Space,
  theme,
} from "antd";

import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { Home } from "lucide-react";
const { Header, Content, Footer, Sider } = Layout;
const SideBar = ({ setShowSideBar, showSideBar, items, items1 }) => {
  const { logout } = useUser();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // const items = [
  //   // {
  //   //   key: 0,
  //   //   label: <Link to="/app">Home</Link>,
  //   //   icon: <Home size={18} style={{ transform: "translateY(2px)" }} />,
  //   // },
  //   {
  //     key: 1,
  //     label: <Link to="/app/create">Dashboard </Link>,
  //     path: "/app/create",
  //     icon: <PieChartOutlined />,
  //   },
  //   {
  //     key: 2,
  //     label: <Link to="/app/view">Material Management</Link>,
  //     icon: <ProductOutlined />,
  //   },
  //   {
  //     key: 3,
  //     label: <Link to="/app/view">Customer Management</Link>,
  //     icon: <SolutionOutlined />,
  //   },
  // ];

  return (
    <Sider
      breakpoint="lg"
      theme="light"
      collapsed={true}
      // collapsedWidth="80px"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      // onCollapse={(collapsed, type) => {
      //   console.log(collapsed, type);
      // }}
      style={{
        // backgroundColor: "#F5F5F5",
        borderRadius: 5,
      }}
      style={
        {
          // marginTop: "6rem",
          //   height: "100vh",
          //   zIndex: 99,
          //   overflowY: "auto",
        }
      }
      width={230}
      collapsedWidth={50}
      collapsed={!showSideBar}
      onCollapse={(value) => value}
    >
      {/* <Input /> */}
      <Flex
        vertical
        justify="space-between"
        style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
      >
        <Menu
          theme="light"
          // mode="inline"
          // defaultSelectedKeys={["1"]}
          items={items}
          style={{
            // backgroundColor: "#7E",
            borderRadius: 10,
            marginTop: "6rem",
            //   height: "100vh",
            //   zIndex: 99,
            //   overflowY: "auto",
          }}
          // mode="vertical"
          mode="inline"
          // triggerSubMenuAction="hover"
        />{" "}
        <Divider />
      </Flex>
    </Sider>
  );
};
export default SideBar;
