import { type PropsWithChildren, type ReactNode } from "react";

export const TypographyH2 = ({ children }: PropsWithChildren): ReactNode => (
    <h2 className="border-b pb-[0.5em] text-2xl font-semibold tracking-tight">
        {children}
    </h2>
);
