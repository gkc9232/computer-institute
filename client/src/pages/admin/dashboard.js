"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  Users,
  BookOpen,
  Calendar,
  DollarSign,
  Award,
  TrendingUp,
  Activity,
  Settings,
  LogOut,
  Bell,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  ChevronRight,
  Home,
  UserCog,
  FileText,
  Shield,
  PieChart,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState([]);

  // Mock data
  useEffect(() => {
    setStudents([
      { id: 1, name: "Rahul Sharma", course: "BCA", batch: "2024-25", fees: "Paid", status: "Active" },
      { id: 2, name: "Priya Patel", course: "DCA", batch: "2024-26", fees: "Pending", status: "Active" },
      { id: 3, name: "Amit Kumar", course: "Web Dev", batch: "2024-25", fees: "Paid", status: "Completed" },
      { id: 4, name: "Sneha Gupta", course: "Digital Marketing", batch: "2024-26", fees: "Paid", status: "Active" },
      { id: 5, name: "Rajesh Singh", course: "ADCA", batch: "2023-24", fees: "Overdue", status: "Inactive" },
    ]);
  }, []);

  // Stats data
  const stats = [
    { title: "Total Students", value: "1,254", change: "+12%", icon: <Users size={24} />, color: "bg-blue-500" },
    { title: "Active Courses", value: "18", change: "+2", icon: <BookOpen size={24} />, color: "bg-green-500" },
    { title: "Ongoing Batches", value: "32", change: "+5%", icon: <Calendar size={24} />, color: "bg-purple-500" },
    { title: "Revenue", value: "₹8,42,500", change: "+18%", icon: <DollarSign size={24} />, color: "bg-yellow-500" },
    { title: "Certificates Issued", value: "842", change: "+24%", icon: <Award size={24} />, color: "bg-indigo-500" },
    { title: "Placement Rate", value: "92%", change: "+3%", icon: <TrendingUp size={24} />, color: "bg-pink-500" },
  ];

  const recentActivities = [
    { action: "New admission", user: "Aarav Mehta", time: "10 mins ago", type: "admission" },
    { action: "Fee payment received", user: "Neha Reddy", time: "25 mins ago", type: "payment" },
    { action: "Certificate generated", user: "Karan Malhotra", time: "1 hour ago", type: "certificate" },
    { action: "New batch started", user: "Web Dev - 2024", time: "2 hours ago", type: "batch" },
    { action: "Course updated", user: "Digital Marketing", time: "4 hours ago", type: "course" },
  ];

  const handleLogout = () => {
    router.push("/admin/login");
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "completed": return "bg-blue-100 text-blue-800";
      case "overdue": return "bg-red-100 text-red-800";
      case "inactive": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case "admission": return <Users className="text-blue-500" size={16} />;
      case "payment": return <DollarSign className="text-green-500" size={16} />;
      case "certificate": return <Award className="text-purple-500" size={16} />;
      case "batch": return <Calendar className="text-orange-500" size={16} />;
      case "course": return <BookOpen className="text-indigo-500" size={16} />;
      default: return <Activity className="text-gray-500" size={16} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`bg-gradient-to-b from-blue-900 to-indigo-900 text-white transition-all duration-300 ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Shield size={24} />
            </div>
            {!sidebarCollapsed && (
              <div>
                <h2 className="text-xl font-bold">Institute Admin</h2>
                <p className="text-sm text-blue-200 opacity-75">Management Portal</p>
              </div>
            )}
          </div>

          <nav className="space-y-2">
            {[
              { icon: <Home size={20} />, label: "Dashboard", id: "overview" },
              { icon: <Users size={20} />, label: "Students", id: "students" },
              { icon: <BookOpen size={20} />, label: "Courses", id: "courses" },
              { icon: <Calendar size={20} />, label: "Batches", id: "batches" },
              { icon: <DollarSign size={20} />, label: "Fees", id: "fees" },
              { icon: <Award size={20} />, label: "Certificates", id: "certificates" },
              { icon: <PieChart size={20} />, label: "Analytics", id: "analytics" },
              { icon: <FileText size={20} />, label: "Reports", id: "reports" },
              { icon: <UserCog size={20} />, label: "Faculty", id: "faculty" },
              { icon: <Settings size={20} />, label: "Settings", id: "settings" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full p-3 rounded-xl transition-all ${activeTab === item.id ? 'bg-white/20 backdrop-blur-sm' : 'hover:bg-white/10'}`}
              >
                <div className="flex items-center justify-center w-8">
                  {item.icon}
                </div>
                {!sidebarCollapsed && (
                  <span className="ml-3 font-medium">{item.label}</span>
                )}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-6 left-6 right-6">
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-3 rounded-xl bg-red-500/20 hover:bg-red-500/30 transition"
            >
              <LogOut size={20} />
              {!sidebarCollapsed && <span className="ml-3 font-medium">Logout</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 rounded-lg hover:bg-gray-100 transition"
              >
                {sidebarCollapsed ? <ChevronRight size={20} /> : <ChevronRight size={20} className="rotate-180" />}
              </button>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search students, courses, or batches..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  AS
                </div>
                <div>
                  <p className="font-semibold">Admin User</p>
                  <p className="text-sm text-gray-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="p-6">
          {/* Welcome Banner */}
          <div className="mb-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
                <p className="text-blue-100">Here's what's happening with your institute today.</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={20} />
                <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 ${stat.color} rounded-xl text-white`}>
                    {stat.icon}
                  </div>
                  <div className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Charts & Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Chart 1 */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Course Enrollment Trends</h2>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-lg">Monthly</button>
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg">Quarterly</button>
                  <button className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-lg">Yearly</button>
                </div>
              </div>
              
              {/* Simple Bar Chart */}
              <div className="h-64 flex items-end space-x-4">
                {[65, 40, 80, 60, 90, 70, 85].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="mt-2 text-sm text-gray-600">Day {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition">
                    <div className="flex-shrink-0">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.user}</p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Students Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Recent Students</h2>
                  <p className="text-gray-600">List of recently enrolled students</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <Filter size={16} />
                    <span>Filter</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                    <Download size={16} />
                    <span>Export</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    <Plus size={16} />
                    <span>Add Student</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Batch</th>
                    <th className="px6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees Status</th>
                    <th className="px6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">STU{student.id.toString().padStart(4, '0')}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-3">
                            {student.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-900">{student.name}</div>
                            <div className="text-sm text-gray-500">+91 98765 43210</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.course}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.batch}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(student.fees)}`}>
                          {student.fees}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(student.status)}`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                            <Eye size={16} />
                          </button>
                          <button className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg transition">
                            <Edit size={16} />
                          </button>
                          <button className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Showing <span className="font-medium">5</span> of <span className="font-medium">1,254</span> students
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg">1</button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Today's Revenue</p>
                  <h3 className="text-2xl font-bold mt-2">₹42,850</h3>
                </div>
                <DollarSign size={32} className="opacity-75" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Pending Actions</p>
                  <h3 className="text-2xl font-bold mt-2">12 Tasks</h3>
                </div>
                <AlertCircle size={32} className="opacity-75" />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">System Health</p>
                  <h3 className="text-2xl font-bold mt-2">98% Uptime</h3>
                </div>
                <CheckCircle size={32} className="opacity-75" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}