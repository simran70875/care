import { useState } from 'react';
import { 
  Stethoscope, 
  Utensils, 
  Moon, 
  Plus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Heart, 
  MessageSquare, 
  User, 
  Clock,
  ClipboardList,
} from 'lucide-react';

const CareLogsPage = () => {
  const [selectedResident, setSelectedResident] = useState('All Residents');

  const logs = [
    {
      id: 1,
      carer: 'Sarah Thompson',
      resident: 'Arthur Morgan',
      type: 'Clinical',
      time: '10:15 AM',
      note: 'Administered morning medication. Blood pressure slightly elevated at 145/90. Encouraged fluids and scheduled a re-check for 12:00 PM.',
      tags: ['Medication', 'Vitals'],
      icon: Stethoscope,
      color: 'text-blue-600',
      bg: 'bg-blue-50'
    },
    {
      id: 2,
      carer: 'James Wilson',
      resident: 'Alice Cooper',
      type: 'Well-being',
      time: '09:30 AM',
      note: 'Alice participated in the morning garden walk. She was highly engaged and expressed joy during the activity. No mobility issues observed.',
      tags: ['Mobility', 'Social'],
      icon: Heart,
      color: 'text-pink-600',
      bg: 'bg-pink-50'
    },
    {
      id: 3,
      carer: 'Sarah Thompson',
      resident: 'Martha Stewart',
      type: 'Nutrition',
      time: '08:45 AM',
      note: 'Breakfast: Consumed 100% of porridge and orange juice. No swallowing difficulties noted.',
      tags: ['Dietary'],
      icon: Utensils,
      color: 'text-orange-600',
      bg: 'bg-orange-50'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Care Logs & Observations</h1>
          <p className="text-slate-500 text-sm mt-1">Real-time clinical notes and daily living logs.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-2 flex items-center shadow-sm">
            <User className="w-4 h-4 text-slate-400 mr-2" />
            <select 
              className="text-sm font-semibold text-slate-600 outline-none bg-transparent"
              value={selectedResident}
              onChange={(e) => setSelectedResident(e.target.value)}
            >
              <option>All Residents</option>
              <option>Arthur Morgan</option>
              <option>Alice Cooper</option>
              <option>Martha Stewart</option>
            </select>
          </div>
          <button className="flex items-center px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
            <Plus className="w-4 h-4 mr-2" /> New Note
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Left Column: Log Feed (8 cols) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* Quick Action Log Bar (Keka Style) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 flex items-center justify-between">
            <div className="flex flex-1">
              {[
                { label: 'Vitals', icon: Stethoscope, color: 'hover:text-blue-600 hover:bg-blue-50' },
                { label: 'Dietary', icon: Utensils, color: 'hover:text-orange-600 hover:bg-orange-50' },
                { label: 'Sleep', icon: Moon, color: 'hover:text-indigo-600 hover:bg-indigo-50' },
                { label: 'Incident', icon: ClipboardList, color: 'hover:text-red-600 hover:bg-red-50' },
              ].map((action) => (
                <button key={action.label} className={`flex-1 flex flex-col items-center justify-center py-3 rounded-xl transition-all group ${action.color}`}>
                  <action.icon className="w-5 h-5 text-slate-400 group-hover:inherit mb-1" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 group-hover:inherit">{action.label}</span>
                </button>
              ))}
            </div>
            <div className="h-10 w-[1px] bg-slate-100 mx-2" />
            <div className="px-4">
              <button className="p-3 bg-slate-50 rounded-xl text-slate-400 hover:text-blue-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Timeline Feed */}
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Today's Logs</h3>
              <button className="flex items-center text-xs font-bold text-blue-600">
                <Filter className="w-3 h-3 mr-1" /> Filter Feed
              </button>
            </div>

            {logs.map((log) => (
              <div key={log.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group">
                <div className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`${log.bg} ${log.color} p-2.5 rounded-xl`}>
                        <log.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="text-sm font-bold text-slate-800">{log.resident}</h4>
                          <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold uppercase tracking-tighter">{log.type}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-medium">Logged by {log.carer} • {log.time}</p>
                      </div>
                    </div>
                    <button className="p-1.5 text-slate-300 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 pl-1">
                    {log.note}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex space-x-2">
                      {log.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold text-blue-600 bg-blue-50/50 px-2 py-1 rounded">#{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors">
                        <MessageSquare className="w-3.5 h-3.5 mr-1.5" /> 2 Comments
                      </button>
                      <button className="flex items-center text-xs font-bold text-slate-400 hover:text-red-500 transition-colors">
                        <Heart className="w-3.5 h-3.5 mr-1.5" /> Acknowledge
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Summaries & Flags (4 cols) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Handover Summary Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center">
              <ClipboardList className="w-5 h-5 mr-2 text-blue-600" />
              Handover Flags
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded-xl border border-red-100">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wider mb-1">High Alert</p>
                <p className="text-sm text-red-800 font-medium leading-snug">Room 204: Mobility restricted following fall assessment.</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-xl border border-orange-100">
                <p className="text-xs font-bold text-orange-700 uppercase tracking-wider mb-1">Observation</p>
                <p className="text-sm text-orange-800 font-medium leading-snug">Room 102: Refused evening fluids twice today.</p>
              </div>
            </div>
          </div>

          {/* Clinical Reminders */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
             <div className="p-5 border-b border-slate-50">
                <h3 className="font-bold text-slate-800">Pending Actions</h3>
             </div>
             <div className="p-5 space-y-4">
                {[
                  { task: 'Re-check Temp: Arthur', due: '12:00 PM', urgency: 'High' },
                  { task: 'Position Turn: Mrs. Gable', due: '12:30 PM', urgency: 'Medium' },
                  { task: 'Wound Dressing: John', due: '01:00 PM', urgency: 'Scheduled' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${item.urgency === 'High' ? 'bg-red-500' : 'bg-blue-400'}`} />
                      <div>
                        <p className="text-sm font-bold text-slate-700">{item.task}</p>
                        <p className="text-[11px] text-slate-400 flex items-center">
                          <Clock className="w-3 h-3 mr-1" /> Due {item.due}
                        </p>
                      </div>
                    </div>
                    <button className="text-[10px] font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">Complete</button>
                  </div>
                ))}
             </div>
             <button className="w-full py-3 bg-slate-50 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">
               View Full Checklist
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CareLogsPage;