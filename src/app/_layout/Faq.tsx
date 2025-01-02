import { type ReactNode } from "react";

import { AccordionContent, AccordionItem, AccordionTrigger } from "~/components/Accordion";
import { TypographyH3 } from "~/components/TypographyH3";
import { TypographyP } from "~/components/TypographyP";

export const Faq = (): ReactNode => (
    <AccordionItem value="faq">
        <AccordionTrigger className="text-3xl font-semibold">
            FAQ
        </AccordionTrigger>
        <AccordionContent>
            <TypographyH3>
                Can my IP leak when using a VPN?
            </TypographyH3>
            <TypographyP>
                No.
            </TypographyP>
            <TypographyH3>
                Can any torrent be streamed?
            </TypographyH3>
            <TypographyP>
                No; not at the moment.
            </TypographyP>
        </AccordionContent>
    </AccordionItem>
);
