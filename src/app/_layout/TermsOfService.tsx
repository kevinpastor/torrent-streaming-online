import { type ReactNode } from "react";

import { TypographyH2 } from "~/components/TypographyH2";
import { TypographyP } from "~/components/TypographyP";

export const TermsOfService = (): ReactNode => (
    <div>
        <TypographyH2>
            Terms of Service
        </TypographyH2>
        <TypographyP>
            This website is provided "as is", without warranty of any kind. By using this website, you agree to the following:
        </TypographyP>
        <ul className="leading-7 not-first:mt-[0.5em]">
            <li>
                You may only use this website to stream content that is legally distributable.
            </li>
            <li>
                You are solely responsible for any content you access or share while using this website.
            </li>
            <li>
                This website does not host, store, or distribute any torrent content. All activity takes place in your browser.
            </li>
            <li>
                The owner of this website disclaims all liability for how you use this website.
            </li>
        </ul>
        <TypographyP>
            Use at your own risk.
        </TypographyP>
    </div>
);
