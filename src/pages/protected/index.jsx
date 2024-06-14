import { Link, Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "@/recoil/userAtom";
import { routeConstatns } from "@/lib/routeConstants";
import {
  Button,
  Col,
  Layout,
  Menu,
  Row,
  Select,
  Space,
  Typography,
  theme,
} from "antd";
import { useEffect, useState } from "react";
import useUser from "@/hooks/useUser";
import SideBar from "@/components/ui/SideBar";
const { Header, Content, Footer, Sider } = Layout;

import { items, items1 } from "../../lib/sidebarRoutes";
import { MenuOutlined } from "@ant-design/icons";
import InternalNav from "../../components/shared/InternalNav";
import internalLinks from "../../components/shared/internalLinks";

const ProtectedLayout = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const { user, logout } = useUser();

  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const sessionOptions = [
    { label: "Session 22-23", value: "22-23" },
    { label: "Session 23-24", value: "23-24" },
    { label: "Session 24-25", value: "24-25" },
  ];
  ////authencation
  useEffect(() => {
    if (!user?.token) {
      //add home page
      navigate("/app");
    }
  }, [user?.token]);
  return (
    <Layout style={{ height: "100%" }}>
      <SideBar
        // style={{ marginTop: "6rem" }}
        setShowSideBar={setShowSideBar}
        showSideBar={showSideBar}
        items={items(user)}
        items1={items1(user)}
      />

      <Layout>
        <Header
          style={{
            padding: 0,
            // background: colorBgContainer,
            backgroundColor: "#003E7E",
            color: "#fff",
          }}
        >
          {/* <Col span={2}></Col> */}
          <Row justify="space-between">
            <Space
              style={{
                color: "white",
                fontSize: "1rem",
                marginLeft: "1rem",
              }}
            >
              {/* <vansLogo /> */}
            </Space>
            <Space size="large">
              <MenuOutlined
                onClick={() => {
                  setShowSideBar((open) => !open);
                }}
                style={{
                  color: "white",
                  marginLeft: 12,
                  fontSize: window.innerWidth > 1600 && "1rem",
                }}
              />

              <Link to="/app">
                <Space
                  style={{
                    color: "white",
                    fontSize: "1rem",
                  }}
                >
                  {/* <vanslogo /> */}
                  {/* <img src={vanslogo} alt="Logo" /> */}
                  {/* <span style={{ color: "white" }}>IMS</span> */}
                </Space>
              </Link>
              {/* <div className="location-select">
              {/* <Select
                  style={{ width: 200, color: "white" }}
                  options={options}
                  bordered={false}
                  placeholder="Select Company Branch"
                  onChange={(value) => handleSelectCompanyBranch(value)}
                  value={user.company_branch}
                />
              </div> */}
              <div className="location-select" style={{ color: "white" }}>
                <Select
                  style={{ width: 200, color: "white" }}
                  options={sessionOptions}
                  bordered={false}
                  // placeholder="Select Session"
                  onChange={(value) => handleSelectSession(value)}
                  // value={user.session}
                />
              </div>
            </Space>
            <Col span={3}>
              <Typography.Text style={{ color: "white" }}>
                {/* <UserOutlined /> */}
                {user?.name ?? ""}
              </Typography.Text>
              {/* <Typography.Text>Name</Typography.Text> */}
            </Col>
          </Row>
          {/* here */}
        </Header>
        <Content
          style={{
            // margin: "24px 16px 0",
            height: "100%",
            // backgroundColor: "White",
            // theme:'light'
          }}
        >
          {/* <InternalNav links={internalLinks} /> */}
          <Outlet />
          {/* <div
            style={{
              padding: 24,
              minHeight: 550,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <InternalNav links={mainRoutes} />
          </div> */}
        </Content>
        {/* <Footer
          style={{
            textAlign: "center",
            height: "10px",
          }}
        >
          MSCorpre ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};

export default ProtectedLayout;
