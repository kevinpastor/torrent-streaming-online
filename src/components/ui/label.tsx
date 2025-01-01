"use client";

import { Root } from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithRef, type ReactNode } from "react";

import { cn } from "~/lib/utils";

const labelVariants = cva(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

export const Label = ({ ref, className, ...props }: ComponentPropsWithRef<typeof Root> & VariantProps<typeof labelVariants>): ReactNode => (
    <Root
        ref={ref}
        className={cn(labelVariants(), className)}
        {...props}
    />
);
