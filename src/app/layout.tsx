import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { PropsWithChildren, ReactNode } from "react";

import { Layout } from "./_layout";

import "./global.css";

const RootLayout = ({ children }: Readonly<PropsWithChildren>): ReactNode => (
    <html
        lang="en"
        className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
        <body>
            <Layout>
                {children}
            </Layout>
        </body>
    </html>
);

export default RootLayout;
