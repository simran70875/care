import { NavItem } from "../layout/AppSidebar";
import {
  Users,
  FileText,
  Award,
  Search,
  BarChart2,
  Settings,
  Mail,
  GridIcon,
  UserIcon,
} from "lucide-react";

export const reportsSubMenu = [
  { name: "Customer Action Summary", path: "/customers/reports/action-summary",},
  { name: "Customer Summary PDF", path: "/customers/reports/summary-pdf" },
  { name: "Document List", path: "/customers/reports/documents" },
  { name: "Print Schedule PDF", path: "/customers/reports/print-schedule" },
  { name: "Referral Reports", path: "/customers/reports/referrals" },
  { name: "Future Status Changes", path: "/customers/reports/future-status" },
  { name: "Letters Report", path: "/customers/reports/letters" },
  { name: "Status Change Hrs Affected", path: "/customers/reports/status-hours" },
  { name: "All Customer Report", path: "/customers/reports/all" },
]

export const outcomeSubMenu = [
  { name: "Outcome Setup", path: "/customers/outcomes/setup" },
  { name: "Tag Setup", path: "/customers/outcomes/tags" },
  { name: "Outcome Overview Report", path: "/customers/outcomes/overview" },
]

export const searchSubMenu = [
  { name: "Customer Contact Report", path: "/customers/advanced-search/contact" },
  { name: "Customer Travel Distance", path: "/customers/advanced-search/travel" },
  { name: "Customer/Carer Travel Distance", path: "/customers/advanced-search/travel-both" },
  { name: "Customer Tag Setup", path: "/customers/advanced-search/tags" },
  { name: "Plans Taken Report", path: "/customers/advanced-search/plans" },
]

export const clientSettingSubMenu = [
  { name: "Assigned Hours", path: "/customers/settings/assigned-hours" },
  { name: "Preferred Carer", path: "/customers/settings/preferred-carer" },
  { name: "Assign Job Types", path: "/customers/settings/job-types" },
  { name: "Assessment Type", path: "/customers/settings/assessment-type" },
  { name: "No Carer Assigned", path: "/customers/settings/no-carer" },
  { name: "Edit Job Types", path: "/customers/settings/edit-job" },
  { name: "Referral Reason Setup", path: "/customers/settings/referral-reason" },
  { name: "Email Schedule", path: "/customers/settings/email-schedule" },
  { name: "Inactive Digital Tasks", path: "/customers/settings/inactive-tasks" },
]

export const letterSubMenu = [
  { name: "Completed Templates", path: "/customers/letters/completed" },
  { name: "Template Editor", path: "/customers/letters/editor" },
  { name: "Create Template", path: "/customers/letters/create" },
]

export const clientSubMenu: NavItem[] = [
  { icon: <GridIcon />, name: "Main Dashboard", path: "/" },
  { icon: <Users />, name: "All Customers", path: "/customers/all" },
  { icon: <UserIcon />, name: "Add Customer", path: "/customers/addClient" },
  // { icon: <Calendar />, name: "Schedule", path: "/customers/schedule" },
  { icon: <FileText />, name: "Reports", path: "/customers/reports", subItems: reportsSubMenu },
  { icon: <Award />, name: "Outcomes", path: "/customers/outcomes", subItems: outcomeSubMenu },
  { icon: <Search />, name: "Advanced Search", path: "/customers/advanced-search", subItems: searchSubMenu },
  { icon: <BarChart2 />, name: "Audit Pages", path: "/customers/audit" },
  { icon: <Settings />, name: "Settings", path: "/customers/settings", subItems: clientSettingSubMenu },
  { icon: <Mail />, name: "Letter Templates", path: "/customers/letters", subItems: letterSubMenu },
];


