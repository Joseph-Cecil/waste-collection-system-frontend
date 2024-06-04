import { useLocation } from "react-router-dom";
import { AuthenticationForm } from "../forms/AuthenticationForm";

function AuthenticationPage() {
  const location = useLocation();

  return (
    <div>
      <AuthenticationForm path={location.pathname} />
    </div>
  );
}

export default AuthenticationPage;
