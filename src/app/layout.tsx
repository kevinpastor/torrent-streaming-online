import { type Metadata } from "next";
import { type PropsWithChildren, type ReactNode } from "react";

import { Layout } from "./_layout";

export const metadata: Metadata = {
    title: "Torrent Streaming Online",
    description: "Stream torrents on the web.",
    other: {
        "google-adsense-account": "ca-pub-3996014859104973"
    }
};

const RootLayout = ({ children }: PropsWithChildren): ReactNode => (
    <Layout>
        {children}
    </Layout>
);

export default RootLayout;
