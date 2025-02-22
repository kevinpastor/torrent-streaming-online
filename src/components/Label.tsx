import { Root } from "@radix-ui/react-label";
import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const Label = ({ className, ...props }: ComponentPropsWithRef<typeof Root>): ReactNode => (
    <Root
        className={classNames(
            "text-sm font-medium leading-none ml-1 peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            className
        )}
        {...props}
    />
);
