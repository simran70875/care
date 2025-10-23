import {
    Edit,
    User,
    Clipboard,
    Pill,
    Users,
    Clock,
    BookOpen,
    FileText,
    Printer,
} from "lucide-react";
import React from "react";

// =================================================================
// 1. TYPE DEFINITIONS & DUMMY DATA
// =================================================================

interface ClientDetails {
    title: string;
    fullName: string;
    dob: string;
    age: number;
    contactArea: string;
    address: string;
    phone: string;
    nextReview: string;
    preferredCarers: { name: string, rank: number }[];
    adminComments: string;
}

interface ActiveEvent {
    time: string;
    date: string;
    staff: string;
    clockIn: string;
    clockOut: string;
    duration: string;
    status: "Active" | "Complete" | "Cancelled";
}

const clientData: ClientDetails = {
    title: "Mr",
    fullName: "Charles 'O CONNOR",
    dob: "03/03/1948",
    age: 77,
    contactArea: "Wythenshawe",
    address: "80, Crossacres Lane, Wythenshawe, M22 5BY",
    phone: "07703816503",
    nextReview: "16 Aug 2025",
    preferredCarers: [
        { name: "Sana Akram", rank: 5.0 },
        { name: "Eva Karkeo", rank: 5.0 },
        { name: "Bhushan Mehra", rank: 5.0 },
        { name: "Samuell Griffin", rank: 4.8 },
        { name: "Tracy Ellen", rank: 4.6 },
    ],
    adminComments: "Charles has been assessed as lacking capacity to consent to care and support services. Staff must always respect his right to change his mind or refuse care. Medication records updated; ensure staff are fully briefed and trained with the new routine.",
};

const activeEvents: ActiveEvent[] = [
    { time: "18:00", date: "22-10-2025", staff: "Bhushan Mehra", clockIn: "18:00:23", clockOut: "18:30:11", duration: "30 min", status: "Complete" },
    { time: "15:00", date: "22-10-2025", staff: "Eva Karkeo", clockIn: "15:00:23", clockOut: "15:30:11", duration: "30 min", status: "Complete" },
    { time: "08:00", date: "22-10-2025", staff: "Samuell Griffin", clockIn: "08:00:23", clockOut: "08:30:11", duration: "30 min", status: "Complete" },
];

// Dummy data for the daily schedule (quick view grid)
const scheduleDays = ["22-10-2025", "23-10-2025", "24-10-2025", "25-10-2025", "26-10-2025", "27-10-2025", "28-10-2025"];
const scheduleItems = [
    { time: "Morning", text: "Breakfast & Meds", color: "bg-green-100", textColor: "text-green-800" },
    { time: "Lunch", text: "Prepare Lunch", color: "bg-blue-100", textColor: "text-blue-800" },
    { time: "Afternoon", text: "Activity/Walk", color: "bg-yellow-100", textColor: "text-yellow-800" },
    { time: "Dinner", text: "Dinner & Meds", color: "bg-green-100", textColor: "text-green-800" },
    { time: "Overnight", text: "Tuck In", color: "bg-blue-100", textColor: "text-blue-800" },
];

// =================================================================
// 2. HELPER COMPONENTS
// =================================================================

const SectionHeader: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
    <div className="flex justify-between items-center pb-2 mb-3 border-b border-blue-200">
        <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
        {children}
    </div>
);

const InfoBox: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 h-full">
        <p className="text-xs font-semibold text-gray-500 mb-1 uppercase">{title}</p>
        <div className="text-sm text-gray-700">{children}</div>
    </div>
);

// =================================================================
// 3. MAIN COMPONENT
// =================================================================

