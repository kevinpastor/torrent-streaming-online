"use client";

import { Content, Group, Icon, Item, ItemIndicator, ItemText, Label, Portal, Root, ScrollDownButton, ScrollUpButton, Separator, Trigger, Value, Viewport } from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { type ComponentPropsWithRef, type ReactNode } from "react";

import { cn } from "~/lib/utils";

export const Select = Root;

export const SelectGroup = Group;

export const SelectValue = Value;

export const SelectTrigger = ({ ref, className, children, ...props }: ComponentPropsWithRef<typeof Trigger>): ReactNode => (
    <Trigger
        ref={ref}
        className={cn(
            "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
            className
        )}
        {...props}
    >
        {children}
        <Icon asChild>
            <ChevronDown className="h-4 w-4 opacity-50" />
        </Icon>
    </Trigger>
);

export const SelectScrollUpButton = ({ ref, className, ...props }: ComponentPropsWithRef<typeof ScrollUpButton>): ReactNode => (
    <ScrollUpButton
        ref={ref}
        className={cn(
            "flex cursor-default items-center justify-center py-1",
            className
        )}
        {...props}
    >
        <ChevronUp className="h-4 w-4" />
    </ScrollUpButton>
);

export const SelectScrollDownButton = ({ ref, className, ...props }: ComponentPropsWithRef<typeof ScrollDownButton>): ReactNode => (
    <ScrollDownButton
        ref={ref}
        className={cn(
            "flex cursor-default items-center justify-center py-1",
            className
        )}
        {...props}
    >
        <ChevronDown className="h-4 w-4" />
    </ScrollDownButton>
);

export const SelectContent = ({ ref, className, children, position = "popper", ...props }: ComponentPropsWithRef<typeof Content>): ReactNode => (
    <Portal>
        <Content
            ref={ref}
            className={cn(
                "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                position === "popper" &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                className
            )}
            position={position}
            {...props}
        >
            <SelectScrollUpButton />
            <Viewport
                className={cn(
                    "p-1",
                    position === "popper" &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                )}
            >
                {children}
            </Viewport>
            <SelectScrollDownButton />
        </Content>
    </Portal>
);

export const SelectLabel = ({ ref, className, ...props }: ComponentPropsWithRef<typeof Label>): ReactNode => (
    <Label
        ref={ref}
        className={cn("px-2 py-1.5 text-sm font-semibold", className)}
        {...props}
    />
);

export const SelectItem = ({ ref, className, children, ...props }: ComponentPropsWithRef<typeof Item>): ReactNode => (
    <Item
        ref={ref}
        className={cn(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        {...props}
    >
        <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
            <ItemIndicator>
                <Check className="h-4 w-4" />
            </ItemIndicator>
        </span>
        <ItemText>{children}</ItemText>
    </Item>
);

export const SelectSeparator = ({ ref, className, ...props }: ComponentPropsWithRef<typeof Separator>): ReactNode => (
    <Separator
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-muted", className)}
        {...props}
    />
);
