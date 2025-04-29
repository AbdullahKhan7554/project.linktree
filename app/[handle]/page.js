

import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");

  const doc = await collection.findOne({ handle: handle });
  if (!doc) {
    return notFound();
  }

  const items = doc;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#f0e9eb] via-[#502274] to-[#ece5e7]  px-6 justify-center items-center py-10">
      {items && (
        <div className="bg-white shadow-2xl rounded-3xl p-10 flex justify-center flex-col items-center gap-8 w-96" style={{ fontFamily: 'serif' }}>
          <div className="rounded-full overflow-hidden shadow-md border-4 border-white">
            <img
              src={items.pic}
              alt={items.handle}
              className="w-32 h-32 object-cover"
            />
          </div>
          <span className="font-bold text-3xl text-gray-900">
            {items.handle}
          </span>
          {items.desc && (
            <span className="text-center text-lg text-gray-700  italic">
              {items.desc}
            </span>
          )}
          <div className="w-full flex flex-col gap-4 mt-6">
            {items.links.map((linkItem, index) => (
              <Link key={index} href={linkItem.link}>
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-600 text-white py-4 shadow-lg rounded-full flex justify-center items-center font-medium transition duration-300 ease-in-out">
                  {linkItem.linktext}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}