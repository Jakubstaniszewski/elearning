import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import React from "react";

const button = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-cyan-500 text-white hover:bg-cyan-600",
        outline: "border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// 👇 Typy propsów
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const AceternityButton: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button className={cn(button({ variant, size }), className)} {...props} />
  );
};
