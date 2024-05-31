import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import LearnPage from "./pages/AboutUs.tsx";
import AcademyPage from "./pages/OurVision.tsx";
import AuthenticationPage from "./pages/AuthenticationPage.tsx";
import Layout from "./Layout/Layout.tsx";
import ClientDashboard from "./pages/ClientDashboard.tsx";
import UpdateForm from "./components/ClientDashboard/UpdateForm.tsx";
import SpecialRequest from "./components/SpecialRequest.tsx";
import SpecialTakeoutStatus from "./components/SpecialTakeoutStatus.tsx";
import {TakeOutsTable} from "./components/ClientDashboard/TakeOutsTable.tsx";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/auth/register" element={<AuthenticationPage />} />
        <Route path="/auth/client-dashboard" element={<ClientDashboard/>} />
        <Route path="/auth/my-profile" element={<UpdateForm/>} />
        <Route path="/auth/special-takeout" element={<SpecialRequest/>}/>
        <Route path="/auth/special-takeout-status" element={<SpecialTakeoutStatus/>} />
        <Route path="/auth/take-outs" element={<TakeOutsTable/>}/>
        </Route>
      </Routes>
  );
}

export default App;
