import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  UserPlus, 
  MapPin, 
  Activity, 
  Clock, 
  ChevronRight,
  AlertCircle,
  Stethoscope,
  ArrowUpDown,
  Download
} from 'lucide-react';

const ResidentDirectory = () => {
  const [activeTab, setActiveTab] = useState('All Residents');

  const residents = [
    { id: 'RES001', name: 'Arthur Morgan', age: 78, room: '204-A', level: 'High Care', status: 'Stable', lastCheck: '12 mins ago', vitals: '120/80', mood: 'Happy' },
    { id: 'RES002', name: 'Martha Stewart', age: 82, room: '102-B', level: 'Medium', status: 'Observation', lastCheck: '45 mins ago', vitals: '135/90', mood: 'Quiet' },
    { id: 'RES003', name: 'John Marston', age: 74, room: '205-A', level: 'Low Care', status: 'Stable', lastCheck: '2 hours ago', vitals: '118/75', mood: 'Active' },
    { id: 'RES004', name: 'Alice Cooper', age: 85, room: '110-C', level: 'High Care', status: 'Critical', lastCheck: '5 mins ago', vitals: '145/95', mood: 'Distressed' },
    { id: 'RES005', name: 'Robert De Niro', age: 80, room: '201-B', level: 'Medium', status: 'Stable', lastCheck: '1 hour ago', vitals: '122/82', mood: 'Sleeping' },
  ];

  const getStatusColor = (status:string) => {
    switch (status) {
      case 'Stable': return 'bg-green-100 text-green-700 border-green-200';
      case 'Observation': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Critical': return 'bg-red-100 text-red-700 border-red-200';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getLevelColor = (level:string) => {
    switch (level) {
      case 'High Care': return 'text-purple-600 bg-purple-50';
      case 'Medium': return 'text-blue-600 bg-blue-50';
      case 'Low Care': return 'text-slate-600 bg-slate-100';
      default: return 'text-slate-600 bg-slate-100';
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Resident Directory</h1>
          <p className="text-slate-500 text-sm mt-1">Manage and monitor resident health and care plans.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <Download className="w-4 h-4 mr-2" /> Export
          </button>
          <button className="flex items-center px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            <UserPlus className="w-4 h-4 mr-2" /> Add Resident
          </button>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        
        {/* Table Filters & Search */}
        <div className="p-5 border-b border-slate-50">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Tabs like Keka Dashboard */}
            <div className="flex space-x-1 bg-slate-50 p-1 rounded-xl">
              {['All Residents', 'My Assigned', 'High Risk', 'Wing A'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTab === tab 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search resident or room..." 
                  className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 w-64 transition-all"
                />
              </div>
              <button className="p-2 bg-slate-50 border border-slate-100 rounded-xl text-slate-500 hover:bg-slate-100 transition-all">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Table Header */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-50">
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  <div className="flex items-center cursor-pointer hover:text-slate-600">
                    Resident <ArrowUpDown className="w-3 h-3 ml-1" />
                  </div>
                </th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Room</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Care Level</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Last Check</th>
                <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {residents.map((resident) => (
                <tr key={resident.id} className="hover:bg-blue-50/20 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs border-2 border-white shadow-sm">
                        {resident.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{resident.name}</p>
                        <p className="text-[11px] text-slate-500 font-medium">{resident.age} yrs • {resident.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm font-semibold text-slate-700">
                      <MapPin className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                      {resident.room}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${getLevelColor(resident.level)}`}>
                      {resident.level}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`inline-flex items-center px-2.5 py-1 rounded-lg border text-[11px] font-bold ${getStatusColor(resident.status)}`}>
                      <Activity className="w-3 h-3 mr-1.5" />
                      {resident.status}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-xs font-medium text-slate-500">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-slate-300" />
                      {resident.lastCheck}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Add Vitals">
                        <Stethoscope className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination inspired by Keka footer */}
        <div className="px-6 py-4 bg-slate-50/50 flex items-center justify-between border-t border-slate-50">
          <p className="text-xs font-medium text-slate-500">Showing 5 of 42 residents</p>
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* Quick Summary Floating Cards (Optional Keka Element) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-start space-x-4">
          <div className="p-3 bg-red-50 rounded-xl">
            <AlertCircle className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <p className="text-xl font-bold text-slate-800">02</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Immediate Attention</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-start space-x-4">
          <div className="p-3 bg-blue-50 rounded-xl">
            <Stethoscope className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-xl font-bold text-slate-800">14</p>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending Vital Checks</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center justify-between group cursor-pointer hover:border-blue-200">
          <div>
            <p className="text-sm font-bold text-slate-800">View All Care Plans</p>
            <p className="text-xs text-slate-400">Review weekly updates</p>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default ResidentDirectory;