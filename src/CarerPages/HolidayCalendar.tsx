import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  Download, 
  Star,
  MapPin,
  Clock,
  ExternalLink
} from 'lucide-react';

const HolidayCalendar = () => {
  // const [currentMonth, setCurrentMonth] = useState('January 2026');

  const holidays = [
    { date: '01', day: 'Thu', name: 'New Year\'s Day', type: 'Public Holiday', status: 'Pay Rate: 2.0x' },
    { date: '26', day: 'Mon', name: 'Australia Day', type: 'Public Holiday', status: 'Pay Rate: 2.0x' },
    { date: '14', day: 'Wed', name: 'Annual Staff Gala', type: 'Company Event', status: 'Evening Shift Only' },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <Calendar className="w-7 h-7 mr-3 text-blue-600" />
            Holiday Calendar 2026
          </h1>
          <p className="text-slate-500 text-sm mt-1">View statutory holidays and facility-specific events.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 shadow-sm transition-all">
            <Download className="w-4 h-4 mr-2" /> Export to Google/iCal
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column: Monthly Grid (8 cols) */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/30">
              <div className="flex items-center space-x-4">
                <h2 className="text-lg font-bold text-slate-800">January 2026</h2>
                <div className="flex bg-white border border-slate-200 rounded-lg p-1">
                  <button className="p-1 hover:bg-slate-50 rounded-md"><ChevronLeft className="w-4 h-4 text-slate-400" /></button>
                  <button className="p-1 hover:bg-slate-50 rounded-md"><ChevronRight className="w-4 h-4 text-slate-400" /></button>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mr-2" /> Public
                </div>
                <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="w-2.5 h-2.5 bg-purple-500 rounded-full mr-2" /> Company
                </div>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="p-6">
              <div className="grid grid-cols-7 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d} className="text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest pb-4">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const isHoliday = day === 1 || day === 26;
                  const isEvent = day === 14;
                  return (
                    <div 
                      key={day} 
                      className={`min-h-[100px] p-2 rounded-2xl border transition-all relative ${
                        isHoliday ? 'bg-blue-50 border-blue-100' : isEvent ? 'bg-purple-50 border-purple-100' : 'bg-white border-slate-50 hover:border-slate-200'
                      }`}
                    >
                      <span className={`text-xs font-bold ${isHoliday ? 'text-blue-600' : isEvent ? 'text-purple-600' : 'text-slate-400'}`}>
                        {day}
                      </span>
                      {isHoliday && (
                        <div className="mt-2 text-[9px] font-black text-blue-700 leading-tight uppercase">
                          Public Hol.
                        </div>
                      )}
                      {isEvent && (
                        <div className="mt-2 text-[9px] font-black text-purple-700 leading-tight uppercase">
                          Staff Gala
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Holiday List (4 cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Upcoming Holidays Card */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-5 border-b border-slate-50 flex items-center justify-between">
              <h3 className="font-bold text-slate-800">2026 Holidays</h3>
              <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">11 Total</span>
            </div>
            <div className="p-0">
              {holidays.map((h, i) => (
                <div key={i} className="p-5 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-all flex items-start space-x-4">
                  <div className="flex flex-col items-center justify-center min-w-[48px] h-12 bg-white rounded-xl border border-slate-100 shadow-sm">
                    <span className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">{h.day}</span>
                    <span className="text-lg font-black text-slate-800 leading-none">{h.date}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-800">{h.name}</h4>
                    <p className="text-[11px] font-medium text-slate-400 mt-0.5">{h.type}</p>
                    <div className="mt-2 inline-flex items-center text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      <Clock className="w-3 h-3 mr-1" /> {h.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-slate-50 text-center">
              <button className="text-xs font-bold text-slate-500 hover:text-blue-600">View Full Year List</button>
            </div>
          </div>

          {/* Quick Info: Pay Policy */}
          <div className="bg-indigo-900 rounded-3xl p-6 text-white shadow-xl shadow-indigo-100">
             <div className="flex items-center space-x-3 mb-4">
               <div className="bg-white/20 p-2 rounded-xl">
                 <Star className="w-5 h-5" />
               </div>
               <h3 className="font-bold">Pay & Rota Policy</h3>
             </div>
             <p className="text-indigo-200 text-xs leading-relaxed opacity-90 mb-4">
               Working on a Public Holiday automatically triggers **Double Time (2.0x)** pay. 
             </p>
             <div className="space-y-3">
                <div className="flex items-center text-[11px] font-medium text-indigo-100">
                  <MapPin className="w-3.5 h-3.5 mr-2 opacity-60" /> Regional: Victoria, AU
                </div>
                <div className="flex items-center text-[11px] font-medium text-indigo-100">
                  <Info className="w-3.5 h-3.5 mr-2 opacity-60" /> CQC Compliant Staffing
                </div>
             </div>
             <button className="mt-6 w-full py-2.5 bg-white text-indigo-900 rounded-xl text-xs font-bold hover:bg-indigo-50 transition-all flex items-center justify-center">
                Read Detailed Policy <ExternalLink className="w-3 h-3 ml-2" />
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HolidayCalendar;