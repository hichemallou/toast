import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

export const Badge = (props: BadgeProps) => {
  return (
    <div className="group relative grid overflow-hidden rounded-full px-3 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-300">
      <span>
        <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[100%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-10%]" />
      </span>
      <span className="backdrop absolute inset-px rounded-full bg-neutral-50 transition-colors duration-200 dark:bg-neutral-900" />
      <span className="z-10 text-xs font-medium text-neutral-900 dark:text-neutral-400">
        {props.children}
      </span>
    </div>
  );
};
