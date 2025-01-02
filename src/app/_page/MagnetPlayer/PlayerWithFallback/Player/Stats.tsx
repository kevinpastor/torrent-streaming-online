import { ArrowDownIcon, ArrowUpIcon, UsersIcon } from "lucide-react";
import { type ReactNode, useRef, useSyncExternalStore } from "react";
import { type Torrent } from "webtorrent";

import { Badge } from "~/components/Badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/Tooltip";

interface TorrentState {
    /**
     * In milliseconds.
     */
    timeRemaining: number;
    /**
     * In bytes.
     */
    downloaded: number;
    /**
     * In bytes.
     */
    uploaded: number;
    /**
     * In bytes per second.
     */
    downloadSpeed: number;
    /**
     * In bytes per second.
     */
    uploadSpeed: number;
    /**
     * From 0 to 1.
     */
    progress: number;
    ratio: number;
    peers: number;
    /**
     * In bytes.
     */
    size: number;
}

const getTorrentState = (torrent: Torrent): TorrentState => ({
    timeRemaining: torrent.timeRemaining,
    downloaded: torrent.downloaded,
    uploaded: torrent.uploaded,
    downloadSpeed: torrent.downloadSpeed,
    uploadSpeed: torrent.uploadSpeed,
    progress: torrent.progress,
    ratio: torrent.ratio,
    peers: torrent.numPeers,
    size: torrent.length
});

const useTorrentState = (torrent: Torrent): TorrentState => {
    const ref = useRef(getTorrentState(torrent));
    const torrentState = useSyncExternalStore(
        (onStoreChange): (() => void) => {
            const intervalId = setInterval((): void => {
                ref.current = getTorrentState(torrent);
                onStoreChange();
            }, 1000);

            return (): void => {
                clearInterval(intervalId);
            };
        },
        (): TorrentState => (ref.current)
    );

    return torrentState;
};

interface Props {
    torrent: Torrent;
}

export const Stats = ({ torrent }: Props): ReactNode => {
    const torrentState: TorrentState = useTorrentState(torrent);

    return (
        <div className="flex justify-center space-x-1">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Badge className={torrentState.peers === 0 ? "text-destructive" : undefined}>
                            <UsersIcon className="w-4 h-4 mr-1" />
                            {torrentState.peers}
                        </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                        Peers
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Badge>
                            <ArrowDownIcon className="w-4 h-4 mr-1" />
                            {(torrentState.downloadSpeed / 1000000).toFixed(2)} MB/s
                        </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                        Dowload Speed
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Badge>
                            <ArrowUpIcon className="w-4 h-4 mr-1" />
                            {(torrentState.uploadSpeed / 1000000).toFixed(2)} MB/s
                        </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                        Upload Speed
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Badge>
                            {(torrentState.progress * 100).toFixed(0)}%
                        </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                        Progress
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            {/* <Badge>
                {(torrentState.timeRemaining / 1000 / 60).toFixed(0)} minutes remaining
                </Badge> */}
            {/* <Badge>
                <ArrowDownIcon className="w-4 h-4 mr-1" />
                {(torrentState.downloaded / 1000000).toFixed(2)} MB
                </Badge> */}
            {/* <Badge>
                <ArrowUpIcon className="w-4 h-4 mr-1" />
                {(torrentState.uploaded / 1000000).toFixed(2)} MB
            </Badge> */}
            {/* <Badge>
                <MoveDownIcon className="w-4 h-4 mr-1" />
                {(torrentState.size / 1000000).toFixed(2)} MB
            </Badge> */}
            {/* <Badge>
                {torrentState.ratio.toFixed(2)} ratio
            </Badge> */}
            {/* {JSON.stringify(torrentState, undefined, 2)} */}
        </div>
    );
};
