import { useState } from 'react';
import { 
  Clock, 
  Users, 
  Pill, 
  TrendingUp, 
  CheckCircle2, 
  Heart, 
  AlertCircle,
  MapPin,
  ChevronRight,
  Play,
  ExternalLink
} from 'lucide-react';

const CarerDashboard = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      {/* New Profile Banner Section (Keka-inspired) */}
      <div className="relative rounded-2xl overflow-hidden mb-8 shadow-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-indigo-900 opacity-90 z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10 mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Thompson" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-white">
              <div className="flex items-center space-x-3">
                <h1 className="text-3xl font-bold">Sarah Thompson</h1>
                <ExternalLink className="w-5 h-5 text-blue-200 cursor-pointer hover:text-white" />
              </div>
              <p className="text-blue-100 font-medium mt-1">Senior Carer - Wing A • Maple Residency, London</p>
            </div>
          </div>
          <div className="flex items-center mt-6 md:mt-0 space-x-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20">
            <div className="relative w-16 h-16">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path className="text-blue-900/30" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"/>
                <path className="text-green-400" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="100, 100" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold text-white">100%</span>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold">Profile completed successfully!</p>
              <a href="/carer/me/profile" className="flex items-center text-sm text-blue-200 hover:text-white font-medium mt-1 group">
                Go to My Profile <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Original Dashboard Content Starts Here */}
      {/* Upper Summary Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-800">Good Morning, Sarah!</h1>
        <p className="text-slate-500">Here is what's happening at Maple Residency today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Active Clients', value: '12', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Medication Alerts', value: '04', icon: Pill, color: 'text-red-500', bg: 'bg-red-50' },
          { label: 'Completed Tasks', value: '18/24', icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50' },
          { label: 'Avg. Ward Mood', value: 'Stable', icon: Heart, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center space-x-4">
            <div className={`${stat.bg} p-3 rounded-xl`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              <p className="text-xl font-bold text-slate-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column: Clock-in & Quick Info */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          
          {/* Clock In/Out Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-blue-600 p-4 text-white">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium opacity-90">Current Shift: Morning</span>
                <Clock className="w-5 h-5 opacity-80" />
              </div>
              <div className="mt-2">
                <p className="text-3xl font-bold">08:42 AM</p>
                <p className="text-xs opacity-80">Tuesday, 6th Jan 2026</p>
              </div>
            </div>
            <div className="p-5">
              <button 
                onClick={() => setIsClockedIn(!isClockedIn)}
                className={`w-full py-3 rounded-xl font-semibold transition-all flex items-center justify-center space-x-2 ${
                  isClockedIn 
                  ? 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100' 
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                }`}
              >
                <Play className={`w-4 h-4 ${isClockedIn ? 'fill-red-600 rotate-90' : 'fill-white'}`} />
                <span>{isClockedIn ? 'Web Clock-Out' : 'Web Clock-In'}</span>
              </button>
              <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                <div className="p-2 bg-slate-50 rounded-lg">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Shift Start</p>
                  <p className="text-sm font-semibold text-slate-700">08:00 AM</p>
                </div>
                <div className="p-2 bg-slate-50 rounded-lg">
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Shift End</p>
                  <p className="text-sm font-semibold text-slate-700">04:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Medication */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-800">Critical Med-Pass</h3>
              <span className="text-xs text-blue-600 font-semibold cursor-pointer">View All</span>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Arthur Morgan', med: 'Donepezil (5mg)', time: '09:00 AM', room: 'Room 204' },
                { name: 'Martha Stewart', med: 'Lisinopril (10mg)', time: '09:30 AM', room: 'Room 102' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Pill className="w-4 h-4 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-700">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.med}</p>
                    <div className="flex items-center mt-1 text-[11px] text-slate-400 font-medium">
                      <Clock className="w-3 h-3 mr-1" /> {item.time} • <MapPin className="w-3 h-3 mx-1" /> {item.room}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Tasks & Health Feed */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          
          {/* Care Plan Tasks */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="p-5 border-b border-slate-50 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-800">Priority Care Tasks</h3>
                <p className="text-xs text-slate-400">Essential duties for your current shift</p>
              </div>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">3 Pending</span>
              </div>
            </div>
            <div className="p-5 space-y-3">
              {[
                { task: 'Morning Vitals Check', sub: 'All residents in Wing A', category: 'Clinical', status: 'Pending' },
                { task: 'Post-Breakfast Mobility Walk', sub: 'Mr. Henderson & Mrs. Gable', category: 'Physical', status: 'In Progress' },
                { task: 'Inventory Update', sub: 'Medical supplies storage room 2', category: 'Admin', status: 'Completed' },
              ].map((task, idx) => (
                <div key={idx} className="group flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-2 h-10 rounded-full ${task.status === 'Completed' ? 'bg-green-400' : 'bg-blue-400'}`} />
                    <div>
                      <p className="font-bold text-slate-700 text-sm">{task.task}</p>
                      <p className="text-xs text-slate-500">{task.sub}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{task.category}</span>
                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health & Activity Feed (The "Social" element in Keka, but for Care) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="p-5 border-b border-slate-50">
              <h3 className="font-bold text-slate-800">Resident Status Feed</h3>
            </div>
            <div className="p-5 space-y-6">
              {/* Feed Item 1 */}
              <div className="flex space-x-4">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 font-bold">JD</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-bold text-slate-800">John Doe <span className="font-normal text-slate-500 ml-1">vitals updated by Nurse Elena</span></p>
                      <span className="text-[10px] text-slate-400">14 mins ago</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white p-2 rounded-lg text-center shadow-sm">
                        <p className="text-[9px] text-slate-400 uppercase font-bold">BP</p>
                        <p className="text-sm font-bold text-slate-700">120/80</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg text-center shadow-sm">
                        <p className="text-[9px] text-slate-400 uppercase font-bold">SPO2</p>
                        <p className="text-sm font-bold text-slate-700">98%</p>
                      </div>
                      <div className="bg-white p-2 rounded-lg text-center shadow-sm border-l-2 border-orange-400">
                        <p className="text-[9px] text-slate-400 uppercase font-bold">Temp</p>
                        <p className="text-sm font-bold text-slate-700">99.1°F</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 ml-2">
                    <button className="text-[11px] font-bold text-blue-600 flex items-center"><Heart className="w-3 h-3 mr-1" /> Acknowledge</button>
                    <button className="text-[11px] font-bold text-slate-400">Add Observation</button>
                  </div>
                </div>
              </div>

              {/* Feed Item 2 */}
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="bg-blue-50/50 p-4 rounded-2xl rounded-tl-none border border-blue-100">
                    <p className="text-sm font-bold text-blue-800 mb-1">New Care Note: Alice Cooper</p>
                    <p className="text-sm text-blue-700 leading-relaxed">
                      Alice had a slight fall during lunch today. No visible bruising, but we have scheduled a precautionary check-up for tomorrow morning.
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 ml-2">
                    <span className="text-[10px] text-slate-400 font-medium">1 hour ago • 2 Carers Acknowledged</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="p-4 bg-slate-50/50 text-center border-t border-slate-50">
              <button className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">View Older Updates</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarerDashboard;