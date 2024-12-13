import { ReactNode } from "react";

import { InitialFileSelector } from "./InitialFileSelector";
import { PlayerPoster } from "./PlayerPoster";

export const TorrentInitialFallback = (): ReactNode => (
    <>
        <InitialFileSelector />
        <PlayerPoster />
    </>
);
