import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const InputDescription = ({ className, ...props }: ComponentPropsWithRef<"p">): ReactNode => (
    <p
        className={classNames(
            "text-[0.8rem] text-muted-foreground ml-1",
            className
        )}
        {...props}
    />
);
