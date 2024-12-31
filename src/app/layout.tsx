import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// eslint-disable-next-line import/no-unresolved
import { GeistMono } from "geist/font/mono";
// eslint-disable-next-line import/no-unresolved
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { type PropsWithChildren, type ReactNode } from "react";

import { Layout } from "./_layout";

import "./global.css";

export const metadata: Metadata = {
    title: "Torrent Streaming Online",
    description: "Stream torrents on the web."
};

const RootLayout = ({ children }: PropsWithChildren): ReactNode => (
    <html
        lang="en"
        className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
        <body>
            <Layout>
                {children}
            </Layout>
            <Analytics />
            <SpeedInsights />
        </body>
    </html>
);

export default RootLayout;
