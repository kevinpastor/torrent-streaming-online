import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithRef, type ReactNode } from "react";

import { cn } from "~/lib/utils";

const alertVariants = cva(
    "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    {
        variants: {
            variant: {
                default: "bg-background text-foreground",
                destructive:
                    "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    }
);

export const Alert = ({ ref, className, variant, ...props }: ComponentPropsWithRef<"div"> & VariantProps<typeof alertVariants>): ReactNode => (
    <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
    />
);

export const AlertTitle = ({ ref, className, ...props }: ComponentPropsWithRef<"div">): ReactNode => (
    <div
        ref={ref}
        className={cn("mb-1 font-medium leading-none tracking-tight", className)}
        {...props}
    />
);

export const AlertDescription = ({ ref, className, ...props }: ComponentPropsWithRef<"div">): ReactNode => (
    <div
        ref={ref}
        className={cn("text-sm [&_p]:leading-relaxed", className)}
        {...props}
    />
);
