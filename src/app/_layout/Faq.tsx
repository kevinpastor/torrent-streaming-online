import { ReactNode } from "react";
import { TypographyH2 } from "~/components/TypographyH2";
import { TypographyH3 } from "~/components/TypographyH3";
import { TypographyP } from "~/components/TypographyP";

export const Faq = (): ReactNode => (
    <div>
        <TypographyH2>
            FAQ
        </TypographyH2>
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
    </div>
);
