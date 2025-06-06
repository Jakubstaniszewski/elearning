import { LabelHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export const Label = ({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) => {
  return <label className={cn('text-sm font-medium text-neutral-700 dark:text-neutral-300', className)} {...props} />;
};
