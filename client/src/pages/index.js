"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  Users,
  Award,
  Briefcase,
  Clock,
  Star,
  CheckCircle,
  TrendingUp,
  BookOpen,
  Monitor,
  Code,
  BarChart,
  Globe,
  Shield,
  MessageSquare,
  ChevronRight,
  Target,
  GraduationCap,
  Zap,
  Heart,
} from "lucide-react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [studentsCount, setStudentsCount] = useState(0);
  const [placementRate, setPlacementRate] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);

  const courses = [
    {
      icon: <Code className="text-blue-500" size={32} />,
      title: "BCA",
      description: "Bachelor of Computer Applications",
      duration: "3 Years",
      fee: "₹45,000/year",
      features: ["UGC Recognized", "Placement Assistance", "Industry Projects"],
      popular: true,
    },
    {
      icon: <Monitor className="text-green-500" size={32} />,
      title: "DCA",
      description: "Diploma in Computer Applications",
      duration: "1 Year",
      fee: "₹25,000",
      features: ["Basic to Advanced", "Certification", "Job Ready"],
      popular: true,
    },
    {
      icon: <GraduationCap className="text-purple-500" size={32} />,
      title: "ADCA",
      description: "Advanced Diploma in Computer Applications",
      duration: "18 Months",
      fee: "₹35,000",
      features: ["Advanced Topics", "Dual Certification", "Internship"],
    },
    {
      icon: <Globe className="text-orange-500" size={32} />,
      title: "Web Development",
      description: "Full Stack Development Course",
      duration: "6 Months",
      fee: "₹30,000",
      features: ["MERN Stack", "Live Projects", "Portfolio Building"],
      popular: true,
    },
    {
      icon: <BarChart className="text-pink-500" size={32} />,
      title: "Digital Marketing",
      description: "SEO, Social Media, Google Ads",
      duration: "4 Months",
      fee: "₹20,000",
      features: ["Certification", "Tools Training", "Internship"],
    },
    {
      icon: <Shield className="text-indigo-500" size={32} />,
      title: "Cyber Security",
      description: "Ethical Hacking & Security",
      duration: "5 Months",
      fee: "₹40,000",
      features: ["Practical Labs", "Certification", "Job Placement"],
    },
  ];

  const features = [
    {
      icon: <Users className="text-blue-500" size={24} />,
      title: "Expert Faculty",
      description: "15+ years experienced industry professionals",
    },
    {
      icon: <Briefcase className="text-green-500" size={24} />,
      title: "100% Job Assistance",
      description: "Placement support with 500+ hiring partners",
    },
    {
      icon: <Award className="text-purple-500" size={24} />,
      title: "Govt. Recognized",
      description: "ISO Certified & Govt. Approved Institute",
    },
    {
      icon: <Clock className="text-orange-500" size={24} />,
      title: "Flexible Timing",
      description: "Morning, Evening & Weekend batches available",
    },
    {
      icon: <TrendingUp className="text-pink-500" size={24} />,
      title: "Industry Projects",
      description: "Hands-on training with real-world projects",
    },
    {
      icon: <Star className="text-yellow-500" size={24} />,
      title: "Lifetime Support",
      description: "Free career guidance & course updates",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "BCA Graduate",
      company: "Placed at TCS",
      content: "The practical training helped me crack my first job interview. Faculty is very supportive!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      course: "Web Development",
      company: "Frontend Developer",
      content: "Best institute for learning web development. Got placed within 1 month of completion.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      course: "Digital Marketing",
      company: "Marketing Manager",
      content: "Course content was up-to-date with industry trends. Highly recommended!",
      rating: 4,
    },
  ];

  // Animation for counters
  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      if (studentsCount < 5000) setStudentsCount(prev => Math.min(prev + 100, 5000));
      if (placementRate < 95) setPlacementRate(prev => Math.min(prev + 1, 95));
      if (yearsExperience < 15) setYearsExperience(prev => Math.min(prev + 1, 15));
    }, 30);

    // Testimonial slider
    const sliderInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(sliderInterval);
    };
  }, [studentsCount, placementRate, yearsExperience]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <Star size={16} className="text-yellow-400 mr-2" />
                <span className="text-sm text-white">ISO 9001:2015 Certified Institute</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Launch Your
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Tech Career Today
                </span>
              </h1>
              
              <p className="text-xl text-blue-200 mb-8 leading-relaxed">
                Join India's premier computer institute with <span className="font-semibold text-white">15+ years</span> of excellence in IT education. 
                Learn from industry experts and get <span className="font-semibold text-white">100% placement assistance</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/courses">
                  <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    Explore Courses
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="group flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all">
                    <Play size={20} />
                    Free Demo Class
                  </button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8">
                {[
                  { count: `${studentsCount}+`, label: "Students Trained", icon: <Users size={20} /> },
                  { count: `${placementRate}%`, label: "Placement Rate", icon: <Briefcase size={20} /> },
                  { count: `${yearsExperience}+`, label: "Years Experience", icon: <Award size={20} /> },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.count}</div>
                      <div className="text-sm text-blue-200">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image/Animation */}
            <div className={`relative ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} transition-all duration-1000 delay-300`}>
              <div className="relative w-full h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <GraduationCap size={64} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Admissions Open 2024</h3>
                    <p className="text-blue-200">Limited Seats Available</p>
                    <div className="mt-6">
                      <div className="inline-flex items-center gap-2 text-sm text-yellow-300">
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <Star size={16} fill="currentColor" />
                        <span className="ml-2">4.9/5 (1200+ Reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center animate-float">
                  <div className="text-center">
                    <div className="text-sm font-bold">100%</div>
                    <div className="text-xs">Placement</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center animate-float delay-1000">
                  <div className="text-center">
                    <div className="text-sm font-bold">₹0</div>
                    <div className="text-xs">EMI Option</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ChevronRight className="text-white rotate-90" size={24} />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
              <Target size={16} />
              <span className="font-medium">Popular Courses</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry-Ready <span className="text-blue-600">IT Courses</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from our wide range of computer courses designed by industry experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden ${
                  course.popular ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {course.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center mb-4">
                      {course.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock size={18} />
                        <span>Duration:</span>
                      </div>
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-600">
                        <BookOpen size={18} />
                        <span>Course Fee:</span>
                      </div>
                      <span className="font-bold text-blue-600">{course.fee}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm font-medium text-gray-700 mb-3">Key Features:</div>
                    <div className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle size={16} className="text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={`/courses/${course.title.toLowerCase()}`}>
                    <button className="w-full group/btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                      View Details
                      <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <button className="group inline-flex items-center gap-3 px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all">
                View All Courses
                <ChevronRight className="group-hover:translate-x-2 transition-transform" size={20} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="text-blue-400">Choose</span> Us?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover what makes us the best choice for your IT education journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full mb-4">
              <Heart size={16} fill="currentColor" />
              <span className="font-medium">Student Success Stories</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Students Say</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute top-0 left-0'}`}
                  style={{ display: index === currentSlide ? 'block' : 'none' }}
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.course} • {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-yellow-300">Transform</span> Your Career?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Join thousands of successful students who started their IT journey with us. 
              Your dream career is just one step away!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/admission">
                <button className="group bg-white text-blue-700 px-10 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  Apply Now
                  <Zap className="group-hover:animate-pulse" size={20} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-all flex items-center gap-3">
                  <MessageSquare size={20} />
                  Talk to Counselor
                </button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-2xl font-bold text-white mb-2">Free Demo</div>
                <div className="text-blue-200">Experience teaching quality</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-2xl font-bold text-white mb-2">EMI Options</div>
                <div className="text-blue-200">Easy payment plans available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-2xl font-bold text-white mb-2">Scholarship</div>
                <div className="text-blue-200">Merit-based scholarships</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-600">Trusted by leading companies for placements</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
            {['TCS', 'Infosys', 'Wipro', 'HCL', 'Tech Mahindra', 'Amazon', 'Google', 'Microsoft'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}