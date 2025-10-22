import { Outlet } from "react-router";
import { SidebarProvider, useSidebar } from "../../../context/SidebarContext";
import AppHeader from "../../../layout/AppHeader";
import Backdrop from "../../../layout/Backdrop";
import CustomerSidebar from "./CustomerDetailsSidebar";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen xl:flex">
      <div>
        <CustomerSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="mx-auto max-w-(--breakpoint-2xl) mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const CustomerDetailsLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default CustomerDetailsLayout;
