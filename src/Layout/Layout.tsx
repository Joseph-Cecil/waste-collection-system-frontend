import { Outlet } from 'react-router-dom';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { FooterCentered } from '../components/FooterCentered';
import { EmailBanner } from '../components/ClientDashboard/EmailBanner';

const Layout = () => {
  return (
    <>
      <HeaderMegaMenu />
      <Outlet />
      <EmailBanner/>
      <FooterCentered />
    </>
  );
};

export default Layout;
