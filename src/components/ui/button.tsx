import { Slot } from "@radix-ui/react-slot";
import { type ComponentPropsWithRef, type ReactNode } from "react";

import { cn } from "~/lib/utils";

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
    asChild?: boolean
}

export const Button = ({ ref, className, asChild = false, ...props }: ButtonProps): ReactNode => {
    const Component = asChild ? Slot : "button";

    return (
        <Component
            className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2",
                className
            )}
            ref={ref}
            {...props}
        />
    );
};
