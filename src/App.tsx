import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/common/ScrollToTop";

import SignIn from "./pages/AuthPages/SignIn";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import AppLayout from "./layout/AppLayout";

import Home from "./pages/Dashboard/Home";
import ProductManagement from "./pages/products";
import AgentsPage from "./pages/agents";
import OrdersPage from "./pages/ordersPage";
import QuotationDetailsPage from "./pages/QuotationDetails";
import ReceivedOrders from "./pages/receivedOrders";
import CreateNewOrderPage from "./pages/CreateNewOrderPage";
import ManageCategoriesPage from "./pages/manageCategoriesPage";
import ManageBrandsPage from "./pages/ManageBrandsPage";
import AddProductPage from "./pages/AddProductPage";
import QueriesPage from "./pages/UserQueries";
import EditProductPage from "./pages/EditProduct";
import { Toaster } from "react-hot-toast";
import BannersPage from "./pages/banners";
import FloatingBannerPage from "./pages/floatingBanner";
import LoadingScreen from "./pages/AuthPages/LoadingScreen";
import { useEffect, useState } from "react";
import CustomerPage from "./pages/CustomerPages/Customer";
import AddCustomerPage from "./pages/CustomerPages/AddCustomerPage";
import CustomerDetailsPage from "./pages/CustomerPages/Details/CustomerDetails";
import CustomerDetailsLayout from "./pages/CustomerPages/Details/CustomerDetailsLayout";
import CustomerLayout from "./pages/CustomerPages/CustomerLayout";
import CustomerMedication from "./pages/CustomerPages/Details/medication/Index";
import EMARTracker from "./pages/CustomerPages/Details/medication/emar/Emar";
import MedicationList from "./pages/CustomerPages/Details/medication/MedicationList";
import MedsCabinet from "./pages/CustomerPages/Details/medication/MedicationCabinet";
import MedicationHistory from "./pages/CustomerPages/Details/medication/MedicationHistory";

import EMARReviewReport from "./pages/CustomerPages/Details/medication/EMARReviewReport";
import MandatoryMedicationReport from "./pages/CustomerPages/Details/medication/MandatoryMedicationReport";
import MedicationReviewDateReport from "./pages/CustomerPages/Details/medication/MedicationReviewDateReport";
import AlertsDashboard from "./pages/CustomerPages/Details/medication/AlertsDashboard";
import ClientSummaryProfile from "./pages/CustomerPages/ClientSummaryProfile";
import EMARHistory from "./pages/CustomerPages/Details/medication/EMARHistory";
import ClientActionsSummary from "./pages/CustomerPages/Reports/ClientActionsSummary";
import ClientSummaryReport from "./pages/CustomerPages/Reports/ClientSummaryReport";
import DocumentListReport from "./pages/CustomerPages/Reports/DocumentListReport";
import SchedulesForPrinting from "./pages/CustomerPages/Reports/SchedulesForPrinting";
import ReferralReportsPage from "./pages/CustomerPages/Reports/ReferalReports";
import ClientSchedulePage from "./pages/CustomerPages/Details/Schedules";
import EditClientForm from "./pages/CustomerPages/Details/EditClientForm";
import ClientContactsTable from "./pages/CustomerPages/Details/EditContacts";
import ClientPlansOverview from "./pages/CustomerPages/Details/ClientPlanDetails";
import PlanCategoryManagerStatic from "./pages/CustomerPages/PlanCategoryManager";


export default function App() {
  console.log("i am in development mode now ");

  const [isInitialDataLoading, setIsInitialDataLoading] = useState(true);

  // 1. Simulate initial data fetching or app setup check
  useEffect(() => {
    // Replace with your actual authentication/data loading logic (e.g., API calls)
    const timer = setTimeout(() => {
      setIsInitialDataLoading(false); // After 3 seconds, data is 'loaded'
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <LoadingScreen isAppLoading={isInitialDataLoading}>
        <Toaster
          containerStyle={{ zIndex: 999999999999 }}
          position="top-right"
        />
        <ScrollToTop />
        <Routes>
          {/* Protected Admin Routes */}
          <Route>
            <Route element={<AppLayout />}>
              <Route index path="/" element={<Home />} />
              <Route path="/products" element={<ProductManagement />} />
              <Route path="/addProduct" element={<AddProductPage />} />
              <Route path="/editProduct" element={<EditProductPage />} />
              <Route path="/carers" element={<AgentsPage />} />
              <Route path="/quotations" element={<OrdersPage />} />
              <Route path="/quotation-details" element={<QuotationDetailsPage />} />
              <Route path="/received-orders" element={<ReceivedOrders />} />
              <Route path="/create-order" element={<CreateNewOrderPage />} />
              <Route path="/categories" element={<ManageCategoriesPage />} />
              <Route path="/brands" element={<ManageBrandsPage />} />
              <Route path="/profile" element={<UserProfiles />} />
              <Route path="/queries" element={<QueriesPage />} />
              <Route path="/banners" element={<BannersPage />} />
              <Route path="/floatingBanner" element={<FloatingBannerPage />} />
            </Route>
          </Route>

          <Route element={<CustomerLayout />}>
            <Route path="/customers/all" element={<CustomerPage />} />
            <Route path="/customers/addClient" element={<AddCustomerPage />} />
            <Route path="/customer/view" element={<ClientSummaryProfile />} />
            <Route path="/customers/reports/action-summary" element={<ClientActionsSummary />} />
            <Route path="/customers/reports/summary-pdf" element={<ClientSummaryReport />} />
            <Route path="/customers/reports/summary-pdf" element={<ClientSummaryReport />} />
            <Route path="/customers/reports/documents" element={<DocumentListReport />} />
            <Route path="/customers/reports/print-schedule" element={<SchedulesForPrinting />} />
            <Route path="/customers/reports/referrals" element={<ReferralReportsPage />} />
            <Route path="/customers/plan/categories" element={<PlanCategoryManagerStatic />} />
          </Route>

          <Route element={<CustomerDetailsLayout />}>
            <Route path="/customer/details" element={<CustomerDetailsPage />} />
            <Route path="/customer/medication" element={<CustomerMedication />} />
            <Route path="/customer/medication/emar" element={<EMARTracker />} />
            <Route path="/customer/medication/list" element={<MedicationList />} />
            <Route path="/customer/medication/list" element={<MedicationList />} />
            <Route path="/customer/medication/cabinet" element={<MedsCabinet />} />
            <Route path="/customer/medication/history-report" element={<MedicationHistory />} />
            <Route path="/customer/medication/audit-history" element={<EMARHistory />} />
            <Route path="/customer/medication/review-report" element={<EMARReviewReport />} />
            <Route path="/customer/medication/skip-report" element={<MandatoryMedicationReport />} />
            <Route path="/customer/medication/review-date-report" element={<MedicationReviewDateReport />} />
            <Route path="/customer/medication/alerts-dashboard" element={<AlertsDashboard />} />
            <Route path="/customer/schedule" element={<ClientSchedulePage />} />
            <Route path="/customer/edit/details" element={<EditClientForm />} />
            <Route path="/customer/edit/contacts" element={<ClientContactsTable />} />
            <Route path="/customer/plans/details" element={<ClientPlansOverview />} />
          </Route>

          {/* Auth Page */}
          <Route path="/signin" element={<SignIn />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LoadingScreen>
    </Router>
  );
}
