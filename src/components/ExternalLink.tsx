import { type PropsWithChildren, type ReactNode } from "react";

interface Props {
    href: string
}

export const ExternalLink = ({ href, children }: PropsWithChildren<Props>): ReactNode => (
    <a
        className="font-medium text-primary underline underline-offset-4"
        href={href}
        target="_blank"
    >
        {children}
    </a>

);