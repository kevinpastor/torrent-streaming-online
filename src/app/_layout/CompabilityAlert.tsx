import { TriangleAlertIcon } from "lucide-react";
import { ReactNode } from "react";
import { ExternalLink } from "~/components/ExternalLink";

import { TypographyInlineCode } from "~/components/TypographyInlineCode";
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";

export const CompatibilityAlert = (): ReactNode => (
    <Alert>
        <TriangleAlertIcon className="h-4 w-4" />
        <AlertTitle>
            Heads up!
        </AlertTitle>
        <AlertDescription>
            Does not support UDP/TCP peers. Waiting for a{" "}
            <TypographyInlineCode>
                libtorrent
            </TypographyInlineCode>
            {" "}release for qBittorrent and Transmission to seed via WebRTC. (
            <ExternalLink href="https://github.com/arvidn/libtorrent/issues/7283">
                1
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://github.com/qbittorrent/qBittorrent/issues/17974#issuecomment-1302616587">
                2
            </ExternalLink>
            ,{" "}
            <ExternalLink href="https://github.com/transmission/transmission/issues/47#issuecomment-1272237178">
                3
            </ExternalLink>
            )
        </AlertDescription>
    </Alert>
);