import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ScrollToTop } from "./components/common/ScrollToTop";

import SignIn from "./pages/AuthPages/SignIn";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";

import Home from "./pages/Dashboard/Home";
import AgentsPage from "./pages/agents";
import LoadingScreen from "./pages/AuthPages/LoadingScreen";
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
import ClientsFutureStatusTable from "./pages/CustomerPages/Reports/FutureStatus";
import ClientLettersReportMuiGrid from "./pages/CustomerPages/Reports/ClientLettersReport";
import StatusChangeHoursAffectedMuiGrid from "./pages/CustomerPages/Reports/StatusChangeHoursAffected";
import AllClientsMuiGrid from "./pages/CustomerPages/Reports/AllClientsReports";
import AssignEventsToOutcomes from "./pages/CustomerPages/Outcomes/OutcomeSetup";
import ClientTagSetup from "./pages/CustomerPages/Outcomes/TagSetup";
import OutcomeOverviewReport from "./pages/CustomerPages/Outcomes/OutcomeOverviewReport";
import ClientContactSearch from "./pages/CustomerPages/AdvancedSearch/ClientContacts";
import CustomerTravelDistanceSearch from "./pages/CustomerPages/AdvancedSearch/CustomerTravelDistanceSearch";
import CarerSearch from "./pages/CustomerPages/AdvancedSearch/CarerTravelDistanceSearch";
import ClientTagSetupSearch from "./pages/CustomerPages/AdvancedSearch/ClientTagSetup";
import AllPlansTaken from "./pages/CustomerPages/AdvancedSearch/AllPlansTaken";
import AuditPages from "./pages/CustomerPages/Audit";
import AllClientsNotes from "./pages/CustomerPages/Audit/AllClientsNotes";
import MedicationTaskOverview from "./pages/CustomerPages/Audit/MedicationTaskOverview";
import EMARReview from "./pages/CustomerPages/Audit/EmarReview";
import AssignedHours from "./pages/CustomerPages/Settings/AssignedHours";
import PreferredCarer from "./pages/CustomerPages/Settings/PreferredCarer";
import AssignJobType from "./pages/CustomerPages/Settings/AssignJobType";
import AssessmentType from "./pages/CustomerPages/Settings/AssessmentTypes";

export default function App() {
  const [showInitialLoader, setShowInitialLoader] = useState(() => {
    // 👇 only true if not seen before in this browser session
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");
    return !hasSeenLoader;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (showInitialLoader) {
      const timer = setTimeout(() => {
        sessionStorage.setItem("hasSeenLoader", "true");
        setShowInitialLoader(false);
        navigate("/"); // go to signin automatically
      }, 4000); // show for 4 seconds
      return () => clearTimeout(timer);
    }
  }, [showInitialLoader, navigate]);

  if (showInitialLoader) {
    return <LoadingScreen isAppLoading={true} onFinish={() => { }} />;
  }

  return (
    <>
      <Toaster containerStyle={{ zIndex: 999999999999 }} position="top-right" />
      <ScrollToTop />

      <Routes>

        {/* Auth Page */}
        <Route path="/" element={<SignIn />} />

        {/* Protected Admin Routes */}
        <Route>
          <Route element={<AppLayout />}>
            <Route index path="/dashboard" element={<Home />} />
            <Route path="/carers" element={<AgentsPage />} />
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
          <Route path="/customers/reports/future-status" element={<ClientsFutureStatusTable />} />
          <Route path="/customers/reports/letters" element={<ClientLettersReportMuiGrid />} />
          <Route path="/customers/reports/status-hours" element={<StatusChangeHoursAffectedMuiGrid />} />
          <Route path="/customers/reports/all" element={<AllClientsMuiGrid />} />

          <Route path="/customers/plan/categories" element={<PlanCategoryManagerStatic />} />

          <Route path="/customers/outcomes/setup" element={<AssignEventsToOutcomes />} />
          <Route path="/customers/outcomes/tags" element={<ClientTagSetup />} />
          <Route path="/customers/outcomes/overview" element={<OutcomeOverviewReport />} />

          <Route path="/customers/advanced-search/contact" element={<ClientContactSearch />} />
          <Route path="/customers/advanced-search/travel" element={<CustomerTravelDistanceSearch />} />
          <Route path="/customers/advanced-search/travel-both" element={<CarerSearch />} />
          <Route path="/customers/advanced-search/tags" element={<ClientTagSetupSearch />} />
          <Route path="/customers/advanced-search/plans" element={<AllPlansTaken />} />

          <Route path="/customers/audit" element={<AuditPages />} />
          <Route path="/customers/audit/all-notes" element={<AllClientsNotes />} />
          <Route path="/customers/audit/medication-tasks-overview" element={<MedicationTaskOverview />} />
          <Route path="/customers/audit/emar-overview" element={<EMARReview />} />

          <Route path="/customers/settings/assigned-hours" element={<AssignedHours />} />
          <Route path="/customers/settings/preferred-carer" element={<PreferredCarer />} />
          <Route path="/customers/settings/job-types" element={<AssignJobType />} />
          <Route path="/customers/settings/assessment-type" element={<AssessmentType />} />

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

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>



    </>
  );
}
