import React, { useState } from 'react';
import { 
  Plus, 
  Droplets, 
  UtensilsCrossed, 
  Wind, 
  Trash2, 
  History, 
  ChevronRight, 
  Filter, 
  AlertCircle,
  Clock,
  User,
  CheckCircle2,
  Moon
} from 'lucide-react';

const DailyCareLogs = () => {
  const [selectedResident, setSelectedResident] = useState('Arthur Morgan');

  const recentLogs = [
    { id: 1, type: 'Hydration', volume: '200ml', time: '11:30 AM', carer: 'Sarah T.', status: 'Completed' },
    { id: 2, type: 'Reposition', note: 'Left side to Back', time: '10:00 AM', carer: 'Sarah T.', status: 'Completed' },
    { id: 3, type: 'Elimination', type_detail: 'BM - Type 4', time: '09:15 AM', carer: 'Sarah T.', status: 'Completed' },
    { id: 4, type: 'Nutrition', detail: 'Breakfast - 100%', time: '08:30 AM', carer: 'Sarah T.', status: 'Completed' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      
      {/* Header: Focus on Resident Selection */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800">{selectedResident}</h1>
            <p className="text-slate-500 text-sm">Room 204-A • High Fall Risk</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
           <button className="px-4 py-2 text-xs font-bold text-blue-600 bg-blue-50 rounded-xl">Switch Resident</button>
           <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-slate-50 rounded-xl flex items-center">
             <History className="w-4 h-4 mr-2" /> Full Chart
           </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left: Quick Log Buttons (8 cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* Quick Entry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Hydration', icon: Droplets, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
              { label: 'Nutrition', icon: UtensilsCrossed, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
              { label: 'Toileting', icon: Wind, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
              { label: 'Sleep', icon: Moon, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
            ].map((item) => (
              <button key={item.label} className={`flex flex-col items-center justify-center p-6 bg-white rounded-3xl border-2 border-transparent hover:${item.border} hover:${item.bg} transition-all shadow-sm group`}>
                <div className={`p-3 rounded-2xl ${item.bg} ${item.color} mb-3 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="font-bold text-slate-700 text-sm">{item.label}</span>
                <Plus className="w-4 h-4 mt-2 text-slate-300" />
              </button>
            ))}
          </div>

          {/* Activity Log Table */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Today's Activity Log</h3>
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-slate-400" />
                <span className="text-xs font-bold text-slate-400">Sort: Newest</span>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50/50">
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Type</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Detail</th>
                    <th className="px-6 py-4 text-left text-[10px] font-bold text-slate-400 uppercase tracking-widest">Time</th>
                    <th className="px-6 py-4 text-right text-[10px] font-bold text-slate-400 uppercase tracking-widest">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {recentLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${log.type === 'Hydration' ? 'bg-blue-400' : 'bg-orange-400'}`} />
                          <span className="text-sm font-bold text-slate-700">{log.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                        {log.volume || log.note || log.type_detail || log.detail}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-xs text-slate-400">
                          <Clock className="w-3.5 h-3.5 mr-1" /> {log.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 text-center border-t border-slate-50">
              <button className="text-xs font-bold text-blue-600 hover:underline">View All for Jan 06</button>
            </div>
          </div>
        </div>

        {/* Right: Daily Targets & Reminders (4 cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Progress Targets (Keka Style Charts) */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-6">Daily Care Targets</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center">
                    <Droplets className="w-3 h-3 mr-1 text-blue-500" /> Hydration
                  </span>
                  <span className="text-xs font-bold text-slate-800">1200 / 2000ml</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center">
                    <UtensilsCrossed className="w-3 h-3 mr-1 text-orange-500" /> Nutrition
                  </span>
                  <span className="text-xs font-bold text-slate-800">2 / 3 Meals</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: '66%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Pending Routine Tasks */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5 border-b border-slate-50 bg-blue-50/30">
              <h3 className="font-bold text-blue-900 text-sm">Next Scheduled Care</h3>
            </div>
            <div className="p-5 space-y-4">
              {[
                { task: 'Repositioning', due: '01:00 PM', urgency: 'High' },
                { task: 'Incontinence Check', due: '01:30 PM', urgency: 'Routine' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className={`mt-1 w-2 h-2 rounded-full ${item.urgency === 'High' ? 'bg-red-500' : 'bg-blue-400'}`} />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-700">{item.task}</p>
                    <p className="text-xs text-slate-400">Due at {item.due}</p>
                  </div>
                  <button className="text-xs font-bold text-blue-600 hover:bg-blue-50 px-2 py-1 rounded">Log Now</button>
                </div>
              ))}
            </div>
          </div>

          {/* Safety Notice */}
          <div className="p-5 bg-orange-50 rounded-3xl border border-orange-100">
             <div className="flex items-center space-x-2 text-orange-700 mb-2">
                <AlertCircle className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Fall Risk Protocol</span>
             </div>
             <p className="text-xs text-orange-800 leading-relaxed font-medium">
               Arthur has been unsteady this morning. Ensure 2-person assistance for all mobility tasks and bed rails are secured.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DailyCareLogs;