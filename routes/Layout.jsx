import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="header">
        <h1><Link to="/">Pet Finder Dashboard</Link></h1>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
