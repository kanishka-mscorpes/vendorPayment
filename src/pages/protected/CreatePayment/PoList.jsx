import { Button, Card, Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import MyDataTable from "../../../components/ui/MyDataTable";
import { myAxios } from "../../../lib/axiosInterceptor";
import SummarySection from "../../../components/ui/SummarySection";
import Section3 from "../../../components/shared/Section3";
import ware1 from "./../../../assets/ware1.jpg";
import ware2 from "./../../../assets/ware2.jpg";
import ware3 from "./../../../assets/ware3.jpg";
import ware4 from "./../../../assets/ware4.jpg";
import "./../../../pages/auth/index.css";
import MyDatePicker from "../../../components/ui/MyDatePicker";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { MdCallMissedOutgoing } from "react-icons/md";
function PoList() {
  const [dateRange, setDateRange] = useState("");

  const getThePo = async () => {
    const response = await myAxios.get("/report2/vendorPoReport", {
      data: "07-03-2024-13-03-2024",
      wise: "P",
    });
  };
  const rows = [
    {
      id: 1,
      1: 51826,
      2: "p0001",
      3: "20-06-2024",
      4: 3435,
      5: 51826,
      6: 20,
      11: "Completed",
    },
    {
      id: 2,
      1: 51826,
      2: "p0001",
      3: "20-06-2024",
      4: 2443,
      5: 51826,
      6: 10,
      11: "Completed",
    },
  ];
  const columns = [
    { headerName: "#", field: "id", width: 80 },
    { headerName: "PO Id", field: "1", flex: 1 },
    { headerName: "Component", field: "2", width: 150 },
    { headerName: "Due Date", field: "3", width: 150 },
    { headerName: "PO Rate", field: "4", width: 150 },
    { headerName: "PO Qty", field: "5", width: 150 },
    { headerName: "Pending Qty", field: "6", width: 150 },
    // { headerName: "Total In", field: "7", width: 150 },
    // { headerName: "Total Out", field: "8", width: 150 },
    // { headerName: "Total Closing", field: "9", width: 150 },
    { headerName: "Status", field: "11", width: 150 },
    {
      headerName: "Action",

      type: "actions",
      field: "action",
      width: 165,
      getActions: ({ row }) => [
        <Button style={{ backgroundColor: "green", color: "#ffff" }}>
          Request
        </Button>,
      ],
    },
    // {
    //   headerName: "Action",

    //   type: "actions",
    //   field: "action",
    //   width: 65,
    //   getActions: ({ row }) => [
    //     <GridActionsCellItem
    //       icon={<AiFillEdit />}
    //       onClick={() => setOpenDrawer(row)}
    //       // onClick={() => setEditPage(row)}
    //       // label="Delete"
    //     />,
    //     <GridActionsCellItem
    //       icon={<BsEyeFill />}

    //       // label="Delete"
    //     />,
    //   ],
    // },
  ];
  useEffect(() => {
    getThePo();
  }, []);

  return (
    <div>
      <Row style={{ height: "100%" }} justify="center">
        <Row justify="center" style={{ marginTop: "2rem" }}>
          {/* <Col
            span={24}
            style={{
              display: "flex",
            }}
          > */}
          <Col span={7} style={{ padding: "1rem" }}>
            <Card
              className="hover-card1"
              style={{
                display: "flex",
                height: "80%",
                backgroundColor: "#fff6e6",
              }}
            >
              <Row>
                <Col span={12}>
                  <img src={ware1} style={{ height: "80%" }} />
                </Col>
                <Col span={12}>
                  <Typography.Title level={4}>On Going</Typography.Title>{" "}
                  <Row>
                    <Col span={3}>
                      {" "}
                      <Typography.Title level={4}>4</Typography.Title>{" "}
                    </Col>
                    <Col span={12}>
                      {" "}
                      {/* <MdCallMissedOutgoing size={"2rem"} /> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={7} style={{ padding: "1rem" }}>
            <Card
              className="hover-card2"
              style={{
                display: "flex",
                height: "80%",
                backgroundColor: "#ffe9ed",
              }}
            >
              <Row>
                <Col span={12}>
                  <img src={ware2} style={{ height: "110%" }} />
                </Col>
                <Col span={12}>
                  {" "}
                  <Typography.Title level={4} style={{ marginLeft: "1.5rem" }}>
                    Completed
                  </Typography.Title>{" "}
                  <Typography.Title level={4} style={{ marginLeft: "1.5rem" }}>
                    20
                  </Typography.Title>{" "}
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={7} style={{ padding: "1rem" }}>
            <Card
              className="hover-card3"
              style={{
                display: "flex",
                height: "80%",
                backgroundColor: "#e8f3e8",
              }}
            >
              <Row>
                <Col span={12}>
                  <img src={ware4} style={{ height: "120%" }} />
                </Col>
                <Col span={12}>
                  {" "}
                  <Typography.Title level={4} style={{ marginLeft: "1.5rem" }}>
                    Total
                  </Typography.Title>{" "}
                  <Typography.Title level={4} style={{ marginLeft: "1.5rem" }}>
                    50
                  </Typography.Title>{" "}
                </Col>
              </Row>
            </Card>
          </Col>
          {/* </Col> */}
        </Row>
        <Col span={23}>
          <Card style={{ height: "100%" }}>
            <Row justify="space-between">
              <div>
                <Typography.Title level={4}>PO List</Typography.Title>
              </div>
              <Col span={4}>
                <MyDatePicker setDateRange={setDateRange} />{" "}
              </Col>
            </Row>
            <Col span={24}>
              <div style={{ height: "27rem", marginTop: 2 }}>
                <MyDataTable columns={columns} data={rows} />{" "}
              </div>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PoList;
