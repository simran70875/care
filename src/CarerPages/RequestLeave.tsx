import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Info, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Plus,
  FileText,
  CalendarCheck,
  Palmtree,
  Stethoscope,
  MoreVertical
} from 'lucide-react';

const RequestLeave = () => {
  const [leaveType, setLeaveType] = useState('Annual Leave');

  const leaveBalances = [
    { title: 'Annual Leave', total: 28, available: 12.5, used: 15.5, icon: Palmtree, color: 'text-green-600', bg: 'bg-green-50' },
    { title: 'Sick Leave', total: 10, available: 8, used: 2, icon: Stethoscope, color: 'text-red-600', bg: 'bg-red-50' },
    { title: 'Public Holiday', total: 8, available: 3, used: 5, icon: CalendarCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
  ];

  const leaveHistory = [
    { id: 1, type: 'Annual Leave', dates: 'Jan 15 - Jan 18', days: 4, status: 'Approved', appliedOn: 'Jan 02, 2026' },
    { id: 2, type: 'Sick Leave', dates: 'Dec 20 - Dec 21', days: 2, status: 'Completed', appliedOn: 'Dec 20, 2025' },
    { id: 3, type: 'Personal Leave', dates: 'Feb 05 - Feb 05', days: 1, status: 'Pending', appliedOn: 'Today' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Leave Management</h1>
          <p className="text-slate-500 text-sm mt-1">Plan your time off and track your leave balances.</p>
        </div>
      </div>

      {/* Leave Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {leaveBalances.map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm group hover:border-blue-200 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`${item.bg} ${item.color} p-3 rounded-2xl`}>
                <item.icon className="w-6 h-6" />
              </div>
              <button className="text-slate-300 hover:text-slate-600">
                <Info className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.title}</p>
            <div className="flex items-baseline space-x-2 mt-1">
              <p className="text-2xl font-black text-slate-800">{item.available}</p>
              <p className="text-xs text-slate-400 font-medium">Available Days</p>
            </div>
            <div className="mt-4 h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
               <div 
                className={`h-full ${item.color.replace('text', 'bg')}`} 
                style={{ width: `${(item.used / item.total) * 100}%` }} 
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Apply Leave Form (5 cols) */}
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center">
              <Plus className="w-5 h-5 mr-2 text-blue-600" /> Apply for Leave
            </h2>
            
            <form className="space-y-5">
              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Leave Type</label>
                <select 
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 transition-all"
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                >
                  <option>Annual Leave</option>
                  <option>Sick Leave</option>
                  <option>Mandatory Training</option>
                  <option>Compassionate Leave</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">From</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="date" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none" />
                  </div>
                </div>
                <div>
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">To</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input type="date" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 block">Reason / Note</label>
                <textarea 
                  placeholder="e.g. Family wedding or personal rest..."
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl text-sm outline-none min-h-[100px] focus:ring-2 focus:ring-blue-500/10"
                ></textarea>
              </div>

              <div className="p-4 bg-blue-50/50 rounded-2xl flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-500 mt-0.5" />
                <p className="text-xs text-blue-700 leading-relaxed">
                  <strong>Roster Notice:</strong> Applying for leave between Jan 10–15 may require a shift swap with a colleague in the North Wing.
                </p>
              </div>

              <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-sm shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                Submit Request
              </button>
            </form>
          </div>
        </div>

        {/* Leave History (7 cols) */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
              <h2 className="font-bold text-slate-800">My Leave History</h2>
              <button className="text-xs font-bold text-blue-600 flex items-center">
                View All <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type & Date</th>
                    <th className="px-6 py-4 text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {leaveHistory.map((leave) => (
                    <tr key={leave.id} className="hover:bg-slate-50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            leave.type === 'Sick Leave' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'
                          }`}>
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-700">{leave.type}</p>
                            <p className="text-[11px] text-slate-400 font-medium">{leave.dates}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-sm font-bold text-slate-700">{leave.days} Days</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {leave.status === 'Approved' ? (
                            <span className="flex items-center text-[11px] font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                              <CheckCircle2 className="w-3 h-3 mr-1.5" /> {leave.status}
                            </span>
                          ) : leave.status === 'Pending' ? (
                            <span className="flex items-center text-[11px] font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                              <Clock className="w-3 h-3 mr-1.5" /> {leave.status}
                            </span>
                          ) : (
                            <span className="flex items-center text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                              {leave.status}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 text-slate-300 hover:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Empty State / Bottom Info */}
            <div className="p-6 bg-slate-50/50 border-t border-slate-50 text-center">
              <p className="text-[11px] text-slate-400 font-medium">
                Showing recent leave requests. Applied before Jan 07, 2026.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestLeave;