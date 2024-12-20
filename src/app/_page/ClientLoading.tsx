import { ReactNode } from "react"

import { Form } from "./Client/Form";
import { TorrentInitial } from "./Client/TorrentWithFallback/TorrentInitial";

export const ClientLoading = (): ReactNode => (
    <div className="space-y-4">
        <Form />
        <TorrentInitial />
    </div>
);
