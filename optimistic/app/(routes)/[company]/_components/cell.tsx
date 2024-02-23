import { cn } from "@/app/_utils/cn";
import { ColumnPinningPosition } from "@tanstack/react-table";
import { ComponentProps, PropsWithChildren, forwardRef } from "react";

type Props = ComponentProps<"div"> & {
  pinned?: ColumnPinningPosition;
  start?: number;
  width?: number;
  padding?: boolean;
};

export const Cell = forwardRef<HTMLDivElement, PropsWithChildren<Props>>(({ children, width, padding, className, pinned, start, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-full items-center bg-white whitespace-nowrap overflow-hidden text-ellipsis cursor-default text-sm text-gray-600 border-r border-gray-300 last:border-r-0 focus-within:ring-2 focus-within:ring-gray-600 focus-within:!border-transparent hover:bg-gray-200 focus-within:bg-gray-200 focus-within:z-10 focus-within:rounded-[1px] focus-within:text-gray-800 focus-within:font-medium focus-within:cursor-auto outline-none",
        { "px-3": padding ?? true, "sticky z-10": pinned },
        className
      )}
      style={{ width: `${width || 300}px`, [String(pinned)]: `${start}px` }}
      {...props}
    >
      {children}
    </div>
  );
});

Cell.displayName = "Cell";
