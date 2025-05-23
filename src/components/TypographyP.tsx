import { type PropsWithChildren, type ReactNode } from "react";

export const TypographyP = ({ children }: PropsWithChildren): ReactNode => (
    <p className="leading-7 not-first:mt-[0.5em]">
        {children}
    </p>
);
