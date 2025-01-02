"use client";

import { Root } from "@radix-ui/react-label";
import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const Label = ({ ref, className, ...props }: ComponentPropsWithRef<typeof Root>): ReactNode => (
    <Root
        ref={ref}
        className={classNames(
            "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
            className
        )}
        {...props}
    />
);