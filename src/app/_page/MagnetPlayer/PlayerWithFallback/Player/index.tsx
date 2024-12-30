import { MediaPlayer, MediaProvider } from "@vidstack/react";
import { defaultLayoutIcons, DefaultVideoLayout } from "@vidstack/react/player/layouts/default";
import { CircleXIcon } from "lucide-react";
import { type ReactNode, use, useState } from "react";
import { type Torrent as ITorrent, type TorrentFile } from "webtorrent";

import { FileSelector, isFormatSupported } from "./FileSelector";

import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";

interface Props {
    torrentPromise: Promise<ITorrent>;
}

export const Player = ({ torrentPromise }: Props): ReactNode => {
    const torrent: ITorrent = use(torrentPromise);

    const [selectedPath, setSelectedPath] = useState((): string | undefined => (
        // undefined
        torrent.files.find(isFormatSupported)?.path
    ));

    const url: string | undefined = torrent.files.find(
        ({ path }: TorrentFile): boolean => (path === selectedPath)
    )?.streamURL;

    if (url === undefined) {
        return (
            <div className="aspect-video border rounded-md">
                <div className="flex items-center justify-center gap-2 h-full text-sm text-gray-400">
                    <CircleXIcon className="h-4 w-4" />
                    No supported video file found.
                </div>
            </div>
        );
    }

    const handleChange = (path: string): void => {
        setSelectedPath(path);
    };

    return (
        <MediaPlayer
            src={url}
            aspectRatio="16/9"
            viewType="video"
            playsInline
            // An explicit important border color is provided to better match the theme.
            className="col-span-3 !border-zinc-800"
        >
            <MediaProvider />
            <DefaultVideoLayout
                colorScheme="dark"
                icons={defaultLayoutIcons}
                slots={{
                    beforeCurrentTime: (
                        <FileSelector
                            files={torrent.files}
                            selectedPath={selectedPath}
                            onChange={handleChange}
                        />
                    )
                }}
            />
        </MediaPlayer>
    );
};
