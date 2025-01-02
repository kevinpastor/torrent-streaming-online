import { UsersIcon } from "lucide-react";
import { type ReactNode, useSyncExternalStore } from "react";
import { type Torrent } from "webtorrent";

import { Badge } from "~/components/Badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/Tooltip";

/**
 * Number of peers, excluding the client itself.
 */
const usePeers = (torrent: Torrent): number => {
    const peers: number = useSyncExternalStore(
        (onStoreChange: () => void): (() => void) => {
            const intervalId = setInterval(onStoreChange, 1000);

            return (): void => {
                clearInterval(intervalId);
            };
        },
        (): number => (torrent.numPeers - 1)
    );

    return peers;
};

interface Props {
    torrent: Torrent;
}

export const Peers = ({ torrent }: Props): ReactNode => {
    const peers: number = usePeers(torrent);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Badge className={peers === 0 ? "text-destructive" : undefined}>
                        <UsersIcon className="w-4 h-4 mr-1" />
                        {peers}
                    </Badge>
                </TooltipTrigger>
                <TooltipContent>
                    Peers
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
