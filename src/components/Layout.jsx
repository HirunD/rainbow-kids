import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import WhatsAppFab from "./WhatsAppFab";
import ScrollToTop from "./ScrollToTop";

const Layout = () => (
  <div className="app-shell">
    <ScrollToTop />
    <a href="#main" className="sr-only">
      Skip to content
    </a>
    <NavBar />
    <main id="main">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppFab />
  </div>
);

export default Layout;
