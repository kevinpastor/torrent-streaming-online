import { ArrowUpIcon } from "lucide-react";
import { type ReactNode, useSyncExternalStore } from "react";
import { type Torrent } from "webtorrent";

import { Badge } from "~/components/Badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "~/components/Tooltip";

/**
 * In bytes per second.
 */
const useUploadSpeed = (torrent: Torrent): number => {
    const uploadSpeed: number = useSyncExternalStore(
        (onStoreChange: () => void): (() => void) => {
            torrent.addListener("upload", onStoreChange);

            return (): void => {
                torrent.removeListener("upload", onStoreChange);
            };
        },
        (): number => (torrent.uploadSpeed)
    );

    return uploadSpeed;
};

interface Props {
    torrent: Torrent;
}

export const UploadSpeed = ({ torrent }: Props): ReactNode => {
    const uploadSpeed: number = useUploadSpeed(torrent);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Badge>
                        <ArrowUpIcon className="w-4 h-4 mr-1" />
                        {uploadSpeed < 1000000
                            ? `${(uploadSpeed / 1000).toFixed(2)} KB/s`
                            : `${(uploadSpeed / 1000000).toFixed(2)} MB/s`
                        }
                    </Badge>
                </TooltipTrigger>
                <TooltipContent>
                    Upload Speed
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
