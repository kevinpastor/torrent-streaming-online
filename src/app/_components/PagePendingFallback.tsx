import { ReactNode } from "react"

import { Input } from '~/components/ui/input';

import { TorrentInitialFallback } from "./TorrentInitialFallback";

export const PagePendingFallback = (): ReactNode => (
    <div className="grid grid-cols-3 gap-4">
        <Input
            type="text"
            placeholder="Magnet"
            disabled
            className="col-span-2"
        />
        <TorrentInitialFallback />
    </div>
)
