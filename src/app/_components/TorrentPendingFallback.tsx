import { ReactNode } from "react";

import { LoadingFileSelector } from "./LoadingFileSelector";
import { PlayerPoster } from "./PlayerPoster";

export const TorrentPendingFallback = (): ReactNode => (
    <>
        <LoadingFileSelector />
        <PlayerPoster />
    </>
);
