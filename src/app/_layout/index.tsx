import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// eslint-disable-next-line import/no-unresolved
import { GeistMono } from "geist/font/mono";
// eslint-disable-next-line import/no-unresolved
import { GeistSans } from "geist/font/sans";
import { type PropsWithChildren, type ReactNode } from "react";

import { TooltipProvider } from "~/components/Tooltip";

import { CompatibilityAlert } from "./CompabilityAlert";
import { TermsOfService } from "./TermsOfService";
import { Title } from "./Title";

import "./global.css";

export const Layout = ({ children }: PropsWithChildren): ReactNode => (
    <html
        lang="en"
        className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
        <body className="font-sans antialiased bg-background text-foreground">
            {/* A wrapping container is necessary in order to get proper scroll lock from Radix. */}
            <div className="max-w-5xl mx-auto p-4 flex flex-col gap-4">
                <TooltipProvider delayDuration={0}>
                    <Title />
                    <CompatibilityAlert />
                    {children}
                    <TermsOfService />
                    <Analytics />
                    <SpeedInsights />
                </TooltipProvider>
            </div>
        </body>
    </html>
);
