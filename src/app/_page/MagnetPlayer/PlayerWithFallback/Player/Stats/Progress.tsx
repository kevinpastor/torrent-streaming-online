import { type ReactNode, useSyncExternalStore } from "react";
import { type Torrent } from "webtorrent";

import { Badge } from "~/components/Badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/Tooltip";

/**
 * From 0 to 1.
 */
const useProgress = (torrent: Torrent): number => {
    const progress: number = useSyncExternalStore(
        (onStoreChange: () => void): (() => void) => {
            torrent.addListener("download", onStoreChange);

            return (): void => {
                torrent.removeListener("download", onStoreChange);
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
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Badge>
                        {(progress * 100).toFixed(0)}%
                    </Badge>
                </TooltipTrigger>
                <TooltipContent>
                    Progress
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
