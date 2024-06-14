import { Card, Col, Row, Typography } from "antd";
import React from "react";
import MyDataTable from "../../../components/ui/MyDataTable";
import MySelect from "../../../components/shared/MySelect";

function ScheduledPayments() {
  const rows = [
    {
      id: 51826,
      1: 51826,
      2: "14-06-2024",
      3: "20-06-2024",
      4: 51826,
      5: 51826,
      6: 0,
      11: "Completed",
    },
    {
      id: 5126,
      1: 51826,
      2: "14-06-2024",
      3: "20-06-2024",
      4: 51826,
      5: 51826,
      6: 0,
      11: "Completed",
    },
  ];
  const statusopt = [
    {
      text: "Completed",
      value: "Completed",
    },
    {
      text: "Partially Completed",
      value: "Partially",
    },
    {
      text: "Pending",
      value: "Pending",
    },
  ];
  const columns = [
    { headerName: "#", field: "id", width: 80 },
    { headerName: "Invoice Number", field: "1", width: 200 },
    { headerName: "Billing Date", field: "2", width: 200 },
    { headerName: "Due Date", field: "3", width: 200 },
    { headerName: "Total Bill", field: "4", width: 200 },
    { headerName: "Paid Amount", field: "5", width: 200 },
    { headerName: "Due Balance", field: "6", width: 200 },

    { headerName: "Status", field: "11", width: 200 },
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
  return (
    <div style={{ height: "100%" }}>
      {" "}
      <Col span={24}>
        {/* <Card style={{ height: "100%", backgroundColor: "whitesmokes" }}> */}
        <Row justify="end" style={{ height: "100%" }}>
          {/* <Typography.Title level={4}>PO List</Typography.Title> */}
          <Col span={3} style={{ marginTop: 9 }}>
            <MySelect options={statusopt} />
          </Col>
        </Row>
        {/* <Col span={24}> */}
        <div style={{ height: "42rem", marginTop: 2 }}>
          <MyDataTable columns={columns} data={rows} />{" "}
        </div>
        {/* </Col> */}
        {/* </Card> */}
      </Col>
    </div>
  );
}

export default ScheduledPayments;
