import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const ExternalLink = ({ className, ...props }: ComponentPropsWithRef<"a">): ReactNode => (
    <a
        target="_blank"
        className={classNames(
            "font-medium text-primary underline underline-offset-4",
            className
        )}
        {...props}
    />
);
