import { PropsWithChildren, ReactNode } from "react";

export const TypographyH2 = ({ children }: PropsWithChildren): ReactNode => (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {children}
    </h2>
);
