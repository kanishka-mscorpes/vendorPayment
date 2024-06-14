import { Card, Col, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import MyDataTable from "../../../components/ui/MyDataTable";
import { myAxios } from "../../../lib/axiosInterceptor";
import SummarySection from "../../../components/ui/SummarySection";
import Section3 from "../../../components/shared/Section3";
import ware1 from "../../../assets/images/ware1.png";
function PoList() {
  const [transactionSummary, setTransactionSummary] = useState([
    {
      title: "Rejection",
      date: "",
      value: "",
    },
    {
      title: "MFG",
      date: "",
      value: "",
    },
    {
      title: "Consumption",
      date: "",
      value: "",
      // link: "/transaction-In",
    },
    {
      title: "Purchase Orders",
      value: "",
      // link: "/manage-po",
    },
  ]);
  const getThePo = async () => {
    const response = await myAxios.get("/report2/vendorPoReport", {
      data: "07-03-2024-13-03-2024",
      wise: "P",
    });
  };
  const columns = [
    { headerName: "#", field: "id", width: 80 },
    { headerName: "PO Id", field: "1", flex: 1 },
    { headerName: "Component", field: "2", width: 150 },
    { headerName: "Due Date", field: "3", width: 150 },
    { headerName: "PO Rate", field: "4", width: 150 },
    { headerName: "PO Qty", field: "5", width: 150 },
    { headerName: "Pending Qty", field: "6", width: 150 },
    { headerName: "Total In", field: "7", width: 150 },
    { headerName: "Total Out", field: "8", width: 150 },
    { headerName: "Total Closing", field: "9", width: 150 },
    { headerName: "Status", field: "11", width: 150 },
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
      <Row style={{ height: "100%" }} justify={"center"}>
        {/* <Row> */}
        <Col span={6}>
          <Card>
            <Col span={12}>
              <img src="397" style={{ width: "100%", height: "100%" }} />
            </Col>
            <Col span={12}></Col>
            Total
          </Card>
        </Col>
        <Col span={6}>
          <Card>Req</Card>
        </Col>
        <Col span={6}>
          <Card>Completed</Card>
        </Col>
        {/* </Row> */}
        <Col span={23}>
          <Card style={{ height: "100%" }}>
            <Row>
              <Typography.Title level={4}>PO List</Typography.Title>
            </Row>
            <Col span={22}>
              <div style={{ height: "27rem", marginTop: 8 }}>
                <MyDataTable columns={columns} data={[]} />{" "}
              </div>
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PoList;
