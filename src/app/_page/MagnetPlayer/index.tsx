import { type ReactNode, use, useState } from "react";
import { type Instance, type Torrent } from "webtorrent";

import { Form } from "./Form";
import { PlayerWithFallback } from "./PlayerWithFallback";

interface Props {
    clientPromise: Promise<Instance>
}

export const MagnetPlayer = ({ clientPromise }: Props): ReactNode => {
    const client: Instance = use(clientPromise);
    const [key, setKey] = useState(0);
    const [torrentPromise, setTorrentPromise] = useState<Promise<Torrent>>();
    const handleMagnetChange = async (magnet: string): Promise<void> => {
        for (const torrent of client.torrents) {
            torrent.destroy();
        }

        const promise: Promise<Torrent> = new Promise((resolve): void => {
            client.add(magnet, resolve);
        });

        setKey((key: number): number => (key + 1));
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
        <>
            <Form onMagnetChange={handleMagnetChange} />
            <PlayerWithFallback
                // A key is used to force the player to re-render when a new torrent is added.
                key={key}
                torrentPromise={torrentPromise}
            />
        </>
    );
};
