import { PropsWithChildren, ReactNode } from "react"

export const TypographyInlineCode = ({ children }: PropsWithChildren): ReactNode => (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
        {children}
    </code>
);
