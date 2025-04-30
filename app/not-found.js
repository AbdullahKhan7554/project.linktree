"use client"
import Link from "next/link";
import { motion } from "framer-motion";

export default function custom404() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M5 13l4-3 3 2 4-4 3 3v8H5v-6z"
            />
          </svg>
        </div>

        <h1 className="text-6xl font-serif text-white font-bold">404</h1>
        <p className="text-2xl mt-4 text-white font-light">
          The royal page you seek is missing.
        </p>
        <p className="mt-2 text-white/80">
          It might have been moved to another kingdom.
        </p>

        <Link
  href="/"
  className="inline-block mt-6 px-6 py-2 rounded-full bg-amber-100 text-purple-950 font-semibold hover:bg-yellow-300 transition"
>
  Return to Throne
</Link>

      </motion.div>
    </div>
  );
}
