
'use client';
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  
  const signup = () => {
    router.push(`/signup`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#70916e] via-[#70916e] to-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Welcome Back!</h2>
        <p className="text-sm text-gray-600 mb-6 text-center">Please login to your account</p>
        
        <form>
          <div className="mb-4">
            <div className="block text-gray-700 font-semibold mb-2">Email</div>
            <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#70916e] focus:outline-none transition"  placeholder="you@example.com" required/>
          </div>

          <div className="mb-6">
            <div className="block text-gray-700 font-semibold mb-2">Password</div>
            <input type="password"id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#70916e] focus:outline-none transition" placeholder="••••••••" required />
          </div>

          <button type="submit"className="w-full bg-[#547446] text-white py-2 rounded-md font-semibold hover:bg-[#547446] transition transform hover:scale-105 cursor-pointer">Login</button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600"> Don’t have an account?{' '}
          <span onClick={signup} className="text-[#547446] font-medium hover:underline cursor-pointer"> Sign up</span>
        </p>
      </div>
    </div>
  );
}

