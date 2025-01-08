import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const Alert = ({ className, ...props }: ComponentPropsWithRef<"div">): ReactNode => (
    <div
        role="alert"
        className={classNames(
            "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7 bg-background text-foreground",
            className
        )}
        {...props}
    />
);

export const AlertTitle = ({ className, ...props }: ComponentPropsWithRef<"div">): ReactNode => (
    <div
        className={classNames("mb-1 font-medium leading-none tracking-tight", className)}
        {...props}
    />
);

export const AlertDescription = ({ className, ...props }: ComponentPropsWithRef<"div">): ReactNode => (
    <div
        className={classNames("text-sm [&_p]:leading-relaxed", className)}
        {...props}
    />
);
