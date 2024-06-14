import { createBrowserRouter } from "react-router-dom";
import ProtectedLayout from "./../pages/protected/index";
import RootLayout from "@/pages";
import AuthLayout from "@/pages/auth";
import Login from "./../pages/auth/Login";
import CreatePayment from "./../pages/protected/CreatePayment/CreatePayment";
import PoList from "./../pages/protected/CreatePayment/PoList";
import ScheduledPayments from "./../pages/protected/CreatePayment/ScheduledPayments";
// import PaymentRequest
export const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          //     {
          //       path: routeConstatns.register,
          //       element: <Register />,
          //     },
        ],
      },

      {
        path: "app",
        element: <ProtectedLayout />,
        children: [
          {
            path: "/app",
            element: <PoList />,
          },
          {
            path: "/app/bill/Create",
            element: <CreatePayment />,
          },
          {
            path: "/app/bill/scheduled",
            element: <ScheduledPayments />,
          },
          {
            path: "/app/payments/paymentRequest",
            // element: <PaymentRequest />,
          },
        ],
      },
    ],
  },
]);