export default function ClientSummaryProfile() {
    return (
        <div>
            <div className="rounded-xl overflow-hidden">
                
                {/* Top Banner and Profile Header */}
                <div className="bg-blue-700 h-24 relative">
                    <div className="absolute left-6 bottom-[-50px] flex items-end">
                        <div className="w-28 h-28 bg-gray-200 rounded-full border-4 border-white flex items-center justify-center text-gray-500">
                            <User size={60} />
                        </div>
                        <h2 className="ml-4 text-3xl font-bold text-gray-800">
                            {clientData.fullName}
                        </h2>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                        <button className="text-white hover:text-gray-200 bg-blue-600 p-2 rounded-full shadow-md" title="Edit Profile"><Edit size={18} /></button>
                        <button className="text-white hover:text-gray-200 bg-blue-600 p-2 rounded-full shadow-md" title="Print Profile"><Printer size={18} /></button>
                    </div>
                </div>
                <div className="h-12"></div> {/* Spacer for profile picture */}

                <div className="p-6 pt-0 space-y-6">

                    {/* ROW 1: Details, Contact, Admin Comments */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Personal Details */}
                        <div className="py-4">
                            <SectionHeader title="Personal Details">
                                <button className="text-gray-500 hover:text-blue-600"><Edit size={16} /></button>
                            </SectionHeader>
                            <InfoBox title="Title & Full Name">{clientData.title} {clientData.fullName}</InfoBox>
                            <InfoBox title="D.O.B / Age">{clientData.dob} / {clientData.age} years</InfoBox>
                            <InfoBox title="About Me">Q: Why is supporting me important and how can you help me to achieve it?</InfoBox>
                        </div>
                        
                        {/* Contact */}
                        <div className="py-5">
                            <SectionHeader title="Contact">
                                <button className="text-gray-500 hover:text-blue-600"><Edit size={16} /></button>
                            </SectionHeader>
                            <InfoBox title="Area & Address">{clientData.contactArea} | {clientData.address}</InfoBox>
                            <InfoBox title="Contact (Home / Mobile)">{clientData.phone}</InfoBox>
                            <InfoBox title="GP Practice / Key Worker">Northenden Group Practice | Contact: 0161...</InfoBox>
                        </div>

                        {/* Admin Comments */}
                        <div className="py-5">
                            <SectionHeader title="Admin Comments">
                                <button className="text-gray-500 hover:text-blue-600"><Edit size={16} /></button>
                            </SectionHeader>
                            <div className="p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-200 h-full">
                                <p className="text-sm leading-relaxed">{clientData.adminComments}</p>
                            </div>
                        </div>
                    </div>

                    {/* ROW 2: Reviews, Assessments, Visits, Preferred Carers */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-4 border-t border-gray-200">
                        
                        {/* Reviews */}
                        <div className="col-span-1 py-5">
                            <SectionHeader title="Reviews">
                                <button className="text-gray-500 hover:text-blue-600"><FileText size={16} /></button>
                            </SectionHeader>
                            <InfoBox title="Next Annual Review Date">{clientData.nextReview}</InfoBox>
                            <InfoBox title="Last Review Date">14 Aug 2025</InfoBox>
                        </div>

                        {/* Assessments */}
                        <div className="col-span-1 py-5">
                            <SectionHeader title="Assessments">
                                <button className="text-gray-500 hover:text-blue-600"><Clipboard size={16} /></button>
                            </SectionHeader>
                            <div className="text-sm space-y-2">
                                <div className="flex justify-between border-b py-1"><span>Medication Review:</span><span className="font-medium text-red-600">Not Assessed</span></div>
                                <div className="flex justify-between border-b py-1"><span>Risk Assessment:</span><span className="font-medium text-green-600">Complete</span></div>
                                <div className="flex justify-between border-b py-1"><span>Needs/Outcomes:</span><span className="font-medium text-red-600">Not Assessed</span></div>
                            </div>
                        </div>

                        {/* Recent Visits */}
                        <div className="col-span-1 py-5">
                            <SectionHeader title="Recent Visits">
                                <button className="text-gray-500 hover:text-blue-600"><Clock size={16} /></button>
                            </SectionHeader>
                            <div className="text-sm space-y-2">
                                {activeEvents.slice(0, 3).map((event, index) => (
                                    <div key={index} className="flex justify-between border-b py-1">
                                        <span className="text-xs text-gray-500">{event.date} {event.time}</span>
                                        <span className="font-medium text-xs text-green-600">{event.staff}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Preferred Carers */}
                        <div className="col-span-1 py-5">
                            <SectionHeader title="Preferred Carers">
                                <button className="text-gray-500 hover:text-blue-600"><Users size={16} /></button>
                            </SectionHeader>
                            <div className="text-sm space-y-2">
                                {clientData.preferredCarers.slice(0, 3).map((carer, index) => (
                                    <div key={index} className="flex justify-between border-b py-1">
                                        <span className="font-medium">{carer.name}</span>
                                        <span className="text-yellow-600">{carer.rank} ⭐</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ROW 3: Summary of Active Event and Schedule Quick View */}
                    <div className="pt-4 border-t border-gray-200">
                        <SectionHeader title="Summary of active event">
                            <div className="flex space-x-2">
                                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Schedule Breakdown</button>
                                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Task Log</button>
                            </div>
                        </SectionHeader>

                        {/* Active Event Summary Table */}
                        <div className="overflow-x-auto mb-6">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-blue-50">
                                    <tr>
                                        {["Time", "Date", "Staff", "Clock In", "Clock Out", "Duration", "Status", "View Log"].map(header => (
                                            <th key={header} className="px-3 py-2 text-left text-xs font-semibold text-blue-700 uppercase whitespace-nowrap">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {activeEvents.map(event => (
                                        <tr key={event.time + event.date} className="hover:bg-gray-50">
                                            <td className="px-3 py-2 text-sm font-medium text-gray-800">{event.time}</td>
                                            <td className="px-3 py-2 text-sm text-gray-600">{event.date}</td>
                                            <td className="px-3 py-2 text-sm text-gray-600">{event.staff}</td>
                                            <td className="px-3 py-2 text-sm text-gray-600">{event.clockIn}</td>
                                            <td className="px-3 py-2 text-sm text-gray-600">{event.clockOut}</td>
                                            <td className="px-3 py-2 text-sm text-gray-600">{event.duration}</td>
                                            <td className="px-3 py-2 text-center">
                                                <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium">Complete</span>
                                            </td>
                                            <td className="px-3 py-2 text-center">
                                                <button className="text-blue-600 hover:text-blue-800"><BookOpen size={16} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Client Schedule Quick View */}
                        <SectionHeader title="Charles 'O CONNOR Schedule Quick View" />
                        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium">
                            {scheduleDays.map((date, index) => (
                                <div key={index} className="p-2 bg-blue-600 text-white rounded-t-lg">
                                    {new Date(date).toLocaleDateString('en-GB', { weekday: 'short' })}<br/>
                                    {date.substring(0, 5)}
                                </div>
                            ))}
                            {scheduleDays.map((date, dayIndex) => (
                                <div key={dayIndex} className="p-2 bg-blue-100 text-blue-800 font-semibold">{date}</div>
                            ))}
                            
                            {scheduleItems.flatMap((item, itemIndex) => 
                                scheduleDays.map((date, dayIndex) => (
                                    <div 
                                        key={`${itemIndex}-${dayIndex}`}
                                        className={`p-1 border border-gray-100 text-xs font-medium ${dayIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${item.color} ${item.textColor}`}
                                    >
                                        <div className="font-bold">{item.time}</div>
                                        <div>{item.text}{date}</div>
                                        {/* Medication icon for days with meds */}
                                        {(item.text.includes('Meds') && dayIndex % 3 === 0) && <Pill size={12} className="inline-block text-blue-600 mt-0.5" />}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
}