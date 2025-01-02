import { ArrowDownIcon } from "lucide-react";
import { type ReactNode, useSyncExternalStore } from "react";
import { type Torrent } from "webtorrent";

import { Badge } from "~/components/Badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/Tooltip";

/**
 * In bytes per second.
 */
const useDownloadSpeed = (torrent: Torrent): number => {
    const downloadSpeed: number = useSyncExternalStore(
        (onStoreChange: () => void): (() => void) => {
            const intervalId = setInterval(onStoreChange, 1000);

            return (): void => {
                clearInterval(intervalId);
            };
        },
        (): number => (torrent.downloadSpeed)
    );

    return downloadSpeed;
};

interface Props {
    torrent: Torrent;
}

export const DownloadSpeed = ({ torrent }: Props): ReactNode => {
    const downloadSpeed: number = useDownloadSpeed(torrent);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Badge>
                        <ArrowDownIcon className="w-4 h-4 mr-1" />
                        {downloadSpeed < 1000000
                            ? `${(downloadSpeed / 1000).toFixed(2)} KB/s`
                            : `${(downloadSpeed / 1000000).toFixed(2)} MB/s`
                        }
                    </Badge>
                </TooltipTrigger>
                <TooltipContent>
                    Dowload Speed
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
