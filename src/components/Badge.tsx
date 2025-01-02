import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const Badge = ({ className, ...props }: ComponentPropsWithRef<"div">): ReactNode => (
    <div
        className={classNames(
            "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            className
        )}
        {...props}
    />
);

