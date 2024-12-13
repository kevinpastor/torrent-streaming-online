import { ReactNode, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary";
import { Torrent as ITorrent } from "webtorrent"

import { Torrent } from "./Torrent";
import { TorrentInitialFallback } from "./TorrentInitialFallback";
import { TorrentPendingFallback } from "./TorrentPendingFallback";

interface Props {
    torrentPromise?: Promise<ITorrent>
}

export const TorrentWithFallback = ({ torrentPromise }: Props): ReactNode => {
    if (torrentPromise === undefined) {
        return <TorrentInitialFallback />
    }

    return (
        <ErrorBoundary fallback={<p>An error occured while loading the torrent.</p >}>
            <Suspense fallback={<TorrentPendingFallback />}>
                <Torrent torrentPromise={torrentPromise} />
            </Suspense>
        </ErrorBoundary >
    );
}
