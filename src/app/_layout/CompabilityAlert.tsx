import { TriangleAlertIcon } from "lucide-react";
import { type ReactNode } from "react";

import { Alert, AlertDescription, AlertTitle } from "~/components/Alert";
import { ExternalLink } from "~/components/ExternalLink";
import { TypographyInlineCode } from "~/components/TypographyInlineCode";
import { TypographyP } from "~/components/TypographyP";

export const CompatibilityAlert = (): ReactNode => (
    <Alert>
        <TriangleAlertIcon className="size-4" />
        <AlertTitle>
            Limited Support
        </AlertTitle>
        <AlertDescription>
            <TypographyP>
                Most torrents will not work because peers cannot be connected to via UDP/TCP.
            </TypographyP>
            <TypographyP>
                Waiting for a
                {" "}
                <TypographyInlineCode>
                    libtorrent
                </TypographyInlineCode>
                {" "}
                release with WebTorrent support so that qBittorrent and Transmission peers can seed via WebRTC.
            </TypographyP>
            <TypographyP>
                Related issues:
                {" "}
                <ExternalLink href="https://github.com/arvidn/libtorrent/issues/7283">
                    arvidn/libtorrent#7283
                </ExternalLink>
                ,
                {" "}
                <ExternalLink href="https://github.com/qbittorrent/qBittorrent/issues/17974#issuecomment-1302616587">
                    qbittorrent/qBittorrent#17974
                </ExternalLink>
                , and
                {" "}
                <ExternalLink href="https://github.com/transmission/transmission/issues/47#issuecomment-1272237178">
                    transmission/transmission#47
                </ExternalLink>
                .
            </TypographyP>
        </AlertDescription>
    </Alert>
);
