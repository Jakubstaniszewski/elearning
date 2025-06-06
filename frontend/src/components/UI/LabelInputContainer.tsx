import { cn } from '../../utils/cn';
import { HTMLAttributes } from 'react';

export const LabelInputContainer = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('flex flex-col space-y-2', className)} {...props} />;
};
