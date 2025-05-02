// import React from "react";

// export default function DiscoverPage() {
//   const items = [
//     {
//       title: "Top Creators",
//       description: "Explore profiles of trending content creators using Linktree.",
//     },
//     {
//       title: "Featured Pages",
//       description: "Check out beautifully customized Linktree pages curated by our team.",
//     },
//     {
//       title: "Popular Categories",
//       description: "Browse music, fashion, education, business, and more.",
//     },
//     {
//       title: "New & Noteworthy",
//       description: "Discover the freshest creators joining the platform this week.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-16 px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Discover</h1>
//         <p className="text-gray-600 text-lg mb-12">
//           Explore what's trending and get inspired by the best Linktree pages.
//         </p>

//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 text-left"
//             >
//               <h2 className="text-2xl font-semibold text-blue-600 mb-2">
//                 {item.title}
//               </h2>
//               <p className="text-gray-700 leading-relaxed">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function DiscoverPage() {
 
  const items = [
    {
      title: "Top Creators",
      description: "Explore profiles of trending content creators using Linktree.",
    },
    {
      title: "Featured Pages",
      description: "Check out beautifully customized Linktree pages curated by our team.",
    },
    {
      title: "Popular Categories",
      description: "Browse music, fashion, education, business, and more.",
    },
    {
      title: "New & Noteworthy",
      description: "Discover the freshest creators joining the platform this week.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#254f1a] via-blue-50 to-[#254f1a] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Discover</h1>
        <p className="text-gray-600 text-lg mb-12">
          Explore what's trending and get inspired by the best Linktree pages.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 text-left"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

