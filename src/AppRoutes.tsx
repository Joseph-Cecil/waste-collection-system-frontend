import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import AuthenticationPage from "./pages/AuthenticationPage.tsx";
import Layout from "./Layout/Layout.tsx";
import ClientDashboard from "./pages/ClientDashboard.tsx";
import UpdateForm from "./components/ClientDashboard/UpdateForm.tsx";
import SpecialRequest from "./components/SpecialRequest.tsx";
import SpecialTakeoutStatus from "./components/SpecialTakeoutStatus.tsx";
import {TakeOutsTable} from "./components/ClientDashboard/TakeOutsTable.tsx";
import { CancelRequest } from "./components/ClientDashboard/CancelRequest.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import OurVision from "./pages/OurVision.tsx";
import { AllRequests } from "./components/ClientDashboard/AllRequests.tsx";
import { Receipts } from "./components/ClientDashboard/Receipts.tsx";
import { Payment } from "./components/ClientDashboard/Payment.tsx";
import { LastTakeOut } from "./components/ClientDashboard/LastTakeOut.tsx";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/vision" element={<OurVision />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/auth/register" element={<AuthenticationPage />} />
        <Route path="/auth/client-dashboard" element={<ClientDashboard/>} />
        <Route path="/auth/my-profile" element={<UpdateForm/>} />
        <Route path="/auth/special-takeout" element={<SpecialRequest/>}/>
        <Route path="/auth/special-takeout-status" element={<SpecialTakeoutStatus/>} />
        <Route path="/auth/take-outs" element={<TakeOutsTable/>}/>
        <Route path="/auth/cancel-request" element={<CancelRequest/>} />
        <Route path="/auth/all-requests" element={<AllRequests/>}/>
        <Route path="/auth/receipts" element={<Receipts/>} />
        <Route path="/auth/payment" element={<Payment/>}/>
        <Route path="/auth/last-take-out" element={<LastTakeOut/>} />
        </Route>
      </Routes>
  );
}

export default App;
