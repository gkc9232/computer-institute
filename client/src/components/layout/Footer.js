"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  MessageSquare,
  Send,
  ChevronRight,
  Award,
  Users,
  Briefcase,
  Globe,
  Shield,
  FileText,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  // Quick Links
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Institute", href: "/about" },
    { name: "Placement Records", href: "/placement" },
    { name: "Our Faculty", href: "/faculty" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Gallery", href: "/gallery" },
  ];

  // Courses
  const courses = [
    { name: "BCA (Bachelor of Computer Applications)", href: "/courses/bca" },
    { name: "DCA (Diploma in Computer Applications)", href: "/courses/dca" },
    { name: "ADCA (Advanced Diploma in Computer Applications)", href: "/courses/adca" },
    { name: "Web Development Full Stack", href: "/courses/web-development" },
    { name: "Digital Marketing & SEO", href: "/courses/digital-marketing" },
    { name: "Data Science Fundamentals", href: "/courses/data-science" },
  ];

  // Important Links
  const importantLinks = [
    { name: "Privacy Policy", href: "/privacy-policy", icon: <Shield size={14} /> },
    { name: "Terms & Conditions", href: "/terms", icon: <FileText size={14} /> },
    { name: "Refund Policy", href: "/refund-policy", icon: <FileText size={14} /> },
    { name: "Sitemap", href: "/sitemap", icon: <Globe size={14} /> },
    { name: "Careers", href: "/careers", icon: <Briefcase size={14} /> },
    { name: "Student Portal", href: "/student/login", icon: <Users size={14} /> },
  ];

  // Achievements
  const achievements = [
    { count: "5000+", label: "Students Trained" },
    { count: "95%", label: "Placement Rate" },
    { count: "100+", label: "Companies Tied Up" },
    { count: "15+", label: "Years Experience" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-12 pb-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Institute Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Indian Computer Institute
                </h2>
                <p className="text-sm text-gray-400 mt-1">ISO 9001:2015 Certified</p>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed">
              Empowering India with industry-relevant digital skills since 2008. 
              We provide quality education in computer applications, programming, 
              and digital technologies.
            </p>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition">
                  <div className="text-2xl font-bold text-blue-400">{achievement.count}</div>
                  <div className="text-xs text-gray-400 mt-1">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-800 flex items-center">
              <ChevronRight className="mr-2 text-blue-400" size={20} />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-white hover:translate-x-2 transition-all group"
                  >
                    <ChevronRight size={16} className="mr-2 text-blue-500 opacity-0 group-hover:opacity-100 transition" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-800 flex items-center">
              <ChevronRight className="mr-2 text-blue-400" size={20} />
              Popular Courses
            </h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <Link 
                    href={course.href}
                    className="flex items-center text-gray-400 hover:text-white hover:translate-x-2 transition-all group"
                  >
                    <ChevronRight size={16} className="mr-2 text-green-500 opacity-0 group-hover:opacity-100 transition" />
                    <span className="text-sm">{course.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Newsletter Subscription */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h4 className="font-semibold mb-3 flex items-center">
                <MessageSquare size={18} className="mr-2" />
                Stay Updated
              </h4>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg hover:shadow-lg transition"
                  >
                    <Send size={18} />
                  </button>
                </div>
                {isSubscribed && (
                  <div className="text-green-400 text-sm animate-fadeIn">
                    ✓ Subscribed successfully!
                  </div>
                )}
                <p className="text-xs text-gray-500">
                  Subscribe to get course updates and placement opportunities
                </p>
              </form>
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-800 flex items-center">
              <ChevronRight className="mr-2 text-blue-400" size={20} />
              Contact Us
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Our Location</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Computer Education Hub, Sector 15<br />
                    Noida, Uttar Pradesh 201301<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    <a href="tel:+911234567890" className="hover:text-white transition">
                      +91 12345 67890
                    </a>
                    <br />
                    <a href="tel:+919876543210" className="hover:text-white transition">
                      +91 98765 43210
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    <a href="mailto:info@indiancomputerinstitute.com" className="hover:text-white transition">
                      info@indiancomputerinstitute.com
                    </a>
                    <br />
                    <a href="mailto:admissions@indiancomputerinstitute.com" className="hover:text-white transition">
                      admissions@indiancomputerinstitute.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-yellow-900/30 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-medium">Working Hours</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Social & Important Links */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-center md:text-left">Connect With Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: <Facebook size={20} />, href: "#", color: "bg-blue-600 hover:bg-blue-700", label: "Facebook" },
                  { icon: <Twitter size={20} />, href: "#", color: "bg-sky-500 hover:bg-sky-600", label: "Twitter" },
                  { icon: <Instagram size={20} />, href: "#", color: "bg-pink-600 hover:bg-pink-700", label: "Instagram" },
                  { icon: <Youtube size={20} />, href: "#", color: "bg-red-600 hover:bg-red-700", label: "YouTube" },
                  { icon: <Linkedin size={20} />, href: "#", color: "bg-blue-700 hover:bg-blue-800", label: "LinkedIn" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`${social.color} w-10 h-10 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Important Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {importantLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} Indian Computer Institute. All Rights Reserved.
                <span className="mx-2">•</span>
                ISO 9001:2015 Certified • Registered under Govt. of India
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live Chat Support</span>
              </div>
              <div className="text-xs text-gray-500">
                Made with ❤️ for Digital India
              </div>
            </div>
          </div>
          
          {/* Payment Methods */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-500 text-sm">
                We accept:
                <div className="flex space-x-3 mt-2">
                  {["Visa", "MasterCard", "Razorpay", "UPI", "Net Banking"].map((method, index) => (
                    <div key={index} className="px-3 py-1 bg-gray-800 rounded-md text-xs">
                      {method}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="text-gray-500 text-xs">
                <p>Approved by: AICTE • UGC • Ministry of Education</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}