import {
  Col,
  Row,
  Card,
  Typography,
  Form,
  Input,
  Checkbox,
  Button,
} from "antd";
import { Car } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Login() {
  const [form] = Form.useForm();
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "rgb(228 212 227)",
      }}
    >
      <Row
        justify="center"
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          // display: "flex",
          // flexDirection: "column",

          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Col
          span={19}
          style={{
            // height: "100%",
            // // width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Row>
            <Col span={15}>
              <Card
                style={{
                  height: "40rem",
                  borderRadius: "0px",
                  backgroundColor: "rgb(249 249 249);",
                  // border: "0px",
                  // flexDirection/: "column",

                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              ></Card>
            </Col>
            <Col span={9}>
              <Card
                style={{
                  height: "40rem",
                  borderRadius: "0px",
                  // backgroundColor: "rgb(239 239 234)",
                  // flexDirection/: "column",

                  // justifyContent: "center",
                  // alignItems: "center",
                }}
              >
                {" "}
                <Row style={{ marginTop: "30%", height: "100%" }}>
                  <Row>
                    <div style={{ display: "flex" }}>
                      <Col>
                        <Typography.Title class="highlight" level={3}>
                          Welcome
                        </Typography.Title>
                      </Col>
                      <Col style={{ marginLeft: 4 }}>
                        <Typography.Title level={3}> back</Typography.Title>
                      </Col>
                    </div>
                  </Row>
                  <Col span={24}>
                    <Typography.Text>Please enter your details</Typography.Text>
                  </Col>
                  <Row></Row>
                  <Form
                    layout="vertical"
                    form={form}
                    style={{ marginTop: "10%" }}
                  >
                    <Row>
                      <Col span={24}>
                        <Form.Item name="email" label="Email">
                          <Input placeholder="Enter your email" />
                        </Form.Item>
                      </Col>
                      <Col span={24}>
                        <Form.Item name="password" label="Password">
                          <Input placeholder="Enter your password" />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row justify="space-between">
                      <Checkbox> Remember me</Checkbox>
                      <Typography.Text underline level={3}>
                        {" "}
                        Forget Password
                      </Typography.Text>
                    </Row>
                    <Button
                      style={{
                        backgroundColor: "black",
                        color: "white",
                        marginTop: "8%",
                      }}
                      size="large"
                      block
                    >
                      Login
                    </Button>
                  </Form>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
