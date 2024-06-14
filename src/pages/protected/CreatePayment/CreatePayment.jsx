import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React from "react";
import TaxDetails from "../../../components/shared/TaxDetails";
import {
  ArrowBigLeft,
  ArrowBigLeftDash,
  ArrowBigLeftDashIcon,
  CheckIcon,
  PaperclipIcon,
} from "lucide-react";

function CreatePayment() {
  return (
    <div>
      <Row justify="center" style={{ height: "100%" }}>
        {/* <Button icon={ArrowBigLeftDash}></Button> */}
        <Col span={23} style={{ height: "100%" }}>
          <Card style={{ height: "100%" }}>
            <Row justify="space-between">
              {/* <Col span={24}> */}
              <Typography.Title level={4}>
                Create Payment Request
              </Typography.Title>
              <div>
                <Button
                  icon={<PaperclipIcon />}
                  // type="primary"
                  // size="large"
                  style={{ marginRight: 10 }}
                >
                  Attachment
                </Button>
                <Button
                  icon={<CheckIcon />}
                  // type="primary"
                  // size="large"
                  style={{ marginRight: 10 }}
                >
                  Save
                </Button>
              </div>
              {/* </Col> */}
              <Col span={24} style={{ backgroundColor: "rgb(223 244 242)" }}>
                <Typography.Text style={{ color: "#30ce30" }} strong>
                  Client Details
                </Typography.Text>
              </Col>
            </Row>
            <Form layout="vertical" style={{ marginTop: 8 }}>
              <Row gutter={[10, 0]}>
                {/* <Col span={5}>
                  <Form.Item name="name" label=" Vendor Name">
                    <Input />
                  </Form.Item>
                </Col> */}
                <Col span={5}>
                  <Form.Item name="name" label="Branch">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item name="name" label="GSTIN">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item name="name" label="Address">
                    <Input.TextArea rows={1} />
                  </Form.Item>
                </Col>{" "}
                <Col span={5}>
                  <Form.Item name="name" label="E-Way Bill">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item name="name" label="Invoice Number">
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={5}>
                  <Form.Item name="name" label="Date">
                    <Input />
                  </Form.Item>
                </Col>{" "}
                <Col span={5}>
                  <Form.Item name="name" label="Requested Amount">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col
                  span={24}
                  style={{
                    backgroundColor: "rgb(223 244 242)",
                  }}
                  // style={{ minHeight: "12rem" }}
                >
                  <Typography.Text style={{ color: "#30ce30" }} strong>
                    Item Details
                  </Typography.Text>
                </Col>
                {/* <Col></Col> */}
              </Row>
              <Row justify="space-between">
                <Col span={4} style={{ overflowY: "auto" }}>
                  <TaxDetails title="Tax Details" summary={[]} />
                </Col>
                <Col span={4} style={{ overflowY: "auto" }}>
                  <TaxDetails title="Tax Details" summary={[]} />
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default CreatePayment;
