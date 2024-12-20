import { ReactNode, Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary";
import { Torrent as ITorrent } from "webtorrent"

import { Torrent } from "./Torrent/Torrent";
import { TorrentInitial } from "./TorrentInitial";
import { TorrentLoading } from "./TorrentLoading";
import { TorrentError } from "./TorrentError";

interface Props {
    torrentPromise?: Promise<ITorrent>
}

export const TorrentWithFallback = ({ torrentPromise }: Props): ReactNode => {
    if (torrentPromise === undefined) {
        return (
            <TorrentInitial />
        );
    }

    return (
        <ErrorBoundary fallback={<TorrentError />}>
            <Suspense fallback={<TorrentLoading />}>
                <Torrent torrentPromise={torrentPromise} />
            </Suspense>
        </ErrorBoundary>
    );
};
