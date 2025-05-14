import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const Button = ({ className, type = "button", ...props }: ComponentPropsWithRef<"button">): ReactNode => (
    <button
        type={type}
        className={classNames(
            "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2",
            className
        )}
        {...props}
    />
);
