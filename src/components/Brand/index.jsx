import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";

import { Container } from "./style";
import { Hexagon } from "@phosphor-icons/react";

export function Brand({ size }) {
  const { user } = useAuth();

  return (
    <Container>
      <Hexagon color="#065E7C" weight="fill" size={size} />

      {!user && <h1>food explorer</h1>}

      {user && [USER_ROLE.CUSTOMER].includes(user.role) && (
        <h1>food explorer</h1>
      )}

      {user && [USER_ROLE.ADMIN].includes(user.role) && (
        <div className="brandAdmin">
          <h1>food explorer</h1>
          <span>admin</span>
        </div>
      )}
    </Container>
  );
}
