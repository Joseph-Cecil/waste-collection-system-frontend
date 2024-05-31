import { Outlet } from 'react-router-dom';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { FooterCentered } from '../components/FooterCentered';

const Layout = () => {
  return (
    <>
      <HeaderMegaMenu />
      <Outlet />
      <FooterCentered />
    </>
  );
};

export default Layout;
