import { PropsWithChildren, ReactNode } from "react"

export const TypographyP = ({ children }: PropsWithChildren): ReactNode => (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
        {children}
    </p>
);
