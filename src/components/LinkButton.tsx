import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const LinkButton = ({ className, ...props }: ComponentPropsWithRef<"button">): ReactNode => (
    <button
        className={classNames(
            "text-primary underline cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...props} 
    />
);
