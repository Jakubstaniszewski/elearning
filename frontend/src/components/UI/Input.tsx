"use client";
import * as React from "react";
import { cn } from "../../utils/cn"; // Adjust the import path as necessary
import { useMotionTemplate, useMotionValue, motion } from "motion/react";
import { isMobile } from "react-device-detect";


export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return isMobile ? (
  <div className="group/input rounded-lg p-[2px] transition duration-300">
    <input
      type={type}
      className={cn(
        "block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-900 dark:text-white appearance-none",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
) : (
  <motion.div
    style={{
      background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          #3b82f6,
          transparent 80%
        )
      `,
    }}
    onMouseMove={handleMouseMove}
    onMouseEnter={() => setVisible(true)}
    onMouseLeave={() => setVisible(false)}
    className="group/input rounded-lg p-[2px] transition duration-300"
  >
    <input
      type={type}
      className={cn(
        "block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-900 dark:text-white appearance-none",
        className
      )}
      ref={ref}
      {...props}
    />
  </motion.div>
);

  },
);
Input.displayName = "Input";

export { Input };
