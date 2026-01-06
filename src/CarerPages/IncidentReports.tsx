import React, { useState } from 'react';
import { 
  AlertTriangle, 
  FileWarning, 
  ShieldAlert, 
  Clock, 
  Search, 
  Filter, 
  ChevronRight, 
  MoreHorizontal, 
  Plus,
  Send,
  Eye,
  CheckCircle2,
  Users
} from 'lucide-react';

const IncidentReports = () => {
  const [activeFilter, setActiveFilter] = useState('All Incidents');

  const incidents = [
    {
      id: 'INC-9021',
      resident: 'Arthur Morgan',
      type: 'Fall',
      severity: 'High',
      date: 'Jan 06, 2026',
      time: '10:45 AM',
      reportedBy: 'Sarah Thompson',
      status: 'Investigation',
      regulatory: 'Pending'
    },
    {
      id: 'INC-8994',
      resident: 'Alice Cooper',
      type: 'Medication Error',
      severity: 'Critical',
      date: 'Jan 05, 2026',
      time: '04:20 PM',
      reportedBy: 'James Wilson',
      status: 'Action Required',
      regulatory: 'Reported'
    },
    {
      id: 'INC-8812',
      resident: 'Martha Stewart',
      type: 'Skin Tear',
      severity: 'Low',
      date: 'Jan 04, 2026',
      time: '09:00 AM',
      reportedBy: 'Sarah Thompson',
      status: 'Resolved',
      regulatory: 'Not Required'
    }
  ];

  const getSeverityStyle = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      case 'High': return 'bg-orange-100 text-orange-700 border-orange-200';
      default: return 'bg-blue-100 text-blue-700 border-blue-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <ShieldAlert className="w-7 h-7 mr-3 text-red-600" />
            Incident Management
          </h1>
          <p className="text-slate-500 text-sm mt-1">Log, track, and resolve clinical and safety incidents.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 shadow-sm transition-all">
            <Eye className="w-4 h-4 mr-2" /> View Dashboard
          </button>
          <button className="flex items-center px-4 py-2.5 bg-red-600 text-white rounded-xl text-sm font-bold hover:bg-red-700 shadow-lg shadow-red-200 transition-all">
            <Plus className="w-4 h-4 mr-2" /> Log New Incident
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column: List of Incidents (8 cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* Status Tabs */}
          <div className="flex space-x-1 bg-white p-1.5 rounded-2xl border border-slate-100 w-fit shadow-sm">
            {['All Incidents', 'Open', 'Under Review', 'Resolved'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeFilter === tab 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Incident Feed */}
          <div className="space-y-4">
            {incidents.map((incident) => (
              <div key={incident.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:border-blue-200 transition-all group">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-2xl ${incident.severity === 'Critical' ? 'bg-red-50' : 'bg-slate-50'}`}>
                        <AlertTriangle className={`w-6 h-6 ${incident.severity === 'Critical' ? 'text-red-500' : 'text-slate-400'}`} />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-sm font-bold text-slate-800">{incident.resident} - {incident.type}</h3>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getSeverityStyle(incident.severity)}`}>
                            {incident.severity}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium mt-1 uppercase tracking-tighter">
                          ID: {incident.id} • Reported by {incident.reportedBy} • {incident.date} at {incident.time}
                        </p>
                      </div>
                    </div>
                    <button className="p-2 text-slate-300 hover:text-slate-600">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                    <div className="flex space-x-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Workflow Status</span>
                        <span className="text-xs font-bold text-blue-600 flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1" /> {incident.status}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Regulatory</span>
                        <span className={`text-xs font-bold mt-1 ${incident.regulatory === 'Reported' ? 'text-green-600' : 'text-orange-500'}`}>
                          {incident.regulatory}
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-xl transition-all">
                      View Investigation <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Summaries & Actions (4 cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Critical Alerts Sidebar (Keka style "Important") */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-6 flex items-center">
              <FileWarning className="w-5 h-5 mr-2 text-red-600" />
              Urgent Actions
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-2xl border border-red-100 flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-red-800 leading-tight">Medication Audit Needed</p>
                  <p className="text-[11px] text-red-600 mt-1 opacity-80">Follow-up required for Alice Cooper's missed dose (INC-8994).</p>
                  <button className="mt-2 text-[10px] font-bold text-red-700 underline">Start Action Plan</button>
                </div>
              </div>
              
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start space-x-3">
                <Users className="w-5 h-5 text-slate-600 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-slate-800 leading-tight">MDT Meeting Scheduled</p>
                  <p className="text-[11px] text-slate-500 mt-1">Discussing fall prevention strategies for Arthur Morgan.</p>
                  <p className="text-[10px] font-bold text-blue-600 mt-2">Tomorrow • 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics (Keka style Widgets) */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-5 border-b border-slate-50">
                <h3 className="font-bold text-slate-800">Monthly Snapshot</h3>
             </div>
             <div className="p-6 grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-2xl">
                   <p className="text-xl font-black text-slate-800">12</p>
                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Incidents</p>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-2xl">
                   <p className="text-xl font-black text-green-700">84%</p>
                   <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest mt-1">Resolution</p>
                </div>
             </div>
             <div className="px-6 pb-6">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-[11px] font-bold text-slate-500 uppercase">Average Closure Time</span>
                   <span className="text-[11px] font-bold text-slate-800">4.2 Days</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                   <div className="h-full bg-blue-600" style={{ width: '70%' }} />
                </div>
             </div>
          </div>

          {/* Contact Emergency Manager */}
          <div className="bg-slate-900 rounded-3xl p-6 text-white shadow-xl">
             <h3 className="font-bold text-lg mb-2">Emergency On-Call</h3>
             <p className="text-slate-400 text-xs mb-4">Contact the Duty Manager for life-threatening incidents or immediate evacuations.</p>
             <button className="w-full py-3 bg-white text-slate-900 rounded-xl text-sm font-bold flex items-center justify-center">
                <Send className="w-4 h-4 mr-2" /> Notify Manager
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IncidentReports;