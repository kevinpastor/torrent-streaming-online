import { PropsWithChildren, ReactNode } from "react";

export const TypographyH1 = ({ children }: PropsWithChildren): ReactNode => (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-amber-400">
        {children}
    </h1>
);
