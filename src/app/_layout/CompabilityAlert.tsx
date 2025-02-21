import { TriangleAlertIcon } from "lucide-react";
import { type ReactNode } from "react";

import { Alert, AlertDescription, AlertTitle } from "~/components/Alert";
import { ExternalLink } from "~/components/ExternalLink";
import { TypographyInlineCode } from "~/components/TypographyInlineCode";

export const CompatibilityAlert = (): ReactNode => (
    <Alert>
        <TriangleAlertIcon className="size-4" />
        <AlertTitle>
            Limited Support
        </AlertTitle>
        <AlertDescription>
            Does not support UDP/TCP peers, meaning that most torrents will not work. Waiting for a{" "}
            <TypographyInlineCode>
                libtorrent
            </TypographyInlineCode>
            {" "}release with Webtorrent support so that qBittorrent and Transmission can seed via WebRTC. (
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
