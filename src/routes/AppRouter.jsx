import { Navigate, useRoutes } from "react-router-dom";
import { AccessDeniedPage } from "../components/Errors/AccessDeniedPage";
import { InvalidDataErrorPage } from "../components/Errors/InvalidDataErrorPage";
import { NetworkErrorPage } from "../components/Errors/NetworkErrorPage";
import { NotFoundPage } from "../components/Errors/NotFoundPage";
import { ServerErrorPage } from "../components/Errors/ServerErrorPage";
import { SoftwareErrorPage } from "../components/Errors/SoftwareErrorPage";
import {
  ERR_403_ROUTE,
  ERR_404_ROUTE,
  ERR_500_ROUTE,
  ERR_INVALID_DATA_ROUTE,
  ERR_NETWORK_ROUTE,
  ERR_SOFTWARE_ROUTE,
  HOME_ROUTE,
} from "../constants/routes";

const AppRouter = () => {
  return useRoutes([
    {
      path: HOME_ROUTE,
      element: <Navigate to="/hello-word" />,
    },
    {
      path: "/hello-word",
      element: (
        <>
          <h2>Hello Word</h2>
        </>
      ),
    },
    {
      path: ERR_403_ROUTE,
      element: <AccessDeniedPage />,
    },
    {
      path: ERR_404_ROUTE,
      element: <NotFoundPage />,
    },
    {
      path: ERR_500_ROUTE,
      element: <ServerErrorPage />,
    },
    {
      path: ERR_NETWORK_ROUTE,
      element: <NetworkErrorPage />,
    },
    {
      path: ERR_INVALID_DATA_ROUTE,
      element: <InvalidDataErrorPage />,
    },
    {
      path: ERR_SOFTWARE_ROUTE,
      element: <SoftwareErrorPage />,
    },
  ]);
};

export default AppRouter;
