import { ReactNode, use, useState } from "react";
import { Instance, Torrent } from "webtorrent";

import { Form } from "./Form";
import { PlayerWithFallback } from "./PlayerWithFallback";

interface Props {
    clientPromise: Promise<Instance>
}

export const MagnetPlayer = ({ clientPromise }: Props): ReactNode => {
    const client: Instance = use(clientPromise);
    const [torrentPromise, setTorrentPromise] = useState<Promise<Torrent>>();
    const handleMagnetChange = async (magnet: string): Promise<void> => {
        for (const torrent of client.torrents) {
            torrent.destroy();
        }

        const promise: Promise<Torrent> = new Promise((resolve): void => {
            client.add(magnet, resolve);
        });

        setTorrentPromise(promise);

        try {
            // TODO Comment why the promise is awaited.
            await promise;
        }
        catch {
            // TODO Comment
        }
    };

    return (
        <div className="space-y-4">
            <Form onMagnetChange={handleMagnetChange} />
            <PlayerWithFallback torrentPromise={torrentPromise} />
        </div>
    );
};
