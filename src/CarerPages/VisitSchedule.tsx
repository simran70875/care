
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  User, 
  Video, 
  MapPin, 
  MoreHorizontal,
  Calendar as CalendarIcon,
  Search,
  CheckCircle2
} from 'lucide-react';

const VisitSchedule = () => {

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Mock Data for the Calendar
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const scheduledVisits = [2, 6, 10, 15, 16, 22, 28]; // Dates with visits

  const todayVisits = [
    { 
      id: 1, 
      resident: 'Arthur Morgan', 
      visitor: 'Mary Linton', 
      time: '10:00 AM - 11:00 AM', 
      type: 'In-Person', 
      status: 'Approved', 
      location: 'Garden Room' 
    },
    { 
      id: 2, 
      resident: 'Alice Cooper', 
      visitor: 'Ben Cooper', 
      time: '02:30 PM - 03:00 PM', 
      type: 'Video Call', 
      status: 'Pending', 
      location: 'Virtual Terminal 1' 
    },
    { 
      id: 3, 
      resident: 'Martha Stewart', 
      visitor: 'Snoop Dogg', 
      time: '04:00 PM - 05:00 PM', 
      type: 'In-Person', 
      status: 'Completed', 
      location: 'Main Lounge' 
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Visit Schedule</h1>
          <p className="text-slate-500 text-sm mt-1">Manage family visits and virtual calls for residents.</p>
        </div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search resident..." 
              className="pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64 shadow-sm"
            />
          </div>
          <button className="flex items-center px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            <Plus className="w-4 h-4 mr-2" /> Book Visit
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left: Monthly Calendar Grid (8 cols) */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Calendar Controls */}
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-bold text-slate-800">January 2026</h2>
                <div className="flex bg-slate-100 p-1 rounded-lg">
                  <button className="p-1 hover:bg-white rounded-md transition-all text-slate-500 hover:text-blue-600">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="p-1 hover:bg-white rounded-md transition-all text-slate-500 hover:text-blue-600">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex bg-slate-50 p-1 rounded-xl">
                {['Month', 'Week', 'Day'].map((view) => (
                  <button 
                    key={view}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${
                      view === 'Month' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-4">
              <div className="grid grid-cols-7 mb-2">
                {days.map(day => (
                  <div key={day} className="text-center py-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-px bg-slate-100 border border-slate-100 rounded-lg overflow-hidden">
                {calendarDays.map((day) => (
                  <div 
                    key={day} 
                    className={`min-h-[100px] bg-white p-3 transition-colors hover:bg-slate-50 cursor-pointer relative ${
                      day === 6 ? 'ring-2 ring-inset ring-blue-600 ring-opacity-20 bg-blue-50/30' : ''
                    }`}
                  >
                    <span className={`text-sm font-bold ${day === 6 ? 'text-blue-600' : 'text-slate-700'}`}>
                      {day}
                    </span>
                    
                    {scheduledVisits.includes(day) && (
                      <div className="mt-2 space-y-1">
                        <div className="text-[10px] bg-blue-50 text-blue-700 p-1 rounded font-bold border border-blue-100 truncate">
                           Family Visit (2)
                        </div>
                        {day === 15 && (
                          <div className="text-[10px] bg-purple-50 text-purple-700 p-1 rounded font-bold border border-purple-100 truncate">
                            Dr. Review
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
                {/* Pad empty days for next month */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="min-h-[100px] bg-slate-50/50 p-3 opacity-40">
                    <span className="text-sm font-bold text-slate-300">{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Daily Agenda (4 cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="p-5 border-b border-slate-50 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-800">Today's Visits</h3>
                <p className="text-xs text-slate-400">Tuesday, Jan 06</p>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <CalendarIcon className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            
            <div className="p-5 space-y-4">
              {todayVisits.map((visit) => (
                <div key={visit.id} className="relative pl-4 border-l-2 border-slate-100 hover:border-blue-400 transition-colors py-1 group">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{visit.time}</p>
                      <h4 className="text-sm font-bold text-slate-800 mt-0.5">{visit.resident}</h4>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      visit.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                      visit.status === 'Pending' ? 'bg-orange-100 text-orange-700' : 
                      'bg-slate-100 text-slate-600'
                    }`}>
                      {visit.status}
                    </span>
                  </div>
                  
                  <div className="mt-3 flex items-center space-x-3">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[10px] font-bold">VS</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-600 truncate font-medium flex items-center">
                        <User className="w-3 h-3 mr-1 text-slate-400" /> {visit.visitor}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5 flex items-center">
                        {visit.type === 'Video Call' ? <Video className="w-3 h-3 mr-1" /> : <MapPin className="w-3 h-3 mr-1" />}
                        {visit.location}
                      </p>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreHorizontal className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Summary Stats for the day */}
              <div className="mt-6 pt-6 border-t border-slate-50 grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-slate-50 rounded-xl">
                  <p className="text-lg font-bold text-slate-800">08</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Visits</p>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded-xl">
                  <p className="text-lg font-bold text-slate-800">02</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Video Calls</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50/50 rounded-b-2xl">
              <button className="w-full py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                View Daily Report
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default VisitSchedule;