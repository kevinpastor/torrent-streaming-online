import { Content, Header, Item, Root, Trigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { type ComponentPropsWithRef, type ReactNode } from "react";

import { classNames } from "~/utils/classNames";

export const Accordion = Root;

export const AccordionItem = ({ className, ...props }: ComponentPropsWithRef<typeof Item>): ReactNode => (
    <Item
        className={classNames("border-b", className)}
        {...props}
    />
);

export const AccordionTrigger = ({ className, children, ...props }: ComponentPropsWithRef<typeof Trigger>): ReactNode => (
    <Header className="flex">
        <Trigger
            className={classNames(
                "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </Trigger>
    </Header>
);

export const AccordionContent = ({ className, ...props }: ComponentPropsWithRef<typeof Content>): ReactNode => (
    <Content
        className={classNames(
            "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down mb-4",
            className
        )}
        {...props}
    />
);
