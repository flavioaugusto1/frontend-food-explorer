import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

import { AdminRoutes } from "../routes/admin.routes";
import { CustomerRoutes } from "../routes/customer.routes";
import { AuthRoutes } from "../routes/auth.routes";

export function Routes() {
  const { user } = useAuth();

  function AcessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <CustomerRoutes />;
    }
  }

  return (
  <BrowserRouter>
    { user ? <AcessRoute /> :  <AuthRoutes />}
  </BrowserRouter>
);
}
