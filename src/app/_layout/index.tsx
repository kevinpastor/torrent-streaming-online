import { type PropsWithChildren, type ReactNode } from "react";

import { Accordion } from "~/components/ui/accordion";

import { CompatibilityAlert } from "./CompabilityAlert";
// import { Faq } from "./Faq";
import { TermsOfService } from "./TermsOfService";
import { Title } from "./Title";

export const Layout = ({ children }: PropsWithChildren): ReactNode => (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
        <Title />
        <CompatibilityAlert />
        {children}
        <Accordion type="single" collapsible>
            {/* <Faq /> */}
            <TermsOfService />
        </Accordion>
    </div>
);
