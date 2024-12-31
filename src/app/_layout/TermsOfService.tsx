import { type ReactNode } from "react";

import { TypographyH3 } from "~/components/TypographyH3";
import { TypographyP } from "~/components/TypographyP";
import { AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";

export const TermsOfService = (): ReactNode => (
    <AccordionItem value="terms-of-service">
        <AccordionTrigger className="text-3xl font-semibold">
            Terms of Service
        </AccordionTrigger>
        <AccordionContent>
            <TypographyP>
                These Terms of Service (&quot;Terms&quot;) govern your use of the Torrent Streaming Online website (&quot;the Service&quot;). By accessing or using the Service, you agree to comply with these Terms. If you do not agree, you must not use the Service.
            </TypographyP>
            <TypographyH3>
                1. Acceptance of Terms
            </TypographyH3>
            <TypographyP>
                By using the Service, you confirm that you have read, understood, and accepted these Terms. If you are using the Service on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
            </TypographyP>
            <TypographyH3>
                2. Compliance with Laws
            </TypographyH3>
            <TypographyP>
                You agree to use the Service only for lawful purposes and to comply with all applicable laws and regulations in your jurisdiction. You are solely responsible for ensuring that your use of the Service does not violate any local, national, or international laws.
            </TypographyP>
            <TypographyH3>
                3. Disclaimer of Liability
            </TypographyH3>
            <TypographyP>
                The Service is provided &quot;as-is&quot; and &quot;as available,&quot; without any warranties or guarantees, express or implied. The creators of the Service (&quot;we,&quot; &quot;us&quot;) disclaim all liability for any damages, losses, or legal consequences arising from your use of the Service. Specifically:
            </TypographyP>
            <TypographyP>
                We do not monitor or control the content accessed via the Service.
            </TypographyP>
            <TypographyP>
                We are not responsible for any illegal, infringing, or otherwise unlawful activity conducted by users.
            </TypographyP>
            <TypographyP>
                Your use of the Service is at your own risk.
            </TypographyP>
            <TypographyH3>
                4. User Responsibility
            </TypographyH3>
            <TypographyP>
                You are solely responsible for:
            </TypographyP>
            <TypographyP>
                Ensuring that your actions comply with all applicable laws.
            </TypographyP>
            <TypographyP>
                The content you access, stream, or download via the Service.
            </TypographyP>
            <TypographyP>
                Any consequences resulting from your use of the Service, including any legal or financial repercussions.
            </TypographyP>
            <TypographyH3>
                5. Limitation of Liability
            </TypographyH3>
            <TypographyP>
                To the fullest extent permitted by law, we will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to your use of the Service, even if we have been advised of the possibility of such damages. This includes, but is not limited to, damages for loss of data, profits, or other intangible losses.
            </TypographyP>
            <TypographyH3>
                6. Indemnification
            </TypographyH3>
            <TypographyP>
                You agree to indemnify, defend, and hold harmless the creators of the Service from and against any claims, damages, liabilities, costs, or expenses (including reasonable legal fees) arising from:
            </TypographyP>
            <TypographyP>
                Your use of the Service.
            </TypographyP>
            <TypographyP>
                Your violation of these Terms.
            </TypographyP>
            <TypographyP>
                Your infringement of any third-party rights.
            </TypographyP>
            <TypographyH3>
                7. Modifications to the Service
            </TypographyH3>
            <TypographyP>
                We reserve the right to modify, suspend, or discontinue the Service, temporarily or permanently, at any time without prior notice. We are not liable for any changes, interruptions, or discontinuation of the Service.
            </TypographyP>
            <TypographyH3>
                8. Governing Law
            </TypographyH3>
            <TypographyP>
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these Terms or the use of the Service shall be subject to the exclusive jurisdiction of the courts located in [Your Jurisdiction].
            </TypographyP>
            <TypographyH3>
                9. Severability
            </TypographyH3>
            <TypographyP>
                If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be severed, and the remaining provisions shall remain in full force and effect.
            </TypographyP>
            <TypographyH3>
                10. Contact Information
            </TypographyH3>
            <TypographyP>
                If you have any questions, concerns, or feedback regarding these Terms or the Service, please contact us at [Your Contact Information].
            </TypographyP>
        </AccordionContent>
    </AccordionItem>
);