import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthenticationPage from "./pages/AuthenticationPage";
import ContactUsPage from "./pages/ContactUsPage";

const AppRoutes = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/auth" element={<AuthenticationPage/>} />
      <Route path="/auth/register" element={<AuthenticationPage/>} />
      <Route path="/contact" element={<ContactUsPage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes