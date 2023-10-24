import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="header">
        <h1>Pet Finder Dashboard</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
