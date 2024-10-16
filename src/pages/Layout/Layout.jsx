import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* Footer if exists will be here */}
    </div>
  );
};

export default Layout;
