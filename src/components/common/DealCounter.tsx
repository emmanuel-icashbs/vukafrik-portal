"use client";
import React, { useEffect, useState } from "react";
import { useTimer } from "react-timer-hook";

interface DealCounterProps {
   expiryTimestamp: Date;
}

const DealCounter: React.FC<DealCounterProps> = ({ expiryTimestamp }) => {
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   const { seconds, minutes, hours, days } = useTimer({
      expiryTimestamp,
   });

   if (!mounted) {
      return null;
   }

   return (
      <>
         <li className="list-inline-item days mb-20">
            {days} <span>jours</span>
         </li>
         <li className="list-inline-item hours mb-20">
            {hours} <span>heures</span>
         </li>
         <li className="list-inline-item minutes mb-20">
            {minutes} <span>minutes</span>
         </li>
         <li className="list-inline-item seconds mb-20">
            {seconds} <span>secondes</span>
         </li>
      </>
   );
};

export default DealCounter;
