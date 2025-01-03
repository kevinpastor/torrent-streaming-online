import { type ReactNode, useSyncExternalStore } from "react";
import { type Torrent } from "webtorrent";

import { Badge } from "~/components/Badge";
import { Tooltip } from "~/components/Tooltip";

/**
 * From 0 to 1.
 */
const useProgress = (torrent: Torrent): number => {
    const progress: number = useSyncExternalStore(
        (onStoreChange: () => void): (() => void) => {
            const intervalId = setInterval(onStoreChange, 1000);

            return (): void => {
                clearInterval(intervalId);
            };
        },
        (): number => (torrent.progress)
    );

    return progress;
};

interface Props {
    torrent: Torrent;
}

export const Progress = ({ torrent }: Props): ReactNode => {
    const progress: number = useProgress(torrent);

    return (
        <Tooltip content="Progress">
            <Badge>
                {(progress * 100).toFixed(0)}%
            </Badge>
        </Tooltip>
    );
};
