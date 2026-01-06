import React, { useState } from 'react';
import { 
  Pill, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  XCircle, 
  Info, 
  ChevronRight, 
  Search, 
  Filter,
  History,
  Activity,
  User,
  MoreVertical
} from 'lucide-react';

const EMARPage = () => {
  const [activeShift, setActiveShift] = useState('Morning');

  const medications = [
    {
      id: 1,
      resident: 'Arthur Morgan',
      room: '204-A',
      med: 'Donepezil',
      dosage: '5mg - 1 Tablet',
      route: 'Oral',
      time: '09:00 AM',
      status: 'Given',
      notes: 'Taken with water',
      urgency: 'Routine'
    },
    {
      id: 2,
      resident: 'Alice Cooper',
      room: '110-C',
      med: 'Lisinopril',
      dosage: '10mg - 1 Tablet',
      route: 'Oral',
      time: '09:00 AM',
      status: 'Due',
      notes: 'Check BP before admin',
      urgency: 'Critical'
    },
    {
      id: 3,
      resident: 'Martha Stewart',
      room: '102-B',
      med: 'Morphine Sulfate',
      dosage: '5mg/5ml - 2.5ml',
      route: 'Oral Solution',
      time: '09:30 AM',
      status: 'Missed',
      notes: 'Resident sleeping',
      urgency: 'Routine'
    },
    {
      id: 4,
      resident: 'John Marston',
      room: '205-A',
      med: 'Paracetamol',
      dosage: '500mg - 2 Tablets',
      route: 'Oral',
      time: 'AS NEEDED (PRN)',
      status: 'PRN',
      notes: 'For mild pain',
      urgency: 'Routine'
    }
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Given': return 'bg-green-50 text-green-700 border-green-100';
      case 'Missed': return 'bg-red-50 text-red-700 border-red-100';
      case 'PRN': return 'bg-purple-50 text-purple-700 border-purple-100';
      default: return 'bg-blue-50 text-blue-700 border-blue-100 animate-pulse';
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <Pill className="w-7 h-7 mr-3 text-blue-600" />
            eMAR - Medication Administration
          </h1>
          <p className="text-slate-500 text-sm mt-1">Med-Pass for Tuesday, 06 Jan 2026</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <History className="w-4 h-4 mr-2" /> View Audit Trail
          </button>
          <button className="flex items-center px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-200">
             Controlled Drug Log
          </button>
        </div>
      </div>

      {/* Med-Pass Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Morning Med-Pass</p>
            <p className="text-2xl font-bold text-slate-800 mt-1">12 / 18 <span className="text-sm font-medium text-slate-400">Done</span></p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-slate-50 border-t-blue-600 flex items-center justify-center">
            <span className="text-[10px] font-bold">66%</span>
          </div>
        </div>
        <div className="bg-red-50 p-5 rounded-2xl border border-red-100 flex items-center space-x-4">
          <div className="bg-red-500 p-2 rounded-lg">
            <AlertCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-red-600 uppercase tracking-widest">Action Required</p>
            <p className="text-lg font-bold text-red-800">2 Overdue Medications</p>
          </div>
        </div>
        <div className="bg-blue-600 p-5 rounded-2xl shadow-lg shadow-blue-200 flex items-center justify-between text-white">
          <div>
            <p className="text-[11px] font-bold opacity-80 uppercase tracking-widest">Active Carer</p>
            <p className="text-lg font-bold">Sarah Thompson</p>
          </div>
          <CheckCircle2 className="w-8 h-8 opacity-40" />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Navigation & Search Filter */}
        <div className="p-5 border-b border-slate-50 bg-slate-50/30">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex space-x-1 bg-slate-100 p-1 rounded-xl w-fit">
              {['Morning', 'Lunch', 'Evening', 'Night', 'PRN'].map((shift) => (
                <button
                  key={shift}
                  onClick={() => setActiveShift(shift)}
                  className={`px-5 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeShift === shift 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {shift}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-3">
               <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Resident or Med name..." 
                  className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm w-64 focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
              <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-500">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* eMAR List View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-50">
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Resident</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Medication</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase text-center">Schedule</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {medications.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-200">
                        {item.room}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{item.resident}</p>
                        <p className="text-[11px] text-slate-400 flex items-center">
                          <User className="w-3 h-3 mr-1" /> View History
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div>
                      <p className="text-sm font-bold text-blue-600 flex items-center">
                        {item.med}
                        {item.urgency === 'Critical' && (
                          <span className="ml-2 text-[8px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded uppercase">Critical</span>
                        )}
                      </p>
                      <p className="text-xs text-slate-600 mt-0.5">{item.dosage} • {item.route}</p>
                      {item.notes && (
                        <p className="text-[10px] text-slate-400 italic mt-1 flex items-center">
                          <Info className="w-3 h-3 mr-1" /> {item.notes}
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="inline-flex flex-col items-center">
                      <Clock className="w-4 h-4 text-slate-300 mb-1" />
                      <span className="text-xs font-bold text-slate-700">{item.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1.5 rounded-lg border text-[11px] font-bold flex items-center w-fit ${getStatusStyle(item.status)}`}>
                      {item.status === 'Given' && <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />}
                      {item.status === 'Missed' && <XCircle className="w-3.5 h-3.5 mr-1.5" />}
                      {item.status === 'Due' && <Activity className="w-3.5 h-3.5 mr-1.5" />}
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-2">
                      {item.status === 'Due' ? (
                        <button className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-all shadow-md shadow-blue-100">
                          Administer
                        </button>
                      ) : (
                        <button className="px-4 py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded-lg hover:bg-slate-200">
                          View Details
                        </button>
                      )}
                      <button className="p-2 text-slate-300 hover:text-slate-600">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer Disclaimer/Context (Audit Trail Info) */}
      <div className="mt-6 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
        <p className="text-xs text-blue-700 flex items-start">
          <AlertCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
          <span>
            <strong>Digital Signature Required:</strong> All medication administration entries are digitally signed by <strong>Sarah Thompson</strong>. Any changes or "Missed" dose entries will require a mandatory reason code and will be logged in the permanent clinical audit trail.
          </span>
        </p>
      </div>
    </div>
  );
};

export default EMARPage;