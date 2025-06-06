import { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/cn'; // lub '../utils/cn' jeśli alias nie działa

export const Input = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        'px-3 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-zinc-900 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600',
        className
      )}
      {...props}
    />
  );
};
