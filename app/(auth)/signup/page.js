'use client';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-xl p-8 sm:p-12 w-full max-w-md animate-fade-in">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Create Your Account</h2>
        <p className="text-center text-gray-300 mb-6">Join us and start your journey</p>
        <form className="space-y-5">
          <div>
            <div className="block mb-1 text-gray-200 font-medium" >Full Name </div>
            <input id="name" type="text"  placeholder="AbdullahKhan" className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300" required
            />
          </div>

          <div>
            <div className="block mb-1 text-gray-200 font-medium" > Email Address </div> 
            <input  id="email"  type="email"   placeholder="you@example.com"  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"required/>
          </div>

          <div>
            <div className="block mb-1 text-gray-200 font-medium" >Password </div>
            <input id="password" type="password" placeholder="••••••••"  className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"required/>
          </div>

          <button type="submit" className="w-full bg-gray-100 text-gray-900 font-semibold py-2 rounded-md hover:bg-white transition transform hover:scale-105" > Sign Up </button>
        </form>

        <p className="text-gray-400 text-sm mt-6 text-center"> Already have an account?{' '}<a href="/login" className="underline text-white hover:text-gray-200">Log in here </a></p>
      </div>
    </div>
  );
}

