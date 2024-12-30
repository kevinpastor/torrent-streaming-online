import { type PropsWithChildren, type ReactNode } from "react";

export const TypographyH3 = ({ children }: PropsWithChildren): ReactNode => (
    <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        {children}
    </h3>
);
