import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "~/lib/utils";

export const Skeleton = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactNode => (
    <div
        className={cn("animate-pulse rounded-md bg-primary/10", className)}
        {...props}
    />
);
