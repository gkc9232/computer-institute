"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  User,
  LogIn,
  BookOpen,
  Home,
  Info,
  Briefcase,
  GraduationCap,
  Search,
  Calendar,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  // Courses dropdown items
  const courses = [
    { name: "BCA", href: "/courses/bca", icon: "💻" },
    { name: "DCA", href: "/courses/dca", icon: "🖥️" },
    { name: "ADCA", href: "/courses/adca", icon: "🎓" },
    { name: "DTP", href: "/courses/dtp", icon: "🎨" },
    { name: "C/C++ Programming", href: "/courses/c-cpp", icon: "⚙️" },
    { name: "Web Development", href: "/courses/web-dev", icon: "🌐" },
    { name: "Digital Marketing", href: "/courses/digital-marketing", icon: "📈" },
    { name: "DevOps Basics", href: "/courses/devops", icon: "🔧" },
    { name: "Database & SQL", href: "/courses/database", icon: "🗄️" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (openDropdown && !e.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openDropdown]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white text-sm relative overflow-hidden">
        <div className="absolute inset-0 animate-shimmer"></div>
        <div className="container mx-auto px-4 py-2 relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-2 md:mb-0">
              <div className="flex items-center space-x-2 hover:text-blue-300 transition transform hover:scale-105">
                <Phone size={14} className="animate-pulse" />
                <a href="tel:+911234567890" className="font-medium">
                  +91 12345 67890
                </a>
              </div>
              <div className="hidden sm:flex items-center space-x-2 hover:text-blue-300 transition transform hover:scale-105">
                <Mail size={14} />
                <a href="mailto:info@indiancomputerinstitute.com">
                  info@indiancomputerinstitute.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2">
                <Calendar size={14} />
                <span>Mon-Sat: 9AM-8PM</span>
              </div>
              <Link
                href="/admission"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 font-bold px-4 py-2 rounded-full text-xs transition-all transform hover:scale-105 hover:shadow-lg hover:animate-pulse-glow flex items-center space-x-2"
              >
                <GraduationCap size={14} />
                <span>Apply Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl py-2"
          : "bg-white py-4 shadow-sm"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition duration-500 shadow-lg group-hover:shadow-xl">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-pulse-glow"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-indigo-900 leading-tight">
                  Indian Computer Institute
                </h1>
                <p className="text-xs text-gray-600 flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Empowering India with Digital Skills
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-48 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </form>

              <NavLink href="/" icon={<Home size={18} />} active={pathname === "/"}>
                Home
              </NavLink>

              {/* Courses Dropdown */}
              <div className="relative dropdown-container">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(openDropdown === "courses" ? null : "courses");
                  }}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl transition-all ${openDropdown === "courses"
                    ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 shadow-inner"
                    : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 hover:shadow-md"
                    }`}
                >
                  <BookOpen size={18} className={openDropdown === "courses" ? "animate-float" : ""} />
                  <span className="font-medium">Courses</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${openDropdown === "courses" ? "rotate-180" : ""}`}
                  />
                </button>

                {openDropdown === "courses" && (
                  <div className="absolute top-full left-0 mt-3 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 animate-fadeIn">
                    <h3 className="text-lg font-bold text-blue-900 mb-3 px-2">Popular Courses</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {courses.map((course) => (
                        <Link
                          key={course.name}
                          href={course.href}
                          className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md transition-all group"
                          onClick={() => setOpenDropdown(null)}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{course.icon}</span>
                            <div>
                              <span className="font-medium text-gray-800 group-hover:text-blue-700">
                                {course.name}
                              </span>
                              <p className="text-xs text-gray-500 mt-0.5">6 Months • Placement Assistance</p>
                            </div>
                          </div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Link
                        href="/courses"
                        className="block text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 font-semibold"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Browse All Courses →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <NavLink href="/about" icon={<Info size={18} />} active={pathname === "/about"}>
                About
              </NavLink>

              <NavLink href="/placement" icon={<Briefcase size={18} />} active={pathname === "/placement"}>
                Placement
              </NavLink>

              <NavLink href="/faculty" active={pathname === "/faculty"}>
                Faculty
              </NavLink>

              {/* Admin/Login Dropdown */}
              <div className="relative dropdown-container ml-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(openDropdown === "admin" ? null : "admin");
                  }}
                  className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all transform hover:scale-105 font-medium"
                >
                  <User size={18} />
                  <span>Login</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${openDropdown === "admin" ? "rotate-180" : ""}`}
                  />
                </button>

                {openDropdown === "admin" && (
                  <div className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 animate-fadeIn">
                    <div className="p-2">
                      <h4 className="text-sm font-semibold text-gray-500 mb-2">Access Portal</h4>
                      <Link
                        href="/admin/login"
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-all mb-2"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <LogIn size={18} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">Admin Login</p>
                          <p className="text-xs text-gray-500">Institute Management</p>
                        </div>
                      </Link>
                      <Link
                        href="/student/login"
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 transition-all"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <GraduationCap size={18} className="text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Student Portal</p>
                          <p className="text-xs text-gray-500">Dashboard & Resources</p>
                        </div>
                      </Link>
                    </div>
                    <div className="border-t pt-3">
                      <Link
                        href="/contact"
                        className="block text-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                        onClick={() => setOpenDropdown(null)}
                      >
                        Need Help? Contact Support
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 hover:shadow-md transition-all"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 mb-6 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 animate-slideDown">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
                </div>
              </form>

              <div className="space-y-1">
                <MobileNavLink href="/" icon={<Home size={20} />} active={pathname === "/"} onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavLink>

                {/* Mobile Courses Section */}
                <div className="pt-2">
                  <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mb-2">
                    <div className="flex items-center space-x-3">
                      <BookOpen size={20} className="text-blue-600" />
                      <span className="font-bold text-blue-900">Courses</span>
                    </div>
                    <ChevronDown size={18} className="text-blue-600" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 pl-6 pr-2">
                    {courses.slice(0, 6).map((course) => (
                      <Link
                        key={course.name}
                        href={course.href}
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-blue-50 transition text-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-2xl mb-2">{course.icon}</span>
                        <span className="text-sm font-medium text-gray-800">{course.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <MobileNavLink href="/about" icon={<Info size={20} />} onClick={() => setIsMenuOpen(false)}>
                  About Institute
                </MobileNavLink>
                <MobileNavLink href="/placement" icon={<Briefcase size={20} />} onClick={() => setIsMenuOpen(false)}>
                  Placements
                </MobileNavLink>
                <MobileNavLink href="/faculty" onClick={() => setIsMenuOpen(false)}>
                  Our Faculty
                </MobileNavLink>
                <MobileNavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </MobileNavLink>

                <div className="pt-4 border-t">
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/admin/login"
                      className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn size={20} />
                      <span className="text-sm font-medium mt-2">Admin</span>
                    </Link>
                    <Link
                      href="/student/login"
                      className="flex flex-col items-center justify-center p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg transition"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <GraduationCap size={20} />
                      <span className="text-sm font-medium mt-2">Student</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

// Desktop NavLink Component
function NavLink({ href, children, icon, active = false }) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 px-5 py-3 rounded-xl transition-all ${active
        ? "bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 font-semibold shadow-inner"
        : "text-gray-700 hover:text-blue-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:shadow-md"
        }`}
    >
      {icon}
      <span className="font-medium">{children}</span>
      {active && (
        <div className="w-2 h-2 bg-blue-500 rounded-full ml-1 animate-pulse"></div>
      )}
    </Link>
  );
}

// Mobile NavLink Component
function MobileNavLink({ href, children, icon, active = false, onClick }) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all ${active
        ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-semibold"
        : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700"
        }`}
      onClick={onClick}
    >
      {icon}
      <span className="font-medium">{children}</span>
      {active && (
        <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      )}
    </Link>
  );
}