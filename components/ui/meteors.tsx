import React, { useState, useEffect } from 'react';
import { cn } from "@/utils/cn";
import clsx from "clsx";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [documentHeight, setDocumentHeight] = useState(0);

  useEffect(() => {
    // Calculate and update the document height state
    const height = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    setDocumentHeight(height);
  }, []);

  const meteors = new Array(number || 20).fill(true);

  if (documentHeight === 0) return null; // Return null if the document height is not calculated yet (to avoid rendering meteors at the top of the page before the height is calculated
  if (window === undefined) return null; // Return null if window is not defined (to avoid rendering meteors on the server side

  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: `${Math.floor(Math.random() * documentHeight)}px`, // Use document height for vertical placement
            left: `${Math.floor(Math.random() * window.innerWidth)}px`, // Use window's width for horizontal placement
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
