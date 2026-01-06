import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Timer, 
  Coffee, 
  CheckCircle2, 
  AlertCircle,
  Download,
  ArrowUpRight,
  MoreHorizontal
} from 'lucide-react';

const CarerTimesheet = () => {
  const [currentView, setCurrentView] = useState('Calendar');

  // Mock data for shifts
  const shifts = [
    { date: 5, type: 'Day Shift', hours: '08:00 - 20:00', status: 'Completed' },
    { date: 6, type: 'Day Shift', hours: '08:00 - 20:00', status: 'Active' },
    { date: 7, type: 'Night Shift', hours: '20:00 - 08:00', status: 'Upcoming' },
    { date: 10, type: 'Day Shift', hours: '08:00 - 20:00', status: 'Upcoming' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">My Attendance & Shifts</h1>
          <p className="text-slate-500 text-sm mt-1">Track your working hours and manage your roster.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <Download className="w-4 h-4 mr-2" /> Download Payslip
          </button>
          <button className="flex items-center px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-200">
             Raise Adjustment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left: Calendar & Timesheet (8 cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* Main Attendance Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  {['Calendar', 'List View'].map((v) => (
                    <button 
                      key={v}
                      onClick={() => setCurrentView(v)}
                      className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                        currentView === v ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
                <div className="h-6 w-[1px] bg-slate-200" />
                <div className="flex items-center space-x-2">
                   <button className="p-1 hover:bg-slate-50 rounded-lg"><ChevronLeft className="w-4 h-4 text-slate-400" /></button>
                   <span className="text-sm font-bold text-slate-700">January 2026</span>
                   <button className="p-1 hover:bg-slate-50 rounded-lg"><ChevronRight className="w-4 h-4 text-slate-400" /></button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2" /> Day
                </span>
                <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase ml-4">
                  <div className="w-2 h-2 rounded-full bg-indigo-800 mr-2" /> Night
                </span>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-6">
              <div className="grid grid-cols-7 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-3">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const shift = shifts.find(s => s.date === day);
                  return (
                    <div 
                      key={day} 
                      className={`min-h-[90px] p-3 rounded-2xl border transition-all hover:shadow-md cursor-pointer relative ${
                        day === 6 ? 'bg-blue-50/50 border-blue-200' : 'bg-slate-50/30 border-slate-100'
                      }`}
                    >
                      <span className={`text-sm font-bold ${day === 6 ? 'text-blue-600' : 'text-slate-400'}`}>{day}</span>
                      {shift && (
                        <div className={`mt-2 p-1.5 rounded-lg text-[10px] font-bold flex flex-col ${
                          shift.type === 'Day Shift' ? 'bg-blue-100 text-blue-700' : 'bg-indigo-100 text-indigo-700'
                        }`}>
                          <span>{shift.type}</span>
                          <span className="opacity-70 mt-0.5">{shift.hours}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Clocking & Stats (4 cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Active Clocking Widget (Keka Style) */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Today's Shift</h3>
            <p className="text-xs text-slate-400 mb-6">Tuesday, 06 Jan 2026</p>
            
            <div className="text-center mb-6">
              <p className="text-4xl font-black text-slate-800 tracking-tight">04:22:15</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Logged Hours</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-50 p-3 rounded-2xl text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Clock In</p>
                <p className="text-sm font-bold text-slate-700">08:02 AM</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-2xl text-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Clock Out</p>
                <p className="text-sm font-bold text-slate-400">-- : --</p>
              </div>
            </div>

            <div className="space-y-3">
               <button className="w-full py-3 bg-red-50 text-red-600 rounded-xl text-sm font-bold flex items-center justify-center hover:bg-red-100 transition-all">
                 <Timer className="w-4 h-4 mr-2" /> Clock Out
               </button>
               <button className="w-full py-3 bg-slate-50 text-slate-600 rounded-xl text-sm font-bold flex items-center justify-center hover:bg-slate-100 transition-all">
                 <Coffee className="w-4 h-4 mr-2" /> Start Break
               </button>
            </div>
          </div>

          {/* Payroll Preview Metrics */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-4">Earnings Snapshot</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50/50 rounded-2xl">
                 <div>
                    <p className="text-[10px] font-bold text-blue-600 uppercase">Regular Hours</p>
                    <p className="text-lg font-bold text-slate-800">144.5 <span className="text-xs font-medium text-slate-400">hrs</span></p>
                 </div>
                 <CheckCircle2 className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50/50 rounded-2xl">
                 <div>
                    <p className="text-[10px] font-bold text-orange-600 uppercase">Overtime</p>
                    <p className="text-lg font-bold text-slate-800">12.0 <span className="text-xs font-medium text-slate-400">hrs</span></p>
                 </div>
                 <ArrowUpRight className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100">
               <div className="flex items-center text-xs text-slate-500">
                  <AlertCircle className="w-4 h-4 mr-2 text-slate-400" />
                  <span>3 Pending approvals for shift adjustments.</span>
               </div>
            </div>
          </div>

          {/* Policy Info */}
          <div className="bg-indigo-900 rounded-3xl p-6 text-white shadow-xl">
             <div className="flex items-center justify-between mb-4">
               <div className="bg-white/20 p-2 rounded-lg">
                 <CalendarIcon className="w-5 h-5" />
               </div>
               <button className="text-[10px] font-bold uppercase underline">Policy</button>
             </div>
             <h4 className="font-bold">Next Roster Release</h4>
             <p className="text-indigo-200 text-xs mt-1 leading-relaxed">
               The roster for Feb 2026 will be released on Jan 15. Ensure your availability is updated by then.
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CarerTimesheet;