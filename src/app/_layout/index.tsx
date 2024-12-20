import { PropsWithChildren, ReactNode } from "react";

import { Faq } from "./Faq";
import { Title } from "./Title";
import { CompatibilityAlert } from "./CompabilityAlert";

export const Layout = ({ children }: PropsWithChildren): ReactNode => (
    <div className="max-w-5xl mx-auto p-4 flex flex-col gap-4">
        <Title />
        <CompatibilityAlert />
        {children}
        <Faq />
    </div>
);
