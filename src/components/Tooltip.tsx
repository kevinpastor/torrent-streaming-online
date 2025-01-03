"use client";

import { Content, Portal, Provider, Root, Trigger } from "@radix-ui/react-tooltip";
import { type PropsWithChildren, type ReactNode } from "react";

export const TooltipProvider = Provider;

interface Props {
    content: ReactNode;
}

export const Tooltip = ({ content, children }: PropsWithChildren<Props>): ReactNode => (
    <Root>
        <Trigger asChild>
            {children}
        </Trigger>
        <Portal>
            <Content
                sideOffset={4}
                className="z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            >
                {content}
            </Content>
        </Portal>
    </Root >
);
