"use client"
import { useRouter } from "next/navigation";
import  Image  from "next/image";

export default function Home() {

  const router = useRouter()
 

  
  const createTree = () => { 
    
    router.push(`/generate?handle=`)
  }
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
    <div className="flex justify-center flex-col ml-[10vw] gap-1">
      <p className="text-[rgb(210_232_35)] font-bold text-7xl">Everything you </p>
      <p className="text-[rgb(210_232_35)] font-bold text-7xl">are. In one,</p>
      <p className="text-[rgb(210_232_35)] font-bold text-7xl">simple link in bio.</p>
      <p className="text-[rgb(210_232_35)] text-xl my-4">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      <div className="input flex gap-2">
     
        <button onClick={()=> createTree()} className="bg-[#e9c0e9] rounded-full px-4 py-4 font-semibold cursor-pointer">Craete your Linktree</button>
      </div>
    </div>
    <div className="flex items-center justify-center flex-col mr-[1vw]">
      <img src="/sss.jpg.png" alt="homepage image" />

    </div>
      </section>
     
     
    </main>
  );
}