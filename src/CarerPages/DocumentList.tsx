import { 
  FileText, 
  Search, 
  Filter, 
  MoreVertical, 
  Download, 
  Eye, 
  History, 
  FilePlus, 
  ChevronRight,
  FolderOpen,
  ShieldCheck,
} from 'lucide-react';

const DocumentListScreen = () => {
  const documents = [
    { 
      id: 'DOC-2024-001', 
      name: 'Advanced Care Directive', 
      resident: 'Arthur Morgan', 
      version: 'v2.1', 
      type: 'Legal', 
      updated: '2 hours ago', 
      status: 'Verified',
      owner: 'Sarah Thompson'
    },
    { 
      id: 'DOC-2024-015', 
      name: 'Dietary Assessment - Q1', 
      resident: 'Martha Stewart', 
      version: 'v1.0', 
      type: 'Clinical', 
      updated: 'Jan 04, 2026', 
      status: 'Pending Review',
      owner: 'James Wilson'
    },
    { 
      id: 'DOC-2024-088', 
      name: 'Consent for Vaccination', 
      resident: 'Alice Cooper', 
      version: 'v3.0', 
      type: 'Consent', 
      updated: 'Dec 28, 2025', 
      status: 'Verified',
      owner: 'Aditya Gupta'
    },
    { 
      id: 'DOC-2024-102', 
      name: 'Physiotherapy Progress Report', 
      resident: 'John Marston', 
      version: 'v1.4', 
      type: 'Therapy', 
      updated: 'Dec 15, 2025', 
      status: 'Archived',
      owner: 'Sarah Thompson'
    }
  ];

  const getStatusStyle = (status:string) => {
    switch (status) {
      case 'Verified': return 'bg-green-50 text-green-700 border-green-100';
      case 'Pending Review': return 'bg-orange-50 text-orange-700 border-orange-100';
      case 'Archived': return 'bg-slate-50 text-slate-500 border-slate-100';
      default: return 'bg-blue-50 text-blue-700 border-blue-100';
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fe] p-6 font-sans text-slate-900">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center text-sm font-bold text-blue-600 mb-1">
            <span>Reports & Care Plans</span>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-slate-400">Documents</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center">
            <FolderOpen className="w-7 h-7 mr-3 text-blue-600" />
            Resident Document Library
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <button className="flex items-center px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
            <History className="w-4 h-4 mr-2" /> Recent Activity
          </button>
          <button className="flex items-center px-4 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
            <FilePlus className="w-4 h-4 mr-2" /> Upload Document
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        
        {/* Sidebar: Folder Categories (3 cols) */}
        <div className="col-span-12 lg:col-span-3 space-y-2">
          <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-2 mb-4">Categories</h3>
          {[
            { name: 'All Documents', count: 124, active: true },
            { name: 'Clinical Assessments', count: 42, active: false },
            { name: 'Legal & DNACPR', count: 12, active: false },
            { name: 'Consent Forms', count: 28, active: false },
            { name: 'Therapy Reports', count: 18, active: false },
            { name: 'Archive', count: 24, active: false },
          ].map((folder) => (
            <button
              key={folder.name}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                folder.active 
                ? 'bg-white text-blue-600 shadow-sm border-l-4 border-blue-600' 
                : 'text-slate-500 hover:bg-white hover:text-slate-700'
              }`}
            >
              <div className="flex items-center">
                <FileText className={`w-4 h-4 mr-3 ${folder.active ? 'text-blue-600' : 'text-slate-400'}`} />
                {folder.name}
              </div>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${folder.active ? 'bg-blue-50' : 'bg-slate-100'}`}>
                {folder.count}
              </span>
            </button>
          ))}
        </div>

        {/* Main List Area (9 cols) */}
        <div className="col-span-12 lg:col-span-9 space-y-4">
          
          {/* Table Search & Filter Bar */}
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by filename, resident or ID..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 border border-slate-100 rounded-xl text-slate-500 hover:bg-slate-50">
                <Filter className="w-5 h-5" />
              </button>
              <div className="h-6 w-[1px] bg-slate-200 mx-1" />
              <button className="text-xs font-bold text-slate-500 px-3 py-2 hover:bg-slate-50 rounded-lg">Sort: Date</button>
            </div>
          </div>

          {/* Document Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-50">
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Document Name</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Resident</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Version</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {documents.map((doc) => (
                  <tr key={doc.id} className="hover:bg-blue-50/20 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-red-50 text-red-500 rounded-lg">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{doc.name}</p>
                          <p className="text-[10px] text-slate-400 font-medium">Updated {doc.updated}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-semibold text-slate-700">{doc.resident}</p>
                      <p className="text-[10px] text-slate-400">{doc.id}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {doc.version}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${getStatusStyle(doc.status)}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-1">
                        <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="View">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all" title="Download">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-slate-400 hover:text-slate-600 rounded-lg">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Footer */}
            <div className="p-4 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
              <p className="text-xs font-medium text-slate-400 italic flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-green-500" />
                All documents are encrypted and CQC-ready.
              </p>
              <div className="flex space-x-2">
                 <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-400">Previous</button>
                 <button className="px-4 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-blue-600">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentListScreen;