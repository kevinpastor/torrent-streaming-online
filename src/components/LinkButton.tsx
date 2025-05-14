import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const LinkButton = ({ className, type = "button", ...props }: ComponentPropsWithRef<"button">): ReactNode => (
    <button
        type={type}
        className={classNames(
            "text-primary underline cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
            className
        )}
        {...props}
    />
);
