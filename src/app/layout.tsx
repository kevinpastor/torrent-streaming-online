import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { TriangleAlertIcon } from "lucide-react";
import { PropsWithChildren, ReactNode } from "react";

import { ExternalLink } from "~/components/ExternalLink";
import { TypographyH1 } from "~/components/TypographyH1";
import { TypographyInlineCode } from "~/components/TypographyInlineCode";
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";

import "./global.css"

const RootLayout = ({ children }: Readonly<PropsWithChildren>): ReactNode => (
    <html
        lang="en"
        className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
        <body>
            <div className="max-w-5xl mx-auto p-4 flex flex-col gap-4">
                <TypographyH1>
                    Torrent Streaming Online
                </TypographyH1>
                <Alert>
                    <TriangleAlertIcon className="h-4 w-4" />
                    <AlertTitle>
                        Heads up!
                    </AlertTitle>
                    <AlertDescription>
                        Does not support UDP/TCP peers.
                        Waiting for a{" "}
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
                {children}
            </div>
        </body>
    </html>
)

export default RootLayout;
