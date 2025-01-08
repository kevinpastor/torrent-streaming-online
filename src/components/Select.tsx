import { Content, Icon, Item, ItemIndicator, ItemText, Portal, Root, ScrollDownButton, ScrollUpButton, Trigger, Value, Viewport } from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { type ComponentPropsWithoutRef, type ComponentPropsWithRef, type PropsWithChildren, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

interface Props extends Omit<ComponentPropsWithoutRef<typeof Root>, "ref" | "className">, Pick<ComponentPropsWithRef<typeof Trigger>, "ref" | "className"> {
}

export const Select = ({ ref, className, children, ...props }: PropsWithChildren<Props>): ReactNode => (
    <Root {...props}>
        <Trigger
            ref={ref}
            className={classNames(
                "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
                className
            )}
        >
            <Value />
            <Icon asChild>
                <ChevronDownIcon className="h-4 w-4 opacity-50" />
            </Icon>
        </Trigger>
        <Portal>
            <Content
                position="popper"
                className="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
            >
                <ScrollUpButton
                    className="flex cursor-default items-center justify-center py-1"
                >
                    <ChevronUpIcon className="h-4 w-4" />
                </ScrollUpButton>
                <Viewport
                    className="p-1 h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                >
                    {children}
                </Viewport>
                <ScrollDownButton
                    className="flex cursor-default items-center justify-center py-1"
                >
                    <ChevronDownIcon className="h-4 w-4" />
                </ScrollDownButton>
            </Content>
        </Portal>
    </Root>
);

export const SelectItem = ({ className, children, ...props }: ComponentPropsWithRef<typeof Item>): ReactNode => (
    <Item
        className={classNames(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
        )}
        {...props}
    >
        <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
            <ItemIndicator>
                <CheckIcon className="h-4 w-4" />
            </ItemIndicator>
        </span>
        <ItemText>{children}</ItemText>
    </Item>
);
