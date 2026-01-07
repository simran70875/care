import { useState } from 'react';
import { 
  FileSearch, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Calendar, 
  Download, 
  Filter, 
  Search, 
  ChevronRight, 
  Clock, 
  AlertCircle,
  BarChart3
} from 'lucide-react';

const ReportsCarePlans = () => {
  const [activeTab, setActiveTab] = useState('Care Plans');

  const carePlans = [
    { id: 'CP-102', resident: 'Arthur Morgan', type: 'Dementia Care', status: 'Active', lastReview: 'Dec 12, 2025', nextReview: 'Mar 12, 2026', compliance: 'High' },
    { id: 'CP-085', resident: 'Alice Cooper', type: 'Mobility & Falls', status: 'Under Review', lastReview: 'Oct 05, 2025', nextReview: 'Jan 15, 2026', compliance: 'Urgent' },
    { id: 'CP-114', resident: 'Martha Stewart', type: 'Nutrition Plan', status: 'Active', lastReview: 'Jan 02, 2026', nextReview: 'Apr 02, 2026', compliance: 'High' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <FileSearch className="w-7 h-7 mr-3 text-blue-600" />
            Reports & Care Plans
          </h1>
          <p className="text-slate-500 text-sm mt-1">Review resident strategies and clinical documentation.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 shadow-sm transition-all">
            <Download className="w-4 h-4 mr-2" /> Export All
          </button>
          <button className="flex items-center px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-200">
             Generate Incident Report
          </button>
        </div>
      </div>

      {/* Summary Analytics (Keka Style Widgets) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Active Care Plans', value: '42', icon: ShieldCheck, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Overdue Reviews', value: '03', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50' },
          { label: 'Reports (This Week)', value: '128', icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Audit Score', value: '98%', icon: TrendingUp, color: 'text-indigo-600', bg: 'bg-indigo-50' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center space-x-4">
            <div className={`${stat.bg} p-3 rounded-xl`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-xl font-bold text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Content Area (8 cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* Tabs Container */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-2 border-b border-slate-50 bg-slate-50/50">
              <div className="flex space-x-1">
                {['Care Plans', 'Clinical Reports', 'Incident History'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-2.5 text-xs font-bold rounded-xl transition-all ${
                      activeTab === tab 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5">
              {/* Search & Filter Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Search by resident or plan type..." 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <button className="ml-4 p-2.5 border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50">
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              {/* List View */}
              <div className="space-y-3">
                {carePlans.map((plan) => (
                  <div key={plan.id} className="group p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 text-blue-600">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-sm font-bold text-slate-800">{plan.type}</h4>
                            <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                              plan.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                            }`}>
                              {plan.status}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 font-medium mt-1">Resident: {plan.resident} • ID: {plan.id}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-8">
                        <div className="text-right hidden md:block">
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Next Review</p>
                          <p className={`text-xs font-bold ${plan.compliance === 'Urgent' ? 'text-red-600' : 'text-slate-700'}`}>
                            {plan.nextReview}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Access (4 cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Recent Reports Sidebar (Keka Style "Recent Updates") */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-600" />
              Recently Generated
            </h3>
            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
              {[
                { title: 'Weekly Vitals Summary', date: 'Today, 08:00 AM', size: '1.2 MB' },
                { title: 'eMAR Missed Dose Audit', date: 'Yesterday', size: '0.8 MB' },
                { title: 'Handover Report - Wing A', date: 'Yesterday', size: '2.4 MB' },
              ].map((report, idx) => (
                <div key={idx} className="relative pl-8 group">
                  <div className="absolute left-0 top-1.5 w-6 h-6 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 cursor-pointer">{report.title}</h4>
                    <div className="flex items-center text-[11px] text-slate-400 font-medium mt-1">
                      <Calendar className="w-3 h-3 mr-1" /> {report.date} • {report.size}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-slate-50 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-all">
              Browse Archive
            </button>
          </div>

          {/* Compliance Info (Keka style Help Widget) */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg leading-tight">CQC Compliance Shield</h3>
            <p className="text-blue-100 text-xs mt-2 leading-relaxed opacity-90">
              All care plans currently meet the 2026 clinical standards. Ensure Alice Cooper's Fall Assessment is reviewed within 48 hours to maintain your wing's rating.
            </p>
            <button className="mt-4 px-4 py-2 bg-white text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-50 transition-colors">
              Run Compliance Audit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReportsCarePlans;