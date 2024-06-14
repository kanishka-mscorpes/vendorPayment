// import { BsFillHddStackFill } from "react-icons/bs";
// import { ImCart } from "react-icons/im";
// import { MdAccountBox, MdDashboard, MdQueryStats } from "react-icons/md";
// import {
//   IoBookSharp,
//   IoFileTrayStacked,
//   IoJournalSharp,
// } from "react-icons/io5";

// import {
//   StarFilled,
//   StarOutlined,
//   MenuOutlined,
//   UserOutlined,
//   CalculatorFilled,
//   FormOutlined,
//   AlignRightOutlined,
//   CustomerServiceOutlined,
//   UnorderedListOutlined,
//   DeploymentUnitOutlined,
//   DeliveredProcedureOutlined,
//   CheckCircleOutlined,
//   ExperimentOutlined,
//   PieChartOutlined,
//   ProductOutlined,
// } from "@ant-design/icons";
// import { FaCartFlatbed } from "react-icons/fa6";
// import {
//   MdOutlineWarehouse,
//   MdOutlineProductionQuantityLimits,
//   MdQueryStats,
// } from "react-icons/md";
// import {
//   BsHouseDown,
//   BsHouseUp,
//   BsGraphUp,
//   BsFillInboxesFill,
// } from "react-icons/bs";
// import { LuFactory } from "react-icons/lu";
// import { TbReport } from "react-icons/tb";
// import { RxComponent2 } from "react-icons/rx";
// import { PiInvoiceBold, PiChartDonutFill } from "react-icons/pi";
// import { FaHandshake } from "react-icons/fa";
// import { FaUserGroup } from "react-icons/fa6";
// import { FaBoxes } from "react-icons/fa";
// import { PiUserGear } from "react-icons/pi";
// import { RiAccountCircleFill } from "react-icons/ri";
// import { RiBillFill } from "react-icons/ri";
// import { BiMoney, BiTransfer } from "react-icons/bi";
// import { FaWarehouse } from "react-icons/fa";
// import { TbReportAnalytics } from "react-icons/tb";
// import { SiPaytm } from "react-icons/si";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { FaMoneyBill } from "react-icons/fa";
import { PiInvoiceBold } from "react-icons/pi";
// import routeConstants from "./routeConstants";
export const items = (user) => [
  // getItem("Dashboard", "A"),
  // getItem("Material Management", "B", <BsFillInboxesFill size={"1.5rem"} />, [
  //   getItem("Master", "B1", <FaBoxes />, [
  //     getItem(<Link to="/app/master/uom">Uom</Link>, "B11"),
  //     getItem("Component", "B23", <RxComponent2 />, [
  //       getItem(
  //         <Link to="/app/master/component/material">Material</Link>,
  //         "B1231"
  //       ),
  //       getItem(
  //         <Link to="/app/master/component/services">Services</Link>,
  //         "B1232"
  //       ),
  //     ]),
  //     getItem(
  //       <Link to="/app/master/componentMap/vendor">Component Map</Link>,
  //       "B12"
  //     ),
  //     getItem(<Link to="/app/master/product">Products</Link>, "B13"),
  //     getItem(<Link to="/app/master/hsnmap">HSN Map</Link>, "B14"),
  //     getItem(<Link to="/app/master/groups">Groups</Link>, "B15"),
  //     getItem(<Link to="/app/master/locations">Locations</Link>, "B16"),
  //     getItem(
  //       <Link to="/app/master/billingAddress">BillingAddress</Link>,
  //       "B17"
  //     ),
  //     getItem(
  //       <Link to="/app/master/shippingAddress">ShippingAddress</Link>,
  //       "B18"
  //     ),

  //     getItem("Bill Of Material", "B19", <PiInvoiceBold />, [
  //       getItem(<Link to="/app/master/bom/create">Create BOM</Link>, "B191"),
  //       getItem(<Link to="/app/master/bom/view">Manage BOM</Link>, "B192"),
  //     ]),
  //     getItem("Vendor / Supplier", "B20", <FaUserGroup />, [
  //       getItem(<Link to="/app/master/vendor/manage">Manage</Link>, "B1201"),
  //     ]),

  //     getItem("Customer / Client", "B22", <FaHandshake />, [
  //       getItem(<Link to="/app/master/customer/create">Add</Link>, "B1221"),
  //       getItem(<Link to="/app/master/customer/create">View</Link>, "B1222"),
  //     ]),
  //     // getItem("HSN Map", "B14", <ProductOutlined />),
  //     // getItem("Groups", "B15", <ProductOutlined />),
  //     // getItem("Locations", "B16", <ProductOutlined />),
  //     // getItem("Billing Address", "B17", <ProductOutlined />),
  //     // getItem("Shipping Address", "B18", <ProductOutlined />),
  //     // getItem("Bill Of Material", "B19", <ProductOutlined />),
  //     // getItem("Vendor / Supplier", "B110", <ProductOutlined />),
  //     // getItem("Customer / Client", "B111", <ProductOutlined />),
  //   ]),
  //   getItem(
  //     // <Link to="/app/view">Material Management</Link>
  //     <Link to="/app">Procurement</Link>,
  //     "B2",
  //     <FaCartFlatbed />,
  //     [
  //       getItem(
  //         // <Link to="/app/view">Material Management</Link>
  //         <Link to="/app/procurement/create">Create PO </Link>,
  //         "B21"
  //       ),
  //       getItem(
  //         // <Link to="/app/view">Material Management</Link>
  //         <Link to="/app/procurement/manage">Manage PO</Link>,
  //         "B22"
  //       ),
  //       getItem(
  //         // <Link to="/app/view">Material Management</Link>
  //         <Link to="/app/procurement/completed">Completed PO</Link>,
  //         "B23"
  //       ),
  //     ]
  //   ),
  //   getItem(
  //     // <Link to="/app/view">Material Management</Link>
  //     <Link to="/app">Warehouse</Link>,
  //     "B3",
  //     <MdOutlineWarehouse />,
  //     [
  //       getItem("MR Approval", "B31", <RxComponent2 />, [
  //         getItem(
  //           <Link to="/app/warehouse/pending">Pending MR (Approval)</Link>,
  //           "B1231"
  //         ),
  //         getItem(
  //           <Link to="/app/warehouse/mrRequestStatus">MR Request Status</Link>,
  //           "B1232"
  //         ),
  //       ]),
  //       getItem(
  //         <Link to="/app/master/componentMap/vendor">Component Map</Link>,
  //         "B12"
  //       ),
  //       getItem(
  //         // <Link to="/app/view">Material Management</Link>
  //         <Link to="/app/warehouse/inward">Inward</Link>,
  //         "B32"
  //       ),
  //       getItem(
  //         // <Link to="/app/view">Material Management</Link>
  //         <Link to="/app/warehouse/transfer">Transfer</Link>,
  //         "B33"
  //       ),
  //       getItem(
  //         // <Link to="/app/view">Material Management</Link>
  //         <Link to="/app/warehouse/pickSlip">Pick Slip</Link>,
  //         "B34"
  //       ),
  //       getItem(
  //         // <Link to="/app/view">Material Management</Link>
  //         <Link to="/app/batchAllocation">Batch Allocation</Link>,
  //         "B35"
  //       ),
  //     ]
  //   ),
  getItem("Bills", "A", <FaMoneyBill />, [
    getItem(<Link to="/app/bill/Create">Create Payment Bill</Link>, "A1"),
    getItem(<Link to="/app/bill/Scheduled">Scheduled </Link>, "A2"),
  ]),
  getItem(
    <Link to="/app/payments/paymentRequest">Payments Register</Link>,
    "B1",
    <PiInvoiceBold />
  ),
  // getItem("Payments Register", "B", <PiInvoiceBold />, [
  //   getItem(<Link to="/app/bill/Create">Create Payment Bill</Link>, "B1"),
  //   getItem(<Link to="/app/inv/fgInward/completed">Scheduled </Link>, "B2"),
  // ]),
  //   getItem("FG Out", "B5", <BsHouseUp />, [
  //     getItem(<Link to="/app/inv/fgout/create">Create FG Out</Link>, "B421"),
  //     getItem(<Link to="/app/inv/fgout/view">View FG Out</Link>, "B422"),
  //   ]),
  //   // getItem(
  //   //   // <Link to="/app/view">Material Management</Link>
  //   //   "FG Out",
  //   //   "B5",
  //   //   <BsHouseUp />,
  //   //   [
  //   //     getItem("PPC", "B521", [
  //   //       getItem("Material Requisiton", "B531", [
  //   //         getItem(
  //   //           <Link to="/app/inv/fgInward/completed">
  //   //             Material Requisition
  //   //           </Link>,
  //   //           "B422"
  //   //         ),
  //   //       ]),
  //   //     ]),
  //   //   ]
  //   // ),

  //   getItem("Production", "B6", <LuFactory />, [
  //     // getItem("PPC", "B621", [
  //     getItem("PPC", "B631", <LuFactory />, [
  //       getItem("Material Requisition", "B6311", <LuFactory />, [
  //         getItem(
  //           <Link to="/app/prod/materialrequisition/reqwithBom">
  //             Req With BOM
  //           </Link>,
  //           "B641"
  //         ),
  //         getItem(
  //           <Link to="/app/prod/materialrequisition/reqwithoutBom">
  //             Req Without BOM
  //           </Link>,
  //           "B641"
  //         ),
  //       ]),
  //       getItem("Production & Plans(s)", "B6321", <LuFactory />, [
  //         getItem(<Link to="/app/prod/pp/create">Create PPR</Link>, "B641"),
  //         getItem(<Link to="/app/prod/pp/pending">Pending PPR</Link>, "B642"),
  //         getItem(
  //           <Link to="/app/prod/pp/completed">Completed PPR</Link>,
  //           "B643"
  //         ),
  //       ]),
  //       // getItem(
  //       //   <Link to="/app/prod/materialrequisition">Material Requisition</Link>,
  //       //   "B641"
  //       // ),
  //       // ]),
  //     ]),
  //   ]),
  //   getItem("Reports", "B7", <TbReport />, [
  //     // getItem("PPC", "B621", [
  //     getItem("Inventory Reports", "B71", <LuFactory />, [
  //       getItem(
  //         <Link to="/app/reports/invnetoryReports/minRegister">
  //           MIN Register
  //         </Link>,
  //         "B711"
  //       ),
  //       getItem(
  //         <Link to="/app/reports/invnetoryReports/reports">
  //           Report(s) R1-R5
  //         </Link>,
  //         "B712"
  //       ),
  //     ]),
  //     getItem(
  //       <Link to="/app/reports/invnetoryReports/printing">Printing</Link>,
  //       "B72"
  //     ),
  //   ]),

  //   // getItem(
  //   //   // <Link to="/app/view">Material Management</Link>
  //   //   <Link to="/app">Reports</Link>,
  //   //   "B1",
  //   //   <TbReport />
  //   // ),
  //   getItem(
  //     // <Link to="/app/view">Material Management</Link>
  //     <Link to="/app">Query</Link>,
  //     "B1",
  //     <MdQueryStats />
  //   ),

  //   getItem(
  //     // <Link to="/app/view">Material Management</Link>
  //     <Link to="/app">Physical Stock</Link>,
  //     "B1",
  //     <BsGraphUp />
  //   ),
  // ]),
  // getItem("Customer Management", "A", <PiUserGear size={"1.5rem"} />, [
  //   getItem(
  //     <Link to="/app">Customer Enquiry</Link>,
  //     "2"
  //     // <AiOutlineMinus />
  //   ),
  // ]),
];

export const items1 = (user, setShowTickets) => [
  getItem(
    <Link onClick={() => setShowTickets(true)}></Link>,
    "B"
    // <RiAccountCircleFill size={"2rem"} />
  ),
];
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
