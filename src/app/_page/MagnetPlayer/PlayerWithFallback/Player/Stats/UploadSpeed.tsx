import { ArrowUpIcon } from "lucide-react";
import { type ReactNode, useSyncExternalStore } from "react";
import { type Torrent } from "webtorrent";

import { Badge } from "~/components/Badge";
import { Tooltip } from "~/components/Tooltip";

/**
 * In bytes per second.
 */
const useUploadSpeed = (torrent: Torrent): number => {
    const uploadSpeed: number = useSyncExternalStore(
        (onStoreChange: () => void): (() => void) => {
            const intervalId = setInterval(onStoreChange, 1000);

            return (): void => {
                clearInterval(intervalId);
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
        <Tooltip content="Upload Speed">
            <Badge>
                <ArrowUpIcon className="w-4 h-4 mr-1" />
                {uploadSpeed < 1000000
                    ? `${(uploadSpeed / 1000).toFixed(2)} KB/s`
                    : `${(uploadSpeed / 1000000).toFixed(2)} MB/s`
                }
            </Badge>
        </Tooltip>
    );
};
