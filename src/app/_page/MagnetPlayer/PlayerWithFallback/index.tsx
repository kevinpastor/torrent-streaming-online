import { lazy, type ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { type Torrent as ITorrent } from "webtorrent";

import { PlayerError } from "./PlayerError";
import { PlayerInitial } from "./PlayerInitial";
import { PlayerLoading } from "./PlayerLoading";

const LazyPlayer = lazy(async (): Promise<{ default: typeof Player }> => {
    const { Player } = await import("./Player");

    return { default: Player };
});

interface Props {
    torrentPromise?: Promise<ITorrent>;
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
                <LazyPlayer torrentPromise={torrentPromise} />
            </Suspense>
        </ErrorBoundary>
    );
};
