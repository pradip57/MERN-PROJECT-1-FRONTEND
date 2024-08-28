import { Outlet } from "react-router-dom";
import AdminHeader from "../../components/admin/header/admin-header.components";
import AdminAside from "../../components/admin/sidebar/admin-aside.components";

const AdminLayout = () => {
  return (
    <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        
        <AdminHeader/>

        <AdminAside/>

        <main className="p-4 md:ml-64 h-auto pt-20">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
