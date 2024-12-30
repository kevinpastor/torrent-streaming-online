import { ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Torrent as ITorrent } from "webtorrent";

import { Player } from "./Player";
import { PlayerInitial } from "./PlayerInitial";
import { PlayerLoading } from "./PlayerLoading";
import { PlayerError } from "./PlayerError";

interface Props {
    torrentPromise?: Promise<ITorrent>
}

export const PlayerWithFallback = ({ torrentPromise }: Props): ReactNode => {
    if (torrentPromise === undefined) {
        return (
            <PlayerInitial />
        );
    }

    return (
        <ErrorBoundary FallbackComponent={PlayerError}>
            <Suspense fallback={<PlayerLoading />}>
                <Player torrentPromise={torrentPromise} />
            </Suspense>
        </ErrorBoundary>
    );
};
