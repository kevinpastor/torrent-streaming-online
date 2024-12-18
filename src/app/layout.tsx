import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { TriangleAlertIcon } from "lucide-react";
import { PropsWithChildren, ReactNode } from "react";

import { ExternalLink } from "~/components/ExternalLink";
import { TypographyInlineCode } from "~/components/TypographyInlineCode";
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";

import "./global.css"
import { TypographyH2 } from "~/components/TypographyH2";
import { TypographyH3 } from "~/components/TypographyH3";
import { TypographyP } from "~/components/TypographyP";

const RootLayout = ({ children }: Readonly<PropsWithChildren>): ReactNode => (
    <html
        lang="en"
        className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
        <body>
            <div className="max-w-5xl mx-auto p-4 flex flex-col gap-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-foreground">
                    Torrent Streaming Online
                </h1>
                {/* <div className="flex items-center gap-2">
                    <svg
                        className="w-16 h-w-16 fill-amber-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                    >
                        <path
                            d="m390-80-68-120H190l-90-160 68-120-68-120 90-160h132l68-120h180l68 120h132l90 160-68 120 68 120-90 160H638L570-80H390Zm248-440h86l44-80-44-80h-86l-45 80 45 80ZM438-400h84l45-80-45-80h-84l-45 80 45 80Zm0-240h84l46-81-45-79h-86l-45 79 46 81ZM237-520h85l45-80-45-80h-85l-45 80 45 80Zm0 240h85l45-80-45-80h-86l-44 80 45 80Zm200 120h86l45-79-46-81h-84l-46 81 45 79Zm201-120h85l45-80-45-80h-85l-45 80 45 80Z"
                        />
                    </svg>

                    
                    <div>
                        <TypographyH1>
                            HivesTube
                        </TypographyH1>
                        <div className="text-xl text-amber-200/50">
                            Torrent Streaming Online
                        </div>
                    </div>
                </div> */}
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
                {children}
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
            </div>
        </body>
    </html>
)

export default RootLayout;
