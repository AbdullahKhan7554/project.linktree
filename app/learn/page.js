import React from "react";
import {
  LightBulbIcon,
  UserPlusIcon,
  AdjustmentsHorizontalIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

export default function LearnPage() {
  const sections = [
    {
      title: "What is Linktree?",
      content:
        "Linktree is a tool that helps you create a personalized landing page with multiple links. It's perfect for Instagram bios, portfolios, or creator profiles.",
      icon: LightBulbIcon,
    },
    {
      title: "How to Get Started",
      content:
        "Sign up with your email or social account. Then, customize your profile picture, bio, and add your links. You can also reorder them as needed.",
      icon: UserPlusIcon,
    },
    {
      title: "Customizing Your Page",
      content:
        "Use built-in themes or change colors, fonts, and button styles to match your brand. You can even upload a background image or logo.",
      icon: AdjustmentsHorizontalIcon,
    },
    {
      title: "Sharing Your Link",
      content:
        "Copy your unique profile URL and share it on your social media bios, email signature, or business card to drive traffic to all your content.",
      icon: ShareIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0e9eb] via-[#780016] to-[#ece5e7] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-black mb-4">
          Learn
        </h1>
        <p className="text-center text-black mb-12 text-lg">
          Discover how to make the most of your Linktree profile.
        </p>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full shadow-sm">
                <section.icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  {section.title}
                </h2>
                <p className="mt-2 text-gray-600 leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
