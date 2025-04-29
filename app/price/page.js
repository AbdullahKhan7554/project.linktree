import React from "react";

export default function PricingPage() {
  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "1 Linktree page",
        "Unlimited links",
        "Basic themes",
        "Analytics (limited)",
      ],
      cta: "Get Started",
      highlight: false,
    },
    {
      name: "Pro",
      price: "9",
      features: [
        "Everything in Free",
        "Custom domains",
        "Advanced analytics",
        "Premium themes",
        "Email support",
      ],
      cta: "Upgrade Now",
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0e9eb] via-[#3E454B] to-[#ece5e7]py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-black mb-4">Pricing</h1>
        <p className="text-black mb-12 text-lg">
          Choose the plan that fits your growth stage.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl border ${
                plan.highlight
                  ? "border-gray-600 bg-white shadow-xl scale-105"
                  : "border-gray-200 bg-white shadow"
              } p-8 transition-all duration-300`}
            >
              <h2
                className={`text-2xl font-bold ${
                  plan.highlight ? "text-black" : "text-gray-800"
                }`}
              >
                {plan.name}
              </h2>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span className="text-gray-500"> /month</span>
              </div>

              <ul className="text-left space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <span className="text-black font-bold mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold ${
                  plan.highlight
                    ? "bg-slate-800 text-white hover:bg-gray-700 cursor-pointer"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
                } transition duration-300`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
