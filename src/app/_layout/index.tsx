import { type PropsWithChildren, type ReactNode } from "react";

import { CompatibilityAlert } from "./CompabilityAlert";
import { Faq } from "./Faq";
import { Title } from "./Title";

export const Layout = ({ children }: PropsWithChildren): ReactNode => (
    <div className="max-w-5xl mx-auto p-4 flex flex-col gap-4">
        <Title />
        <CompatibilityAlert />
        {children}
        <Faq />
    </div>
);
