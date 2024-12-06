import { PropsWithChildren, ReactNode } from "react";

import "./global.css"

const RootLayout = ({ children }: Readonly<PropsWithChildren>): ReactNode => (
    <html lang="en">
        <body>
            {children}
        </body>
    </html>
)

export default RootLayout;
