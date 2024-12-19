import { ReactNode, use, useState } from "react";
import { Torrent as ITorrent, TorrentFile } from "webtorrent";

import { FileSelector } from "./FileSelector";
import { Player } from "./Player";

interface Props {
    torrentPromise: Promise<ITorrent>;
}

export const Torrent = ({ torrentPromise }: Props): ReactNode => {
    const torrent: ITorrent = use(torrentPromise);

    const [selectedPath, setSelectedPath] = useState((): string | undefined => (
        torrent.files.find((file: TorrentFile): boolean => (
            // At runtime, `type` is defined.
            ("type" in file && file.type === "video/mp4")
            || file.path.endsWith(".mp4")
        ))?.path
    ));

    const handleChange = (path: string): void => {
        setSelectedPath(path);
    };

    const url: string | undefined = torrent.files.find(({ path }: TorrentFile): boolean => (path === selectedPath))?.streamURL;

    return (
        <>
            <FileSelector
                files={torrent.files}
                selectedPath={selectedPath}
                onChange={handleChange}
            />
            {url === undefined
                ? (
                    <>nothing to show here</>
                )
                : (
                    <Player url={url} />
                )}
        </>
    );
};
