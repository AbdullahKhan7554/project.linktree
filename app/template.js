'use client';

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function PageTemplate({ children }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowContent(true); 
    }, 300); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div
      style={{
        opacity: showContent ? 1 : 0,
        transform: showContent ? 'scale(1)' : 'scale(0.8)',  
        transition: 'opacity 1s ease-in-out, transform 0.7s ease-out', 
      }}
    >
     <Navbar/>
      {children}
    </div>
  );
}
