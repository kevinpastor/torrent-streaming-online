import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const InputError = ({ className, ...props }: ComponentPropsWithRef<"p">): ReactNode => (
    <p
        className={classNames(
            "text-[0.8rem] font-medium text-destructive ml-1",
            className
        )}
        {...props}
    />
);
