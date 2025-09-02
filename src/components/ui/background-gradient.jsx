"use client";

import { cn } from "@/lib/utils";

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
}) {
  return (
    <div className={cn("relative p-[2px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 overflow-hidden rounded-xl z-[1]",
          "bg-[linear-gradient(to_right,transparent,transparent,transparent,#000,transparent,transparent)]",
          "group-hover:opacity-100 opacity-0 transition-opacity duration-500"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-xl",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_0_0,#ffb86c,transparent),radial-gradient(circle_farthest-side_at_100%_0,#b66dff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#764ba2,transparent)]",
          animate && "animate-[spin_6s_linear_infinite]"
        )}
        style={{
          backgroundSize: "200% 200%",
          opacity: 0.5,
        }}
      />
      <div className={cn("relative z-10 h-full", className)}>{children}</div>
    </div>
  );
}
