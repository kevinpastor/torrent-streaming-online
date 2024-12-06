import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { PropsWithChildren, ReactNode } from "react";

import "./global.css"

const RootLayout = ({ children }: Readonly<PropsWithChildren>): ReactNode => (
    <html lang="en" className={`dark ${GeistSans.variable} ${GeistMono.variable}`}>
        <body>
            <div className="max-w-5xl mx-auto p-4 flex flex-col gap-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Torrent Streaming Online
                </h1>
                {children}
            </div>
        </body>
    </html>
)

export default RootLayout;
