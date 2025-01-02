import { type ReactNode } from "react";
import { type Torrent } from "webtorrent";

import { DownloadSpeed } from "./DownloadSpeed";
import { Peers } from "./Peers";
import { Progress } from "./Progress";
import { UploadSpeed } from "./UploadSpeed";

interface Props {
    torrent: Torrent;
}

export const Stats = ({ torrent }: Props): ReactNode => (
    <div className="flex justify-center space-x-1">
        <Peers torrent={torrent} />
        <DownloadSpeed torrent={torrent} />
        <UploadSpeed torrent={torrent} />
        <Progress torrent={torrent} />
    </div>
);
