"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  Shield,
  Key,
  LogIn,
  AlertCircle,
  CheckCircle2,
  Building2,
  UserCog,
  Fingerprint,
} from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showTwoFA, setShowTwoFA] = useState(false);
  const [twoFACode, setTwoFACode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock validation
    if (formData.email === "admin@institute.com" && formData.password === "Admin@123") {
      // Show 2FA for demo
      setShowTwoFA(true);
    } else {
      setError("Invalid credentials. Try: admin@institute.com / Admin@123");
    }
    
    setIsLoading(false);
  };

  const handleTwoFA = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/admin/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-500"></div>
      </div>

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        {/* Floating Security Badge */}
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-xl animate-bounce z-10">
          <Shield size={16} />
          <span className="text-sm font-semibold">ISO 27001 Secured</span>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-gray-200/50">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 p-6 text-white">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Building2 size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Institute Admin</h1>
                <p className="text-blue-200 text-sm">Secure Management Portal</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>System Status: Active</span>
              </div>
            </div>
          </div>

          {/* Two-Factor Authentication Modal */}
          {showTwoFA && (
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
              <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Fingerprint size={32} className="text-blue-600" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">Two-Factor Authentication</h2>
                  <p className="text-gray-600 mt-2">Enter the 6-digit code from your authenticator app</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-center space-x-2">
                    {[...Array(6)].map((_, i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength="1"
                        value={twoFACode[i] || ""}
                        onChange={(e) => {
                          const newCode = twoFACode.split("");
                          newCode[i] = e.target.value;
                          setTwoFACode(newCode.join(""));
                          
                          // Auto-focus next input
                          if (e.target.value && i < 5) {
                            e.target.nextSibling?.focus();
                          }
                        }}
                        className="w-12 h-12 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                      />
                    ))}
                  </div>

                  <div className="flex space-x-3 mt-6">
                    <button
                      onClick={() => setShowTwoFA(false)}
                      className="flex-1 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleTwoFA}
                      disabled={twoFACode.length !== 6 || isLoading}
                      className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Verifying...
                        </span>
                      ) : (
                        "Verify & Login"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl mb-4">
                <UserCog size={32} className="text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Administrator Access</h2>
              <p className="text-gray-600 mt-2">Enter your credentials to access the dashboard</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3 animate-shake">
                <AlertCircle className="text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-700 font-medium">{error}</p>
                  <p className="text-red-600 text-sm mt-1">
                    Demo credentials: admin@institute.com / Admin@123
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail size={16} className="inline mr-2" />
                  Institutional Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail size={20} className="text-gray-400 group-focus-within:text-blue-500" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="admin@institute.com"
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all group-hover:border-blue-400"
                    required
                  />
                  {formData.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <CheckCircle2 size={20} className="text-green-500" />
                    </div>
                  )}
                </div>
              </div>

              {/* Password Field */}
              <div className="relative group">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Lock size={16} className="inline mr-2" />
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Key size={20} className="text-gray-400 group-focus-within:text-blue-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all group-hover:border-blue-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff size={20} className="text-gray-400 hover:text-blue-500" />
                    ) : (
                      <Eye size={20} className="text-gray-400 hover:text-blue-500" />
                    )}
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={formData.rememberMe}
                      onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember this device
                    </label>
                  </div>
                  <a
                    href="/admin/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>

              {/* Security Level Indicator */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Password Strength</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                    {formData.password.length >= 8 ? "Strong" : "Weak"}
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${
                      formData.password.length >= 12
                        ? "bg-green-500"
                        : formData.password.length >= 8
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${Math.min(formData.password.length * 8, 100)}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Must be at least 8 characters with uppercase, lowercase, and numbers
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !formData.email || !formData.password}
                className="w-full py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center space-x-3">
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <LogIn size={20} />
                      <span>Access Dashboard</span>
                    </>
                  )}
                </span>
              </button>
            </form>

            {/* Alternative Login Options */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600 text-sm mb-4">Or sign in with</p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  className="flex items-center justify-center space-x-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
                  onClick={() => {
                    // Simulate SSO login
                    setFormData({
                      email: "admin@institute.com",
                      password: "Admin@123",
                      rememberMe: true,
                    });
                  }}
                >
                  <Shield size={18} className="text-blue-600" />
                  <span className="text-sm font-medium">Single Sign-On</span>
                </button>
                <button
                  className="flex items-center justify-center space-x-2 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
                  onClick={() => router.push("/admin/help")}
                >
                  <Fingerprint size={18} className="text-green-600" />
                  <span className="text-sm font-medium">Biometric Login</span>
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="mt-8 text-center space-y-3">
              <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                <a href="/privacy-policy" className="hover:text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="/terms" className="hover:text-blue-600 hover:underline">
                  Terms of Service
                </a>
                <span>•</span>
                <a href="/security" className="hover:text-blue-600 hover:underline">
                  Security
                </a>
              </div>
              <p className="text-xs text-gray-400">
                Last login attempt: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        </div>

        {/* Demo Notice */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2">
            <AlertCircle size={16} className="text-yellow-600" />
            <p className="text-sm text-yellow-800">
              Demo Mode • Use: <strong>admin@institute.com</strong> / <strong>Admin@123</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}